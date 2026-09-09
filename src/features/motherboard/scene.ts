import * as THREE from "three"

/** A procedural motherboard: actual geometry at every level of the scroll journey. */
export function createMotherboard() {
  const board = new THREE.Group()
  const materials = {
    pcb: new THREE.MeshStandardMaterial({ color: 0x092e35, metalness: 0.65, roughness: 0.42 }),
    black: new THREE.MeshStandardMaterial({ color: 0x101923, metalness: 0.5, roughness: 0.4 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x94afbd, metalness: 0.85, roughness: 0.28 }),
    gold: new THREE.MeshStandardMaterial({ color: 0xc7a765, metalness: 0.8, roughness: 0.3 }),
    glow: new THREE.MeshStandardMaterial({ color: 0x3edce7, emissive: 0x11bccc, emissiveIntensity: 2 }),
  }
  function box(x: number, y: number, z: number, w: number, h: number, d: number, material: THREE.Material) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material)
    mesh.position.set(x, y, z)
    board.add(mesh)
    return mesh
  }
  box(0, -0.16, 0, 11, 0.3, 13, materials.pcb)
  // CPU socket, retention frame, and brushed-metal heat spreader.
  box(0, 0.1, -1, 3.15, 0.2, 3.15, materials.black)
  box(0, 0.24, -1, 2.7, 0.12, 2.7, materials.metal)
  box(0, 0.33, -1, 2.38, 0.1, 2.38, materials.black)
  box(0, 0.42, -1, 2.1, 0.12, 2.1, materials.metal)
  box(0, 0.49, -1, 0.72, 0.025, 0.72, materials.glow)
  for (let i = 0; i < 28; i++) {
    const p = -1.35 + i * 0.1
    box(p, 0.12, 0.64, 0.045, 0.06, 0.2, materials.gold)
    box(p, 0.12, -2.64, 0.045, 0.06, 0.2, materials.gold)
  }
  // Four DIMM banks with individual contacts and locking tabs.
  for (let i = 0; i < 4; i++) {
    const x = 2.3 + i * 0.62
    box(x, 0.23, -1.25, 0.34, 0.45, 5.7, materials.black)
    box(x, 0.49, -1.25, 0.07, 0.08, 5.1, i % 2 ? materials.gold : materials.glow)
    for (const z of [-4.2, 1.7]) box(x, 0.33, z, 0.42, 0.62, 0.25, materials.metal)
    for (let j = 0; j < 38; j++) box(x + 0.18, 0.2, -3.7 + j * 0.13, 0.035, 0.2, 0.055, materials.gold)
  }
  // Rear I/O housing and finned voltage-regulator heatsinks.
  for (let i = 0; i < 5; i++) box(-4.7, 0.45, -4.5 + i * 1.22, 1.2, 0.9, 1, materials.metal)
  for (let i = 0; i < 16; i++) {
    box(-2.5 + i * 0.19, 0.47, -4.6, 0.09, 0.9, 1.4, materials.black)
    box(-2.9, 0.4, -2.5 + i * 0.19, 0.95, 0.76, 0.09, materials.metal)
  }
  // PCIe slots and chipset heatsink.
  for (let i = 0; i < 3; i++) {
    box(-0.9, 0.18, 2.1 + i * 1.25, 4.8, 0.34, 0.38, materials.black)
    box(-0.9, 0.36, 2.1 + i * 1.25, 4.4, 0.035, 0.07, materials.gold)
  }
  box(3.1, 0.18, 4.3, 2.5, 0.35, 2.4, materials.black)
  for (let i = 0; i < 12; i++) box(2.05 + i * 0.19, 0.44, 4.3, 0.08, 0.35, 2.2, materials.metal)
  // Capacitors and tiny surface-mounted resistors.
  const cylinder = new THREE.CylinderGeometry(0.14, 0.14, 0.44, 12)
  for (let i = 0; i < 35; i++) {
    const cap = new THREE.Mesh(cylinder, materials.metal)
    cap.position.set(-3.7 + (i % 2) * 0.4, 0.23, -5.5 + Math.floor(i / 2) * 0.63)
    board.add(cap)
  }
  for (let i = 0; i < 65; i++) {
    const x = -4.7 + ((i * 37) % 95) / 10
    const z = 5.5 - ((i * 13) % 25) / 10
    box(x, 0.06, z, 0.16, 0.12, 0.09, materials.black)
  }
  // Routed copper traces, with luminous signal paths across the solder mask.
  const points: number[] = []
  for (let i = 0; i < 90; i++) {
    const x = -5 + (i % 45) * 0.22
    const start = i < 45 ? -6.2 : 6.2
    const end = i < 45 ? -2.8 : 1
    const bend = start * 0.58 + (i % 7) * 0.075
    const offset = (i % 2 ? 1 : -1) * 0.32
    points.push(
      x,
      0.012,
      start,
      x,
      0.012,
      bend,
      x,
      0.012,
      bend,
      x + offset,
      0.012,
      bend - Math.sign(start) * 0.32,
      x + offset,
      0.012,
      bend - Math.sign(start) * 0.32,
      x + offset,
      0.012,
      end,
    )
  }
  const traceGeometry = new THREE.BufferGeometry()
  traceGeometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3))
  board.add(
    new THREE.LineSegments(
      traceGeometry,
      new THREE.LineBasicMaterial({ color: 0x38aab2, transparent: true, opacity: 0.6 }),
    ),
  )
  for (const x of [-5, 5])
    for (const z of [-6, 6]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.045, 8, 16), materials.gold)
      ring.rotation.x = Math.PI / 2
      ring.position.set(x, 0.02, z)
      board.add(ring)
    }
  return board
}
