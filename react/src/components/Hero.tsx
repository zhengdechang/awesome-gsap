'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const floatingBoxesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { scale: 0, rotation: 180, opacity: 0 },
          { 
            scale: 1, 
            rotation: 0, 
            opacity: 1, 
            duration: 1.5, 
            ease: 'back.out(1.7)',
            delay: 1
          }
        )
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.fromTo(subtitleRef.current,
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: 'power2.out',
            delay: 1.5
          }
        )
      }

      // Floating boxes animation
      floatingBoxesRef.current.forEach((box, index) => {
        if (box) {
          // Initial position
          gsap.set(box, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotation: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.5
          })

          // Floating animation
          gsap.to(box, {
            y: `+=${Math.random() * 100 - 50}`,
            x: `+=${Math.random() * 60 - 30}`,
            rotation: `+=${Math.random() * 30 - 15}`,
            duration: Math.random() * 3 + 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: index * 0.3
          })

          // Continuous floating
          gsap.to(box, {
            y: '+=20',
            duration: 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: Math.random() * 2
          })
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      floatingBoxesRef.current[index] = el
    }
  }

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            ref={(el) => addToRefs(el, index)}
            className="absolute w-16 h-16 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Awesome GSAP
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white text-opacity-90 mb-8"
        >
          React + Next.js Examples
        </p>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white bg-opacity-70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
