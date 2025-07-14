// React component code examples

interface ModuleCode {
  code: string;
}

const moduleCodeMap: Record<string, ModuleCode> = {
  "basic-animations": {
    code: `'use client'

import { useRef } from 'react'
import { useBasicAnimations } from '@/hooks/useGSAP'

interface BasicAnimationsProps {
  onRunDemo?: () => void
}

export default function BasicAnimations({ onRunDemo }: BasicAnimationsProps) {
  const tweenBoxesRef = useRef<HTMLDivElement[]>([])
  const { scaleAnimation, rotateAnimation, moveAnimation, resetAll } = useBasicAnimations()

  const addToTweenRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      tweenBoxesRef.current[index] = el
    }
  }

  const playBasicTweens = () => {
    resetAll(tweenBoxesRef.current)

    if (tweenBoxesRef.current[0]) {
      scaleAnimation(tweenBoxesRef.current[0])
    }

    if (tweenBoxesRef.current[1]) {
      rotateAnimation(tweenBoxesRef.current[1], { delay: 0.2 })
    }

    if (tweenBoxesRef.current[2]) {
      moveAnimation(tweenBoxesRef.current[2], { delay: 0.4 })
    }

    onRunDemo?.()
  }

  return (
    <div className="flex gap-4 justify-center items-center">
      <div
        ref={(el) => addToTweenRefs(el, 0)}
        className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer hover:bg-green-300 transition-colors"
        onClick={playBasicTweens}
      >
        Scale
      </div>
      <div
        ref={(el) => addToTweenRefs(el, 1)}
        className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer hover:bg-green-300 transition-colors"
        onClick={playBasicTweens}
      >
        Rotate
      </div>
      <div
        ref={(el) => addToTweenRefs(el, 2)}
        className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer hover:bg-green-300 transition-colors"
        onClick={playBasicTweens}
      >
        Move
      </div>
    </div>
  )
}`,
  },

  "timeline-sequences": {
    code: `'use client'

import { useRef } from 'react'
import { useTimelineSequence } from '@/hooks/useGSAP'

interface TimelineSequencesProps {
  onRunDemo?: () => void
}

export default function TimelineSequences({ onRunDemo }: TimelineSequencesProps) {
  const boxRefs = useRef<HTMLDivElement[]>([])
  const { createSequence } = useTimelineSequence()

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      boxRefs.current[index] = el
    }
  }

  const runAnimation = () => {
    createSequence(boxRefs.current.filter(Boolean))
    onRunDemo?.()
  }

  return (
    <div className="flex gap-4 justify-center items-center">
      {[1, 2, 3, 4].map((num, index) => (
        <div
          key={num}
          ref={(el) => addToRefs(el, index)}
          className="w-20 h-20 bg-red-400 rounded-lg flex items-center justify-center text-white font-bold text-xl cursor-pointer hover:bg-red-300 transition-colors"
          onClick={runAnimation}
        >
          {num}
        </div>
      ))}
    </div>
  )
}`,
  },

  "text-animations": {
    code: `'use client'

import { useRef } from 'react'
import { useTextAnimation } from '@/hooks/useGSAP'

interface TextAnimationsProps {
  onRunDemo?: () => void
}

export default function TextAnimations({ onRunDemo }: TextAnimationsProps) {
  const textRef = useRef<HTMLHeadingElement>(null)
  const { splitTextAnimation, colorWaveAnimation } = useTextAnimation()

  const runAnimation = () => {
    if (textRef.current) {
      splitTextAnimation(textRef.current)

      setTimeout(() => {
        colorWaveAnimation(textRef.current!, { delay: 1 })
      }, 1000)
    }
    onRunDemo?.()
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h2
        ref={textRef}
        className="text-2xl font-bold text-white cursor-pointer"
        onClick={runAnimation}
      >
        Animate This Text!
      </h2>
      <style jsx>{\`
        .char {
          display: inline-block;
        }
      \`}</style>
    </div>
  )
}`,
  },

  "scroll-trigger": {
    code: `'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ScrollTriggerProps {
  onRunDemo?: () => void
}

export default function ScrollTriggerDemo({ onRunDemo }: ScrollTriggerProps) {
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
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger && typeof trigger.kill === 'function') {
            trigger.kill()
          }
        })
      }
    }
  }, [])

  const runAnimation = () => {
    if (scrollBoxRef.current) {
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
    onRunDemo?.()
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
}`,
  },

  "parallax-effects": {
    code: `'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ParallaxEffectsProps {
  onRunDemo?: () => void
}

export default function ParallaxEffects({ onRunDemo }: ParallaxEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (bgRef.current && contentRef.current && containerRef.current) {
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
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger && typeof trigger.kill === 'function') {
            trigger.kill()
          }
        })
      }
    }
  }, [])

  const runAnimation = () => {
    if (bgRef.current && contentRef.current) {
      gsap.fromTo(bgRef.current, { yPercent: 0 }, { yPercent: -20, duration: 2, ease: "power2.out" })
      gsap.fromTo(contentRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
    }
    onRunDemo?.()
  }

  return (
    <div ref={containerRef} className="relative h-40 overflow-hidden rounded-lg cursor-pointer" onClick={runAnimation}>
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 scale-110"
      />
      <div
        ref={contentRef}
        className="relative z-10 h-full flex items-center justify-center text-white font-bold text-xl"
      >
        Parallax Effect
      </div>
    </div>
  )
}`,
  },

  "card-reveals": {
    code: `'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface CardRevealsProps {
  onRunDemo?: () => void
}

export default function CardReveals({ onRunDemo }: CardRevealsProps) {
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

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
          ease: "back.out(1.7)",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        })
      }
    })
  }, [])

  const runAnimation = () => {
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
          ease: "back.out(1.7)",
          delay: index * 0.2
        })
      }
    })
    onRunDemo?.()
  }

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el
    }
  }

  return (
    <div className="flex gap-4 justify-center items-center cursor-pointer" onClick={runAnimation}>
      {[1, 2, 3].map((num, index) => (
        <div
          key={num}
          ref={(el) => addToRefs(el, index)}
          className="w-20 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"
        >
          {num}
        </div>
      ))}
    </div>
  )
}`,
  },

  "hover-interactions": {
    code: `'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface HoverInteractionsProps {
  onRunDemo?: () => void
}

export default function HoverInteractions({ onRunDemo }: HoverInteractionsProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const glow = glowRef.current

    if (card && glow) {
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.1,
          rotationY: 10,
          duration: 0.3,
          ease: "power2.out"
        })
        gsap.to(glow, {
          opacity: 0.8,
          scale: 1.2,
          duration: 0.3,
          ease: "power2.out"
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          duration: 0.3,
          ease: "power2.out"
        })
        gsap.to(glow, {
          opacity: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      }

      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const runAnimation = () => {
    if (cardRef.current && glowRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.1,
        rotationY: 10,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      })
      gsap.to(glowRef.current, {
        opacity: 0.8,
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      })
    }
    onRunDemo?.()
  }

  return (
    <div className="relative flex justify-center items-center">
      <div
        ref={glowRef}
        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 blur-lg"
      />
      <div
        ref={cardRef}
        className="relative w-32 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold cursor-pointer"
        onClick={runAnimation}
      >
        Hover Me!
      </div>
    </div>
  )
}`,
  },

  "mouse-follow": {
    code: `'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface MouseFollowProps {
  onRunDemo?: () => void
}

export default function MouseFollow({ onRunDemo }: MouseFollowProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const follower = followerRef.current

    if (container && follower) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        gsap.to(follower, {
          x: x - 10,
          y: y - 10,
          duration: 0.3,
          ease: "power2.out"
        })
      }

      container.addEventListener('mousemove', handleMouseMove)

      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  const runAnimation = () => {
    if (followerRef.current) {
      gsap.to(followerRef.current, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      })
    }
    onRunDemo?.()
  }

  return (
    <div
      ref={containerRef}
      className="relative w-64 h-32 bg-gray-800 rounded-xl flex items-center justify-center text-white font-bold cursor-none overflow-hidden"
      onClick={runAnimation}
    >
      Move mouse here
      <div
        ref={followerRef}
        className="absolute w-5 h-5 bg-green-400 rounded-full pointer-events-none"
      />
    </div>
  )
}`,
  },

  "svg-path": {
    code: `'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

interface SvgPathProps {
  onRunDemo?: () => void
}

export default function SvgPath({ onRunDemo }: SvgPathProps) {
  const circleRef = useRef<SVGCircleElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin)
  }, [])

  const runAnimation = () => {
    if (circleRef.current && pathRef.current) {
      gsap.to(circleRef.current, {
        duration: 3,
        ease: "power1.inOut",
        motionPath: {
          path: pathRef.current,
          autoRotate: true,
        },
        repeat: -1,
        yoyo: true
      })
    }
    onRunDemo?.()
  }

  return (
    <div className="flex justify-center items-center">
      <svg width="200" height="100" viewBox="0 0 200 100" className="cursor-pointer" onClick={runAnimation}>
        <path
          ref={pathRef}
          d="M20,50 Q100,10 180,50 Q100,90 20,50"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
        />
        <circle
          ref={circleRef}
          cx="20"
          cy="50"
          r="8"
          fill="#EF4444"
        />
      </svg>
    </div>
  )
}`,
  },

  "shape-morphing": {
    code: `'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'

interface ShapeMorphingProps {
  onRunDemo?: () => void
}

export default function ShapeMorphing({ onRunDemo }: ShapeMorphingProps) {
  const shapeRef = useRef<HTMLDivElement>(null)

  const runAnimation = () => {
    if (shapeRef.current) {
      const tl = gsap.timeline()

      tl.to(shapeRef.current, {
        borderRadius: "50%",
        backgroundColor: "#EF4444",
        duration: 0.5,
        ease: "power2.inOut"
      })
      .to(shapeRef.current, {
        borderRadius: "0%",
        backgroundColor: "#10B981",
        rotation: 45,
        duration: 0.5,
        ease: "power2.inOut"
      })
      .to(shapeRef.current, {
        borderRadius: "20px",
        backgroundColor: "#3B82F6",
        rotation: 0,
        duration: 0.5,
        ease: "power2.inOut"
      })
    }
    onRunDemo?.()
  }

  return (
    <div className="flex justify-center items-center">
      <div
        ref={shapeRef}
        className="w-20 h-20 bg-blue-500 rounded-lg cursor-pointer transition-colors hover:bg-blue-400"
        onClick={runAnimation}
      >
      </div>
    </div>
  )
}`,
  },

  "loading-animations": {
    code: `'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface LoadingAnimationsProps {
  onRunDemo?: () => void
}

export default function LoadingAnimations({ onRunDemo }: LoadingAnimationsProps) {
  const dotsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 })

    dotsRef.current.forEach((dot, index) => {
      if (dot) {
        tl.to(dot, {
          y: -20,
          duration: 0.3,
          ease: "power2.out"
        }, index * 0.1)
        .to(dot, {
          y: 0,
          duration: 0.3,
          ease: "power2.in"
        }, index * 0.1 + 0.3)
      }
    })

    return () => {
      tl.kill()
    }
  }, [])

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      dotsRef.current[index] = el
    }
  }

  const runAnimation = () => {
    dotsRef.current.forEach((dot, index) => {
      if (dot) {
        gsap.to(dot, {
          scale: 1.5,
          duration: 0.2,
          ease: "power2.out",
          delay: index * 0.1,
          yoyo: true,
          repeat: 1
        })
      }
    })
    onRunDemo?.()
  }

  return (
    <div className="flex gap-2 justify-center items-center cursor-pointer" onClick={runAnimation}>
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          ref={(el) => addToRefs(el, index)}
          className="w-4 h-4 bg-green-400 rounded-full"
        />
      ))}
    </div>
  )
}`,
  },
};

export function getModuleCode(moduleId: string): string {
  return moduleCodeMap[moduleId]?.code || "// Code not found";
}

export default moduleCodeMap;
