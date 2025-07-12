'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'

interface HoverInteractionsProps {
  onRunDemo: () => void
}

export default function HoverInteractions({ onRunDemo }: HoverInteractionsProps) {
  const hoverBoxRef = useRef<HTMLDivElement>(null)
  const clickBoxRef = useRef<HTMLDivElement>(null)

  const handleHoverEnter = () => {
    if (hoverBoxRef.current) {
      gsap.to(hoverBoxRef.current, {
        scale: 1.2,
        rotation: 15,
        backgroundColor: "#ff6b6b",
        duration: 0.3,
        ease: "back.out(1.7)"
      })
    }
  }

  const handleHoverLeave = () => {
    if (hoverBoxRef.current) {
      gsap.to(hoverBoxRef.current, {
        scale: 1,
        rotation: 0,
        backgroundColor: "#4ecdc4",
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }

  const handleClick = () => {
    if (clickBoxRef.current) {
      gsap.to(clickBoxRef.current, {
        scale: 0.8,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          gsap.to(clickBoxRef.current, {
            rotation: "+=360",
            backgroundColor: "#00ff88",
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(clickBoxRef.current, {
                backgroundColor: "#4ecdc4",
                duration: 0.3,
                delay: 0.2
              })
            }
          })
        }
      })
    }
    onRunDemo()
  }

  const runAnimation = () => {
    // Demo both interactions
    handleHoverEnter()
    setTimeout(() => {
      handleHoverLeave()
      setTimeout(() => {
        handleClick()
      }, 500)
    }, 1000)
  }

  return (
    <div className="flex gap-6 justify-center items-center">
      <div 
        ref={hoverBoxRef}
        className="w-24 h-24 bg-teal-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer select-none shadow-lg"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        onClick={runAnimation}
      >
        Hover Me
      </div>
      <div 
        ref={clickBoxRef}
        className="w-24 h-24 bg-teal-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer select-none shadow-lg hover:scale-105 transition-transform"
        onClick={handleClick}
      >
        Click Me
      </div>
    </div>
  )
}
