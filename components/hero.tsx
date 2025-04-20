"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { MouseModel } from "./mouse-model"
import { Button } from "@/components/ui/button"

export function Hero() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    button.addEventListener("mouseenter", handleMouseEnter)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-transparent" />
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Design Your Dream Mouse
            </h1>
            <p className="text-lg text-gray-400 max-w-md mx-auto lg:mx-0">
              Ship your design, get funded, make it real.
            </p>
            <div className="pt-4">
              <Button
                ref={buttonRef}
                size="lg"
                className={`relative overflow-hidden bg-cyan-600 text-white hover:bg-cyan-700 transition-all duration-300 ${isHovered ? "shadow-[0_0_15px_rgba(34,211,238,0.5)]" : ""}`}
              >
                <span className="relative z-10">Join HackMouse</span>
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 transition-transform duration-500 ease-out ${isHovered ? "translate-y-0" : "translate-y-full"}`}
                />
              </Button>
            </div>
          </div>
          <div className="h-[350px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-cyan-950/30 to-transparent rounded-xl overflow-hidden border border-cyan-900/50">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <MouseModel />
              <Environment preset="studio" />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
