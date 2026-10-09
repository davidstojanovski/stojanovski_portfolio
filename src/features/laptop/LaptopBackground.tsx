import { useEffect, useRef } from "react"

export function LaptopBackground() {
  const host = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let disposed = false
    let cleanup = () => {}
    void Promise.all([import("three"), import("./scene")])
      .then(([THREE, { createLaptop }]) => {
        if (disposed || !host.current) return
        const container = host.current
        let renderer: InstanceType<typeof THREE.WebGLRenderer>
        try {
          renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" })
        } catch {
          return // The CSS background remains visible without WebGL.
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
        container.appendChild(renderer.domElement)
        const scene = new THREE.Scene()
        const { model, update, dispose } = createLaptop()
        scene.add(model)
        scene.add(new THREE.HemisphereLight(0xb9e9ff, 0x123744, 2.5))
        const light = new THREE.DirectionalLight(0xd1eaff, 4)
        light.position.set(3, 8, 5)
        scene.add(light)
        const accent = new THREE.PointLight(0x6666ff, 40, 20)
        accent.position.set(-4, 3, -3)
        scene.add(accent)
        const camera = new THREE.PerspectiveCamera(43, 1, 0.05, 100)
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
        let frame = 0
        let progress = 0
        let target = 0
        let width = window.innerWidth
        const render = () => {
          frame = 0
          progress += (target - progress) * 0.075
          const p = reducedMotion.matches ? 0 : progress
          const mobile = width < 768
          camera.position.set(10 - p * 2, 8 - p * 2, 14)
          if (mobile) camera.position.multiplyScalar(1.55)
          camera.lookAt(mobile ? 0 : -2.6, 1.1 + p * 0.6, 0)
          update(reducedMotion.matches ? 0.7 : p)
          renderer.render(scene, camera)
          container.dataset.depth = p.toFixed(2)
          if (Math.abs(target - progress) > 0.0001 && !reducedMotion.matches && !document.hidden)
            frame = requestAnimationFrame(render)
        }
        const schedule = () => {
          if (!frame && !document.hidden) frame = requestAnimationFrame(render)
        }
        const scroll = () => {
          const range = document.documentElement.scrollHeight - window.innerHeight
          target = Math.min(1, Math.max(0, window.scrollY / Math.max(range, 1)))
          schedule()
        }
        const resize = () => {
          width = window.innerWidth
          camera.aspect = width / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(width, window.innerHeight)
          scroll()
        }
        const observer = new ResizeObserver(resize)
        observer.observe(document.body)
        window.addEventListener("scroll", scroll, { passive: true })
        window.addEventListener("resize", resize)
        document.addEventListener("visibilitychange", schedule)
        reducedMotion.addEventListener("change", schedule)
        resize()
        cleanup = () => {
          cancelAnimationFrame(frame)
          observer.disconnect()
          window.removeEventListener("scroll", scroll)
          window.removeEventListener("resize", resize)
          document.removeEventListener("visibilitychange", schedule)
          reducedMotion.removeEventListener("change", schedule)
          const geometries = new Set<InstanceType<typeof THREE.BufferGeometry>>()
          const materials = new Set<InstanceType<typeof THREE.Material>>()
          model.traverse((object) => {
            if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
              if (object instanceof THREE.InstancedMesh) object.dispose()
              geometries.add(object.geometry)
              for (const material of Array.isArray(object.material) ? object.material : [object.material])
                materials.add(material)
            }
          })
          geometries.forEach((geometry) => geometry.dispose())
          materials.forEach((material) => material.dispose())
          dispose()
          renderer.dispose()
          renderer.domElement.remove()
        }
      })
      .catch(() => {
        /* Preserve the decorative fallback if the optional scene cannot load. */
      })
    return () => {
      disposed = true
      cleanup()
    }
  }, [])

  return <div ref={host} className="laptop-background" aria-hidden="true" />
}
