"use client"

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion"
import { useRef } from "react"
import HeroModel from "./hero-model"

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(sectionRef, {
    margin: "-20% 0px -20% 0px",
    amount: 0.2,
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const yLeft = useTransform(scrollYProgress, [0, 0.4], [0, -120])
  const yRight = useTransform(scrollYProgress, [0, 0.4], [0, -160])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-black text-white overflow-hidden"
    >
      {/* Left Editorial Text */}
      <motion.div
        style={{ y: yLeft, opacity }}
        className="absolute left-8 top-1/2 z-20 max-w-md -translate-y-1/2"
      >
        <p className="mb-6 text-xs tracking-[0.3em] uppercase text-neutral-500">
          01 - Process
        </p>

        <h1 className="italic font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.95]">
          Procedural
          <br />
          Form
        </h1>
      </motion.div>

      {/* Right Editorial Text */}
      <motion.div
        style={{ y: yRight, opacity }}
        className="absolute right-8 bottom-24 z-20 text-right max-w-md"
      >
        <p className="mb-6 text-xs tracking-[0.3em] uppercase text-neutral-500">
          02 - Material
        </p>

        <h2 className="italic font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.95]">
          Noise
          <br />
          Systems
        </h2>
      </motion.div>

      {/* 🎥 Center 3D System (Smooth Exit) */}
      <AnimatePresence>
        {isInView && (
          <motion.div
            key="hero-model"
            className="absolute inset-0 z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <HeroModel />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-[10px] tracking-widest text-neutral-500"
      >
        Scroll
      </motion.div>
    </section>
  )
}
