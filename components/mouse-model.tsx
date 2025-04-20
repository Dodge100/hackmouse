"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { STLLoader } from "three/examples/jsm/loaders/STLLoader"
import { useLoader } from "@react-three/fiber"
import type { Group } from "three"

export function MouseModel() {
  const groupRef = useRef<Group>(null)
  const geometry = useLoader(STLLoader, "/mouse.stl")

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[0.03, 0.03, 0.03]}>
      <mesh castShadow receiveShadow>
        <primitive object={geometry} attach="geometry" />
        <meshStandardMaterial color="#222222" metalness={0.7} roughness={0.2} />
      </mesh>

      <mesh scale={[1.05, 1.05, 1.05]}>
        <primitive object={geometry} attach="geometry" />
        <meshStandardMaterial
          color="#22d3ee"
          transparent={true}
          opacity={0.15}
          emissive="#22d3ee"
          emissiveIntensity={2}
        />
      </mesh>

      <mesh position={[0, 10, 40]} castShadow>
        <sphereGeometry args={[5, 16, 16]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={3} />
      </mesh>
    </group>
  )
}
