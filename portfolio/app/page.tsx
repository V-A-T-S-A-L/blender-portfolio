"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, Sparkles } from "lucide-react"
import Hero from "@/components/hero"
import ScrollText from "@/components/scrolltext"
import Header from "@/components/header"

export default function PortfolioPage() {
  return (
    <div className="bg-black text-foreground overflow-x-hidden">
      <Header />

      <Hero />

      <ScrollText />

      {/* ABOUT */}
      <section className="py-32 border-t bg-black border-neutral-800">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">About the Artist</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I’m a 3D artist focused on cinematic visuals, luxury aesthetics,
              and experimental forms. Blender is my primary tool to sculpt
              immersive digital worlds that feel tangible yet surreal.
            </p>
            <Button className="mt-8 rounded-full">
              <Sparkles className="mr-2 h-4 w-4" /> Let’s Collaborate
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/bg.avif"
                alt="Artist"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} 3D Portfolio · Crafted with Blender
      </footer>
    </div>
  )
}
