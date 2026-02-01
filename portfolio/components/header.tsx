"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import ThemeToggle from "@/components/theme-toggle"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div
        className="
          pointer-events-auto
          mx-4 sm:mx-6
          mt-4 sm:mt-6
          flex items-center justify-between
          text-[10px] sm:text-xs
          tracking-widest uppercase
          text-neutral-500
        "
      >
        {/* Left */}
        <Link href={'/'}><span className="whitespace-nowrap">Vatsal Shah</span></Link>

        {/* Center (desktop only) */}
        <nav className="hidden md:flex gap-8 lg:gap-10 dark:text-white text-black">
          <Link href="/#about">01 About</Link>
          <Link href="/gallery">02 Gallery</Link>
          <Link href="/#contact">03 Contact</Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:block">Portfolio / 2026</span>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden tracking-[0.3em]"
          >
            {open ? "CLOSE" : "MENU"}
          </button>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="
              pointer-events-auto
              md:hidden
              mt-4 mx-4
              rounded-xl
              border border-neutral-800
              bg-black/90 backdrop-blur
            "
          >
            <div className="flex flex-col divide-y divide-neutral-800 text-xs tracking-widest uppercase">
              <Link
                href="#about"
                onClick={() => setOpen(false)}
                className="px-6 py-4 hover:text-white"
              >
                01 About
              </Link>
              <Link
                href="/gallery"
                onClick={() => setOpen(false)}
                className="px-6 py-4 hover:text-white"
              >
                02 Gallery
              </Link>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="px-6 py-4 hover:text-white"
              >
                03 Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
