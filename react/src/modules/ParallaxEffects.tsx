'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ParallaxEffectsProps {
  onRunDemo: () => void
}

export default function ParallaxEffects({ onRunDemo }: ParallaxEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    if (bgRef.current && contentRef.current && containerRef.current) {
      // Parallax background animation
      const bgAnimation = gsap.to(bgRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      // Content fade in animation
      const contentAnimation = gsap.fromTo(contentRef.current, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      })

      return () => {
        bgAnimation.kill()
        contentAnimation.kill()
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [])

  const runAnimation = () => {
    if (bgRef.current && contentRef.current) {
      // Manual demo animation
      const tl = gsap.timeline()
      
      tl.to(bgRef.current, {
        y: -20,
        duration: 1,
        ease: "power2.out"
      })
      .fromTo(contentRef.current, {
        y: 30,
        opacity: 0.5
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .to([bgRef.current, contentRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      })
    }
    onRunDemo()
  }

  return (
    <div 
      ref={containerRef}
      className="relative h-40 w-full overflow-hidden rounded-xl cursor-pointer"
      onClick={runAnimation}
    >
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-red-400 to-blue-400 opacity-70 transform -translate-y-4"
      />
      <div 
        ref={contentRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center"
      >
        <h4 className="text-xl font-bold mb-2">Parallax Effect</h4>
        <p className="text-sm">Background moves differently</p>
      </div>
    </div>
  )
}
