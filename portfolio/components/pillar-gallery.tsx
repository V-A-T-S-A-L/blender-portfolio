"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import clsx from "clsx"

const images = [
  {
    src: "untitled41.jpg",
    position: "center",
  },
  {
    src: "hero-bg.jpg",
    position: "top",
  },
  {
    src: "untitled52.jpg",
    position: "center",
  },
]

export default function PillarGallery() {
  const [active, setActive] = useState<number | null>(1)

  return (
    <section className="bg-black py-24 md:py-32">
      <h2 className="mb-12 text-center text-white text-xs md:text-sm tracking-[0.3em] uppercase">
        Innovation You Can Feel
      </h2>

      {/* 
        Layout:
        - mobile: vertical stack
        - md+: horizontal pillars
      */}
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-6
          px-6
          md:h-[420px]
          md:flex-row
          lg:h-[520px]
        "
      >
        {images.map((img, i) => {
          const isActive = active === i

          return (
            <motion.div
              key={i}
              layout
              onClick={() => setActive(isActive ? null : i)}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={clsx(
                "relative cursor-pointer overflow-hidden rounded-lg",

                // MOBILE: vertical expansion
                isActive
                  ? "h-[320px]"
                  : "h-[160px]",

                // DESKTOP: horizontal pillars
                "md:h-full",
                isActive
                  ? "md:w-[60%]"
                  : "md:w-[20%]"
              )}
            >
              {/* IMAGE */}
              <motion.img
                src={img.src}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: img.position }}
                animate={{
                  filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay for collapsed */}
              {!isActive && (
                <div className="absolute inset-0 bg-black/15" />
              )}              
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
