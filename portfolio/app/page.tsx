"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUpRight, Heart, Sparkles } from "lucide-react"
import Hero from "@/components/hero"
import ScrollText from "@/components/scrolltext"
import Header from "@/components/header"
import PillarGallery from "@/components/pillar-gallery"
import About from "@/components/about"
import Link from "next/link"
import Contact from "@/components/contact"

export default function PortfolioPage() {
  return (
    <div className="bg-black text-foreground overflow-x-hidden">
      <Header />

      <Hero />

      <ScrollText />

      <PillarGallery />

      <div className="relative text-center items-center">
        <p className="mb-6 text-lg tracking-[0.35em] uppercase text-neutral-500">
          Archive
        </p>

        <h2 className="font-serif text-neutral-500 text-xl">
          Enter the Full Collection
        </h2>

        <p className="mx-auto mt-6 max-w-md text-sm text-neutral-400 leading-relaxed">
          A curated body of procedural studies, material experiments, and abstract
          systems rendered as objects.
        </p>

        <Link href={'/gallery'}>
          <div className="mt-10 flex justify-center group">
            <span className="inline-flex items-center group-hover:text-neutral-400 transition-all gap-2 text-[20px] tracking-[0.4em] uppercase text-neutral-500">
              Explore Gallery
              <ArrowUpRight className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </span>
          </div>
        </Link>
      </div>


      <About />

      <Contact />

      <footer className="py-16 text-center text-sm text-muted-foreground flex justify-center items-center">
        © {new Date().getFullYear()} Vatsal's Blender Portfolio · Crafted with <Heart className="ml-2 w-4 text-pink-500 h-4 animate-pulse" />
      </footer>
    </div>
  )
}
