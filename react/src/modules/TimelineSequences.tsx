'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'

interface TimelineSequencesProps {
  onRunDemo: () => void
}

export default function TimelineSequences({ onRunDemo }: TimelineSequencesProps) {
  const box1Ref = useRef<HTMLDivElement>(null)
  const box2Ref = useRef<HTMLDivElement>(null)
  const box3Ref = useRef<HTMLDivElement>(null)
  const box4Ref = useRef<HTMLDivElement>(null)

  const runAnimation = () => {
    const boxes = [box1Ref.current, box2Ref.current, box3Ref.current, box4Ref.current]
    const tl = gsap.timeline()
    
    // Reset positions
    gsap.set(boxes, { scale: 1, rotation: 0, y: 0, opacity: 1 })
    
    tl.from(box1Ref.current, {
      scale: 0,
      rotation: 180,
      duration: 0.5,
      ease: "back.out(1.7)"
    })
    .from(box2Ref.current, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "bounce.out"
    }, "-=0.3")
    .from(box3Ref.current, {
      scale: 0,
      rotation: -180,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.3")
    .from(box4Ref.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "bounce.out"
    }, "-=0.3")
    .to(boxes, {
      rotation: 360,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.1
    }, "+=0.5")
    
    onRunDemo()
  }

  return (
    <div className="flex gap-4 justify-center items-center">
      {[1, 2, 3, 4].map((num, index) => (
        <div
          key={num}
          ref={[box1Ref, box2Ref, box3Ref, box4Ref][index]}
          className="w-20 h-20 bg-red-400 rounded-lg flex items-center justify-center text-white font-bold text-2xl cursor-pointer hover:bg-red-300 transition-colors"
          onClick={runAnimation}
        >
          {num}
        </div>
      ))}
    </div>
  )
}
