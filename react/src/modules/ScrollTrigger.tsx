'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ScrollTriggerProps {
  onRunDemo: () => void
}

export default function ScrollTriggerModule({ onRunDemo }: ScrollTriggerProps) {
  const scrollBoxRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    if (scrollBoxRef.current && triggerRef.current) {
      const animation = gsap.fromTo(scrollBoxRef.current, {
        scale: 0.5,
        rotation: 0,
        backgroundColor: "#ff6b6b"
      }, {
        scale: 1.2,
        rotation: 360,
        backgroundColor: "#00ff88",
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      })

      return () => {
        animation.kill()
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [])

  const runAnimation = () => {
    if (scrollBoxRef.current) {
      // Manual trigger animation for demo
      gsap.fromTo(scrollBoxRef.current, {
        scale: 0.5,
        rotation: 0,
        backgroundColor: "#ff6b6b"
      }, {
        scale: 1.2,
        rotation: 360,
        backgroundColor: "#00ff88",
        duration: 1,
        ease: "back.out(1.7)",
        yoyo: true,
        repeat: 1
      })
    }
    onRunDemo()
  }

  return (
    <div ref={triggerRef} className="flex justify-center items-center min-h-[150px]">
      <div 
        ref={scrollBoxRef}
        className="w-32 h-32 bg-red-400 rounded-2xl flex items-center justify-center text-white font-bold cursor-pointer transition-colors hover:bg-red-300"
        onClick={runAnimation}
      >
        Scroll to animate
      </div>
    </div>
  )
}
