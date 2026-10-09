import * as THREE from "three"
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js"

/** A hinged laptop built in local space; the display rotates around its rear edge. */
export function createLaptop() {
  const model = new THREE.Group()
  const aluminum = new THREE.MeshStandardMaterial({ color: 0x8795a8, metalness: 0.82, roughness: 0.3 })
  const edge = new THREE.MeshStandardMaterial({ color: 0x323e50, metalness: 0.7, roughness: 0.35 })
  const black = new THREE.MeshStandardMaterial({ color: 0x090e17, roughness: 0.48 })
  const keyMaterial = new THREE.MeshStandardMaterial({ color: 0x192231, metalness: 0.2, roughness: 0.55 })
  function box(
    parent: THREE.Group,
    material: THREE.Material,
    size: [number, number, number],
    position: [number, number, number],
    radius = 0.03,
  ) {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(...size, 2, radius), material)
    mesh.position.set(...position)
    parent.add(mesh)
    return mesh
  }

  // Beveled aluminum unibody, dark seam, keyboard recess, and inset trackpad.
  box(model, edge, [10, 0.22, 6.4], [0, -0.02, 0], 0.1)
  box(model, aluminum, [10, 0.25, 6.4], [0, 0.12, 0], 0.1)
  box(model, black, [8.15, 0.025, 3.35], [0, 0.254, -0.85], 0.1)
  box(model, edge, [3.4, 0.018, 1.62], [0, 0.252, 1.83], 0.08)
  box(model, aluminum, [3.34, 0.02, 1.56], [0, 0.266, 1.83], 0.07)
  box(model, black, [1.1, 0.055, 0.07], [0, 0.16, 3.19])

  const keyGeometry = new RoundedBoxGeometry(0.48, 0.07, 0.44, 2, 0.035)
  const keys = new THREE.InstancedMesh(keyGeometry, keyMaterial, 70)
  const matrix = new THREE.Object3D()
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 14; col++) {
      matrix.position.set(-3.64 + col * 0.56, 0.3, -2.15 + row * 0.56)
      matrix.updateMatrix()
      keys.setMatrixAt(row * 14 + col, matrix.matrix)
    }
  }
  model.add(keys)
  box(model, keyMaterial, [3.35, 0.07, 0.38], [0, 0.3, 0.6])
  for (const x of [-3.5, -2.9, -2.3, 2.3, 2.9, 3.5]) box(model, keyMaterial, [0.48, 0.07, 0.38], [x, 0.3, 0.6])

  // Fine key legends stay sharp at close range without a texture download.
  const legend = new THREE.InstancedMesh(new THREE.BoxGeometry(0.1, 0.005, 0.025), aluminum, 70)
  for (let i = 0; i < 70; i++) {
    matrix.position.set(-3.7 + (i % 14) * 0.56, 0.338, -2.22 + Math.floor(i / 14) * 0.56)
    matrix.updateMatrix()
    legend.setMatrixAt(i, matrix.matrix)
  }
  model.add(legend)
  const grille = new THREE.InstancedMesh(new THREE.BoxGeometry(0.035, 0.01, 0.075), black, 192)
  for (let i = 0; i < 192; i++) {
    matrix.position.set((i < 96 ? -4.5 : 4.27) + (i % 4) * 0.075, 0.25, -2.2 + (Math.floor(i / 4) % 24) * 0.12)
    matrix.updateMatrix()
    grille.setMatrixAt(i, matrix.matrix)
  }
  model.add(grille)
  // USB-C ports and polished hinge barrels.
  for (const x of [-5, 5]) for (const z of [-2, -1.35]) box(model, black, [0.015, 0.095, 0.35], [x, 0.07, z])
  for (const x of [-3.3, 3.3]) {
    const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.2, 16), edge)
    hinge.rotation.z = Math.PI / 2
    hinge.position.set(x, 0.28, -2.99)
    model.add(hinge)
  }

  const lid = new THREE.Group()
  lid.position.set(0, 0.43, -3.05)
  model.add(lid)
  box(lid, aluminum, [10, 0.19, 6.35], [0, 0, 3.05], 0.1)
  box(lid, black, [9.72, 0.035, 6.05], [0, -0.108, 3.05], 0.08)

  const canvas = document.createElement("canvas")
  canvas.width = 1440
  canvas.height = 900
  const ctx = canvas.getContext("2d")
  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 1440, 900)
    gradient.addColorStop(0, "#111d35")
    gradient.addColorStop(0.6, "#112c44")
    gradient.addColorStop(1, "#343064")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 1440, 900)
    // Match the site's D monogram, prominently placed beside the screen headline.
    ctx.save()
    ctx.translate(990, 170)
    ctx.scale(5, 5)
    ctx.fillStyle = "#429eff"
    ctx.fill(new Path2D("M12 10H29C45 10 54 19 54 32S45 54 29 54H12V10ZM33 21L23 43H30L40 21H33Z"), "evenodd")
    ctx.restore()
    ctx.fillStyle = "#91b9de"
    ctx.font = "22px monospace"
    ctx.fillText("davidstojanovski.com", 64, 65)
    ctx.fillStyle = "#ecf4ff"
    ctx.font = "bold 76px sans-serif"
    ctx.fillText("David", 100, 285)
    ctx.fillText("Stojanovski", 100, 375)
    ctx.fillStyle = "#74c7ff"
    ctx.font = "24px monospace"
    ctx.fillText("DESIGN  /  ENGINEER  /  SHIP", 104, 445)
    ctx.fillStyle = "#0b1426"
    ctx.fillRect(100, 530, 1240, 275)
    const lines = [
      "const developer = {",
      '  name: "David Stojanovski",',
      '  focus: ["architecture", "products", "people"],',
      "  craft: curiosity + experience",
      "};",
    ]
    ctx.font = "25px monospace"
    lines.forEach((line, i) => {
      ctx.fillStyle = i % 2 ? "#9cbad5" : "#8cd8e4"
      ctx.fillText(line, 145, 585 + i * 43)
    })
  }
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  const displayMaterial = new THREE.MeshBasicMaterial({ map: texture, color: 0x000000 })
  const display = new THREE.Mesh(new THREE.PlaneGeometry(9.12, 5.48), displayMaterial)
  // Local +Y on the screen points toward the front edge of the closed lid.
  display.rotation.x = Math.PI / 2
  display.position.set(0, -0.131, 3.03)
  lid.add(display)
  const webcam = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 8), edge)
  webcam.position.set(0, -0.14, 5.94)
  lid.add(webcam)

  // The full D monogram is a crisp, light-independent inlay with a real slash cutout.
  const monogram = new THREE.Shape()
  monogram.moveTo(12, -10)
  monogram.lineTo(29, -10)
  monogram.bezierCurveTo(45, -10, 54, -19, 54, -32)
  monogram.bezierCurveTo(54, -45, 45, -54, 29, -54)
  monogram.lineTo(12, -54)
  monogram.closePath()
  const slash = new THREE.Path()
  slash.moveTo(33, -21)
  slash.lineTo(23, -43)
  slash.lineTo(30, -43)
  slash.lineTo(40, -21)
  slash.closePath()
  monogram.holes.push(slash)
  const markGeometry = new THREE.ShapeGeometry(monogram, 24)
  markGeometry.translate(-33, 32, 0)
  markGeometry.scale(0.05, 0.05, 1)
  const mark = new THREE.Mesh(markGeometry, new THREE.MeshBasicMaterial({ color: 0x429eff, toneMapped: false }))
  mark.rotation.x = -Math.PI / 2
  mark.position.set(0, 0.104, 3.05)
  lid.add(mark)

  return {
    model,
    update(progress: number) {
      const open = THREE.MathUtils.smoothstep(progress, 0, 1)
      lid.rotation.x = -open * THREE.MathUtils.degToRad(108)
      displayMaterial.color.setScalar(THREE.MathUtils.smoothstep(open, 0.12, 0.55) * 0.9)
    },
    dispose() {
      texture.dispose()
    },
  }
}
