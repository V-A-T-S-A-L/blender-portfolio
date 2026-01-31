"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ScrollText() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section
      ref={sectionRef}
      className="
        relative mt-15 h-[25vh] overflow-hidden
        bg-background dark:bg-black
        border-t border-border
      "
    >
      {/* Section label */}
      <p
        className="
          mt-4 ml-6 text-xs tracking-[0.3em] uppercase
          text-muted-foreground
        "
      >
        03 - Philosophy
      </p>

      <div className="sticky top-0 flex items-center">
        <motion.div
          style={{ x }}
          className="whitespace-nowrap flex gap-16 px-16"
        >
          <TextRow />
          <TextRow />
        </motion.div>
      </div>
    </section>
  )
}

function TextRow() {
  const words = [
    "SYSTEM",
    "MESH",
    "MATERIAL",
    "STRUCTURE",
    "NOISE",
    "GEOMETRY",
    "RENDER",
    "DISCIPLINE",
  ]

  return (
    <div className="flex gap-16">
      {words.map((word, i) => {
        const isOutline = i % 2 === 1

        return (
          <span
            key={i}
            className={`
              font-serif
              text-[clamp(3rem,8vw,9rem)]
              tracking-tight
              ${
                isOutline
                  ? `
                    text-transparent
                    [-webkit-text-stroke:0.75px_theme(colors.neutral.800)]
                    dark:[-webkit-text-stroke:0.75px_theme(colors.neutral.200)]
                  `
                  : `
                    text-neutral-900
                    dark:text-neutral-100
                  `
              }
            `}
          >
            {word}
          </span>
        )
      })}
    </div>
  )
}
