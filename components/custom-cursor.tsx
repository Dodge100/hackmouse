"use client"

import { useState, useEffect } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [hoveredElement, setHoveredElement] = useState<Element | null>(null)

  useEffect(() => {
    document.body.style.cursor = "none"

    const onMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.tagName === "BUTTON" || target.tagName === "A" || target.classList.contains("hoverable")) {
        setIsHovering(true)
        setHoveredElement(target)

        target.classList.add("hover-border")
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.tagName === "BUTTON" || target.tagName === "A" || target.classList.contains("hoverable")) {
        setIsHovering(false)

        target.classList.remove("hover-border")
        setHoveredElement(null)
      }
    }

    window.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseover", onMouseOver)
    document.addEventListener("mouseout", onMouseOut)

    let animationFrameId: number

    const animateCursor = () => {
      setPosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.15,
        y: prev.y + (targetPosition.y - prev.y) * 0.15,
      }))

      animationFrameId = requestAnimationFrame(animateCursor)
    }

    animationFrameId = requestAnimationFrame(animateCursor)

    return () => {
      document.body.style.cursor = "auto"
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseover", onMouseOver)
      document.removeEventListener("mouseout", onMouseOut)

      if (hoveredElement) {
        hoveredElement.classList.remove("hover-border")
      }

      cancelAnimationFrame(animationFrameId)
    }
  }, [targetPosition, hoveredElement])

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-white"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? "24px" : "12px",
          height: isHovering ? "24px" : "12px",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s, height 0.2s",
          mixBlendMode: "difference",
        }}
      />
      <style jsx global>{`
        .hover-border {
          position: relative;
          z-index: 1;
        }
        
        .hover-border::after {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          border: 2px solid #22d3ee;
          border-radius: inherit;
          z-index: -1;
          pointer-events: none;
          animation: borderPulse 1.5s infinite;
        }
        
        @keyframes borderPulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </>
  )
}
