"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ScrollText() {
    const sectionRef = useRef<HTMLDivElement>(null)

    // Track scroll only for this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    // Map vertical scroll → horizontal movement
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

    return (
        <section
            ref={sectionRef}
            className="relative mt-15 h-[25vh] bg-black overflow-hidden border-t border-neutral-800"
        >
            {/* Sticky container */}
            <p className="mt-6 text-xs tracking-[0.3em] uppercase text-neutral-500">
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
    return (
        <div className="flex gap-16">
            {[
                "SYSTEM",
                "MESH",
                "MATERIAL",
                "STRUCTURE",
                "NOISE",
                "GEOMETRY",
                "DISCIPLINE",
            ].map((word, i) => (
                <span
                    key={i}
                    className="font-serif text-[clamp(3rem,8vw,9rem)] tracking-tight text-neutral-200"
                >
                    {word}
                </span>
            ))}
        </div>
    )
}
