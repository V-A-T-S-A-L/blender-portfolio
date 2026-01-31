"use client"

import { useEffect, useRef } from "react"

export default function MagneticCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const move = (e: MouseEvent) => {
            if (!cursorRef.current) return

            cursorRef.current.style.transform = `
        translate(${e.clientX}px, ${e.clientY}px)
        translate(-50%, -50%)
      `
        }

        window.addEventListener("mousemove", move)
        return () => window.removeEventListener("mousemove", move)
    }, [])

    return (
        <div
            ref={cursorRef}
            className="
        pointer-events-none
        fixed
        top-0 left-0
        z-[9999]
        h-15 w-15
        rounded-full
        bg-white
        mix-blend-difference
        transition-transform duration-75 ease-out
      "
        />
    )
}
