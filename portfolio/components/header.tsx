"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="mx-6 mt-6 flex items-center justify-between text-xs tracking-widest uppercase text-neutral-400 pointer-events-auto">
        {/* Left */}
        <div className="flex items-center gap-2">
          <span>Vatsal Shah</span>
        </div>

        {/* Center */}
        <nav className="text-white hidden md:flex gap-10">
          <span className="">01 About</span>
          <Link href={'/gallery'}><span>02 Gallery</span></Link>
          <span>03 Contact</span>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <span>Portfolio / 2026</span>
        </div>
      </div>
    </header>
  )
}
