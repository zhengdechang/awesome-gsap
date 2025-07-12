'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ScrollAnimations = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollBoxRef = useRef<HTMLDivElement>(null)
  const parallaxBgRef = useRef<HTMLDivElement>(null)
  const parallaxContentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  const addToCardsRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered box animation
      if (scrollBoxRef.current) {
        gsap.fromTo(scrollBoxRef.current, {
          scale: 0.5,
          rotation: 0,
          backgroundColor: '#EF4444'
        }, {
          scale: 1.2,
          rotation: 360,
          backgroundColor: '#10B981',
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: scrollBoxRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
            toggleActions: 'play none none reverse'
          }
        })
      }

      // Parallax background animation
      if (parallaxBgRef.current) {
        gsap.to(parallaxBgRef.current, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: parallaxBgRef.current.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      }

      // Parallax content animation
      if (parallaxContentRef.current) {
        gsap.fromTo(parallaxContentRef.current, {
          y: 100,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: parallaxContentRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        })
      }

      // Card reveal animations
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card, {
            y: 100,
            opacity: 0,
            scale: 0.8
          }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.2
          })
        }
      })

      // Section title animation
      const sectionTitle = sectionRef.current?.querySelector('h2')
      if (sectionTitle) {
        gsap.fromTo(sectionTitle, {
          y: 50,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionTitle,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="scroll" 
      ref={sectionRef}
      className="py-20 min-h-screen bg-gradient-to-br from-purple-800 via-blue-800 to-purple-600"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          ScrollTrigger Animations
        </h2>

        {/* Scroll-triggered box */}
        <div className="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">Scroll to Animate</h3>
          <div className="flex justify-center items-center min-h-[400px] bg-black bg-opacity-20 rounded-xl p-8">
            <div 
              ref={scrollBoxRef}
              className="w-48 h-48 rounded-2xl flex items-center justify-center font-bold text-white text-xl"
              style={{ backgroundColor: '#EF4444' }}
            >
              Scroll to animate
            </div>
          </div>
        </div>

        {/* Parallax container */}
        <div className="mb-16 relative h-96 overflow-hidden rounded-2xl">
          <div 
            ref={parallaxBgRef}
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-30"
            style={{ height: '120%', top: '-10%' }}
          />
          <div 
            ref={parallaxContentRef}
            className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Parallax Effect</h3>
            <p className="text-lg">This background moves at a different speed</p>
          </div>
        </div>

        {/* Reveal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((num, index) => (
            <div
              key={num}
              ref={(el) => addToCardsRefs(el, index)}
              className="h-48 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center text-white text-2xl font-bold backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer"
            >
              Card {num}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScrollAnimations
