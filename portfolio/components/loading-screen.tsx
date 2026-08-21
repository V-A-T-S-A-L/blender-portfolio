"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const steps = [
  { progress: 7, label: "INITIALIZING" },
  { progress: 18, label: "LOADING SYSTEM" },
  { progress: 31, label: "BUILDING GEOMETRY" },
  { progress: 47, label: "PROCESSING MATERIAL" },
  { progress: 63, label: "CALIBRATING LIGHT" },
  { progress: 78, label: "COMPOSING SCENE" },
  { progress: 91, label: "FINALIZING" },
  { progress: 100, label: "READY" },
]

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [step, setStep] = useState(0)
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const runStep = () => {
      if (step >= steps.length - 1) {
        // Final flash before revealing the page
        setFlash(true)

        setTimeout(() => {
          setFlash(false)

          setTimeout(() => {
            setVisible(false)
          }, 180)
        }, 70)

        return
      }

      // Random amount of time between each loading state
      const delay = 150 + Math.random() * 220

      timeout = setTimeout(() => {
        // Occasional brutalist white flash
        if (Math.random() > 0.45) {
          setFlash(true)

          setTimeout(() => {
            setFlash(false)
          }, 35 + Math.random() * 55)
        }

        setStep((prev) => prev + 1)
      }, delay)
    }

    runStep()

    return () => clearTimeout(timeout)
  }, [step])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.35,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] bg-black text-white"
        >
          {/* WHITE FLASH */}
          {/* <AnimatePresence>
            {flash && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.04 }}
                className="absolute inset-0 z-50 bg-[#fff]"
              />
            )}
          </AnimatePresence> */}

          {/* TOP */}
          <div className="absolute left-6 right-6 top-6 flex items-center justify-between text-[9px] tracking-[0.3em] uppercase text-neutral-500 sm:left-8 sm:right-8 sm:top-8">
            <span>Vatsal Shah</span>

            <span>Archive / 2026</span>
          </div>

          {/* CENTER */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[min(80vw,700px)]">

              {/* Label */}
              <div className="mb-5 flex items-end justify-between">
                <motion.span
                  key={steps[step].label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[10px] tracking-[0.3em] uppercase text-neutral-400"
                >
                  {steps[step].label}
                </motion.span>

                <span className="font-mono text-xs text-neutral-500">
                  {String(steps[step].progress).padStart(3, "0")}%
                </span>
              </div>

              {/* BRUTALIST PROGRESS */}
              <div className="relative h-[3px] w-full bg-neutral-900 overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${steps[step].progress}%`,
                  }}
                  transition={{
                    duration: 0.12,
                    ease: "linear",
                  }}
                />
              </div>

              {/* RANDOM BLOCKS */}
              <div className="mt-3 flex h-2 gap-[3px]">
                {Array.from({ length: 32 }).map((_, i) => {
                  const active =
                    i < Math.floor((steps[step].progress / 100) * 32)

                  return (
                    <motion.div
                      key={i}
                      animate={{
                        opacity: active ? 1 : 0.12,
                      }}
                      transition={{
                        duration: 0.08,
                      }}
                      className="h-full flex-1 bg-white"
                    />
                  )
                })}
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[8px] tracking-[0.25em] uppercase text-neutral-600 sm:bottom-8 sm:left-8 sm:right-8">
            <span>Procedural Studies</span>

            <span>
              {String(step + 1).padStart(2, "0")} /{" "}
              {String(steps.length).padStart(2, "0")}
            </span>
          </div>

          {/* RANDOM FLICKER */}
          <motion.div
            animate={{
              opacity: [0, 0.04, 0, 0.02, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 0.15,
            }}
            className="pointer-events-none absolute inset-0 bg-white"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}