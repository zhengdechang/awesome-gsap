'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface CardRevealsProps {
  onRunDemo: () => void
}

export default function CardReveals({ onRunDemo }: CardRevealsProps) {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const cards = cardsRef.current.filter(Boolean)
    
    if (cards.length > 0) {
      const animation = gsap.fromTo(cards, {
        y: 50,
        opacity: 0,
        scale: 0.8
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
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
    const cards = cardsRef.current.filter(Boolean)
    
    // Reset cards
    gsap.set(cards, {
      y: 50,
      opacity: 0,
      scale: 0.8
    })
    
    // Animate cards
    gsap.to(cards, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.2,
      onComplete: () => {
        // Add click effects
        cards.forEach(card => {
          if (card) {
            gsap.to(card, {
              scale: 0.95,
              duration: 0.1,
              yoyo: true,
              repeat: 1,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(card, {
                  rotation: 360,
                  duration: 0.6,
                  ease: "power2.out"
                })
              }
            })
          }
        })
      }
    })
    
    onRunDemo()
  }

  return (
    <div ref={containerRef} className="w-full">
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {[1, 2, 3, 4].map((num, index) => (
          <div
            key={num}
            ref={el => cardsRef.current[index] = el}
            className="h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white font-bold cursor-pointer hover:bg-white/20 transition-colors"
            onClick={runAnimation}
          >
            Card {num}
          </div>
        ))}
      </div>
    </div>
  )
}
