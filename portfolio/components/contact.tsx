"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="relative mt-20 mb-20 bg-background text-foreground dark:bg-black">
      <div className="mx-auto max-w-[1200px] px-6 text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-xs tracking-[0.35em] uppercase text-neutral-600 dark:text-neutral-400"
        >
          Contact
        </motion.p>

        {/* Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif italic text-[clamp(2.4rem,4.5vw,4rem)] leading-tight text-neutral-900 dark:text-neutral-100"
        >
          Open to collaborations 
          <br />
          and dialogue.
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-10 max-w-xl leading-relaxed text-neutral-700 dark:text-neutral-400"
        >
          If you’re interested in procedural systems, material-led visuals,
          or experimental digital work, feel free to reach out.
          I’m always open to thoughtful conversations.
        </motion.p>

        {/* Email */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 text-sm text-neutral-700 dark:text-neutral-400"
        >
          Reach me at{" "}
          <a
            href="mailto:vatsalshah004@gmail.com"
            className="font-serif text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 dark:hover:text-white transition-colors"
          >
            vatsalshah004@gmail.com
          </a>
        </motion.p>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <Link
            href="https://vatsalshah.vercel.app"
            target="_blank"
            className="group inline-flex items-center gap-3 font-serif italic text-lg text-neutral-800 dark:text-neutral-200 transition-colors hover:text-neutral-900 dark:hover:text-white"
          >
            More About Me
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
