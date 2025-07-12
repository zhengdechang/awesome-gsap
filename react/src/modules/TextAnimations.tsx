'use client'

import { useRef, useState } from 'react'
import { gsap } from 'gsap'

interface TextAnimationsProps {
  onRunDemo: () => void
}

export default function TextAnimations({ onRunDemo }: TextAnimationsProps) {
  const textRef = useRef<HTMLHeadingElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const runAnimation = () => {
    if (isAnimating || !textRef.current) return
    
    setIsAnimating(true)
    const text = 'Hello GSAP World!'
    const chars = text.split('')
    
    textRef.current.innerHTML = chars.map(char => 
      char === ' ' ? '&nbsp;' : `<span class="inline-block">${char}</span>`
    ).join('')
    
    const charElements = textRef.current.querySelectorAll('span')
    
    gsap.fromTo(charElements, {
      opacity: 0,
      y: 50,
      rotation: 180,
      scale: 0
    }, {
      opacity: 1,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.05,
      onComplete: () => {
        // Color wave animation
        gsap.to(charElements, {
          color: "#00ff88",
          duration: 0.3,
          stagger: 0.05,
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            // Bounce effect
            gsap.to(charElements, {
              y: -10,
              duration: 0.2,
              stagger: 0.03,
              yoyo: true,
              repeat: 1,
              ease: "power2.out",
              onComplete: () => setIsAnimating(false)
            })
          }
        })
      }
    })
    
    onRunDemo()
  }

  return (
    <div className="text-center">
      <h2 
        ref={textRef}
        className={`text-4xl font-bold text-white cursor-pointer transition-colors ${
          isAnimating ? 'pointer-events-none' : 'hover:text-green-400'
        }`}
        onClick={runAnimation}
      >
        Hello GSAP World!
      </h2>
    </div>
  )
}
