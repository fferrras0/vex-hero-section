import { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  initialDelay?: number
  charDelay?: number
}

export default function AnimatedHeading({
  text,
  className = '',
  initialDelay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), initialDelay)
    return () => clearTimeout(timer)
  }, [initialDelay])

  const lines = text.split('\n')

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => {
        const chars = line.split('')
        const prevLineLength = lines
          .slice(0, lineIndex)
          .reduce((acc, l) => acc + l.length, 0)

        return (
          <span key={lineIndex} className="block">
            {chars.map((char, charIndex) => {
              const globalIndex = prevLineLength + charIndex
              const delay = globalIndex * charDelay
              return (
                <span
                  key={charIndex}
                  className="inline-block"
                  style={{
                    opacity: animated ? 1 : 0,
                    transform: animated ? 'translateX(0)' : 'translateX(-18px)',
                    transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              )
            })}
          </span>
        )
      })}
    </h1>
  )
}
