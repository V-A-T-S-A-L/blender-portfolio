"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="relative bg-black text-white py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-20 items-center">

          {/* LEFT — spans 3 columns but ends at center */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3 md:pr-12"
          >
            <p className="mb-6 text-xs tracking-[0.3em] uppercase text-neutral-500">
              About
            </p>

            <h2 className="font-serif italic text-[clamp(2.5rem,4vw,4rem)] leading-[1]">
              I design systems
              <br />
              before surfaces.
            </h2>

            <p className="mt-10 max-w-xl text-neutral-400 leading-relaxed">
              My work explores procedural form, material tension, and controlled
              noise. Each piece begins as a system: rules, constraints, and
              behaviors, before becoming an object.
            </p>

            <p className="mt-6 max-w-xl text-neutral-400 leading-relaxed">
              Blender is my primary environment. I use it not as a modeling tool,
              but as a framework to construct digital matter that feels deliberate,
              physical, and emotionally restrained.
            </p>
          </motion.div>

          {/* RIGHT — starts AFTER center */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 md:pl-12"
          >
            <p className="mb-6 text-xs tracking-[0.3em] uppercase text-neutral-500">
              Focus
            </p>

            <ul className="space-y-4 font-serif italic text-lg text-neutral-200">
              <li>Procedural Geometry</li>
              <li>Material Studies</li>
              <li>Abstract Systems</li>
              <li>Cinematic Composition</li>
            </ul>

            <div className="mt-16">
              <p className="mb-4 text-xs tracking-[0.3em] uppercase text-neutral-500">
                Tools
              </p>

              <p className="text-neutral-400">
                Blender · Geometry Nodes · Cycles ·
                <br />
                Experimental Shaders
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
