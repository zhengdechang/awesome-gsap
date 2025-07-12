'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'

interface BasicAnimationsProps {
  onRunDemo: () => void
}

export default function BasicAnimations({ onRunDemo }: BasicAnimationsProps) {
  const scaleRef = useRef<HTMLDivElement>(null)
  const rotateRef = useRef<HTMLDivElement>(null)
  const moveRef = useRef<HTMLDivElement>(null)

  const runAnimation = () => {
    // Reset all boxes
    gsap.set([scaleRef.current, rotateRef.current, moveRef.current], { 
      scale: 1, rotation: 0, x: 0, y: 0 
    })
    
    // Scale animation
    gsap.to(scaleRef.current, {
      scale: 1.5,
      duration: 1,
      ease: "bounce.out",
      yoyo: true,
      repeat: 1
    })
    
    // Rotation animation
    gsap.to(rotateRef.current, {
      rotation: 360,
      duration: 1,
      ease: "power2.inOut",
      delay: 0.2
    })
    
    // Movement animation
    gsap.to(moveRef.current, {
      x: 50,
      y: -30,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
      delay: 0.4,
      yoyo: true,
      repeat: 1
    })
    
    onRunDemo()
  }

  return (
    <div className="flex gap-4 justify-center items-center">
      <div 
        ref={scaleRef}
        className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer hover:bg-green-300 transition-colors"
        onClick={runAnimation}
      >
        Scale
      </div>
      <div 
        ref={rotateRef}
        className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer hover:bg-green-300 transition-colors"
        onClick={runAnimation}
      >
        Rotate
      </div>
      <div 
        ref={moveRef}
        className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer hover:bg-green-300 transition-colors"
        onClick={runAnimation}
      >
        Move
      </div>
    </div>
  )
}
