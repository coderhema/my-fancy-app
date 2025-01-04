import { motion, Transition, Variants, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface TextProps {
  labels: string[] // Array of texts to cycle through
  fromFontVariationSettings: string
  toFontVariationSettings: string
  transition?: Transition
  staggerDuration?: number
  staggerFrom?: "first" | "last" | "center" | number
  repeatDelay?: number
  textSwitchInterval?: number // Time between text switches in ms
  className?: string
  onClick?: () => void
}

const BreathingText = ({
  labels,
  fromFontVariationSettings,
  toFontVariationSettings,
  transition = {
    duration: 1.5,
    ease: "easeInOut",
  },
  staggerDuration = 0.1,
  staggerFrom = "first",
  repeatDelay = 0.1,
  textSwitchInterval = 5000,
  className,
  onClick,
  ...props
}: TextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % labels.length)
        setIsVisible(true)
      }, 500) // Wait for fade out before changing text
    }, textSwitchInterval)

    return () => clearInterval(interval)
  }, [labels.length, textSwitchInterval])

  const letterVariants: Variants = {
    initial: { fontVariationSettings: fromFontVariationSettings },
    animate: (i) => ({
      fontVariationSettings: toFontVariationSettings,
      transition: {
        ...transition,
        repeat: Infinity,
        repeatType: "mirror",
        delay: i * staggerDuration,
        repeatDelay: repeatDelay,
      },
    }),
  }

  const getCustomIndex = (index: number, total: number) => {
    if (typeof staggerFrom === "number") {
      return Math.abs(index - staggerFrom)
    }
    switch (staggerFrom) {
      case "first":
        return index
      case "last":
        return total - 1 - index
      case "center":
      default:
        return Math.abs(index - Math.floor(total / 2))
    }
  }

  const letters = labels[currentTextIndex].split("")

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.span
          className={`${className}`}
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          {...props}
        >
          {letters.map((letter: string, i: number) => (
            <motion.span
              key={i}
              className="inline-block whitespace-pre"
              aria-hidden="true"
              variants={letterVariants}
              initial="initial"
              animate="animate"
              custom={getCustomIndex(i, letters.length)}
            >
              {letter}
            </motion.span>
          ))}
          <span className="sr-only">{labels[currentTextIndex]}</span>
        </motion.span>
      )}
    </AnimatePresence>
  )
}

export default BreathingText
