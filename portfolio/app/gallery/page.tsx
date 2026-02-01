"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import { renders } from "@/lib/renders"
import { Heart } from "lucide-react"

export default function GalleryPage() {
    const [active, setActive] = useState<null | typeof renders[0]>(null)

    return (
        <>
            <section className="min-h-screen bg-background text-foreground dark:bg-black dark:text-white">
                <Header />

                <div className="mx-auto max-w-[1400px] px-6 pt-40 pb-32">

                    {/* Intro */}
                    <div className="mb-24 max-w-2xl">
                        <p className="text-xs tracking-[0.35em] uppercase text-neutral-500">
                            Archive
                        </p>
                        <h1 className="mt-6 font-serif italic text-4xl md:text-5xl">
                            Render Collection
                        </h1>
                        <p className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            A growing body of procedural and material-driven render studies.
                            Click any frame to view it in isolation.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {renders.map((item, i) => (
                            <motion.figure
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.03 }}
                                className="group cursor-pointer"
                                onClick={() => setActive(item)}
                            >
                                <div className="relative rounded-lg aspect-video overflow-hidden bg-neutral-900">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="
                    h-full w-full object-cover
                    transition-all
                    duration-700
                    ease-out
                    group-hover:scale-[1.03]
                  "
                                    />
                                </div>

                                <figcaption className="mt-3 flex justify-between text-xs text-neutral-500">
                                    <span className="font-serif italic">{item.title}</span>
                                    {/* <span>{item.year}</span> */}
                                </figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {active && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center px-6"
                            onClick={() => setActive(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.96, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.96, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="relative max-w-6xl w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-auto object-contain"
                                />

                                <div className="mt-6 flex justify-between text-sm text-neutral-400">
                                    <span className="font-serif italic">{active.title}</span>
                                    {/* <span>{active.year}</span> */}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* More Coming Soon */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-20 flex flex-col items-center text-center"
            >
                {/* Divider line */}
                <div className="mb-10 h-px w-24 bg-neutral-300 dark:bg-neutral-700" />

                <p className="text-xs tracking-[0.4em] uppercase text-neutral-500">
                    Ongoing Archive
                </p>

                <h3 className="mt-6 font-serif italic text-2xl md:text-3xl text-neutral-800 dark:text-neutral-200">
                    More art in progress
                </h3>

                <p className="mt-6 max-w-md text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    This collection continues to evolve - new procedural systems,
                    materials, and visual experiments will be added over time.
                </p>
            </motion.div>

            <footer
                className="py-8 sm:py-12 md:py-16 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground text-center">
                <span>© {new Date().getFullYear()} Vatsal's Blender Portfolio</span>
                <span>·</span>
                <span>Crafted with</span>
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 animate-pulse" />
            </footer>
        </>
    )
}
