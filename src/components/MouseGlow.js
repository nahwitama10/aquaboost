"use client"

import { useState } from "react"

export default function MouseGlow() {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  function handleMouseMove(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{
            left: position.x - 250,
            top: position.y - 250,
            background: "rgba(220,38,38,0.25)",
            transition: "all 0.15s ease-out"
            }}
      />
    </div>
  )
}