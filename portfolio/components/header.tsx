"use client"

import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="mx-6 mt-6 flex items-center justify-between text-xs tracking-widest uppercase text-neutral-400 pointer-events-auto">
        
        {/* Left */}
        <div className="flex items-center gap-4">
          <span>Vatsal Shah</span>
        </div>

        {/* Center */}
        <nav className="hidden md:flex gap-10 dark:text-white text-black">
          <span>01 About</span>
          <Link href="/gallery">02 Gallery</Link>
          <span>03 Contact</span>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:block">Portfolio / 2026</span>
          <ThemeToggle />
        </div>

      </div>
    </header>
  )
}
