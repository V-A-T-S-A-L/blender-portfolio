"use client"

import { ArrowUpRight, Heart } from "lucide-react"
import Hero from "@/components/hero"
import ScrollText from "@/components/scrolltext"
import Header from "@/components/header"
import PillarGallery from "@/components/pillar-gallery"
import About from "@/components/about"
import Contact from "@/components/contact"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Header />

      <Hero />
      <ScrollText />
      <PillarGallery />

      {/* Archive Section */}
      <div className="relative text-center flex flex-col items-center px-4 sm:px-6 md:px-0">
        {/* Label */}
        <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg tracking-[0.25em] sm:tracking-[0.3em] uppercase
    text-neutral-600 dark:text-neutral-400">
          Archive
        </p>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl
    text-neutral-700 dark:text-neutral-300 leading-tight sm:leading-snug md:leading-tight">
          Enter the Full Collection
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 sm:mt-6 max-w-xs sm:max-w-sm md:max-w-md text-sm sm:text-base leading-relaxed
    text-neutral-500 dark:text-neutral-400">
          A curated body of procedural studies, material experiments, and abstract
          systems rendered as objects.
        </p>

        {/* Link */}
        <Link href="/gallery">
          <div className="mt-6 sm:mt-10 flex justify-center group">
            <span className="inline-flex items-center gap-2 text-lg sm:text-xl md:text-[20px] tracking-[0.3em] sm:tracking-[0.35em] uppercase
        text-neutral-700 dark:text-neutral-300
        transition-all group-hover:text-neutral-500 dark:group-hover:text-neutral-400">
              Explore Gallery
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </Link>
      </div>

      <About />
      <Contact />

      {/* Footer */}
      <footer
        className="
    py-8 sm:py-12 md:py-16
    flex flex-col sm:flex-row
    justify-center items-center
    gap-2 sm:gap-4
    text-sm sm:text-base
    text-muted-foreground
    text-center
  "
      >
        <span>© {new Date().getFullYear()} Vatsal's Blender Portfolio</span>
        <span>·</span>
        <span>Crafted with</span>
        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 animate-pulse" />
      </footer>

    </div>
  )
}
