// Module code examples for React components

interface ModuleCode {
  html: string;
  css: string;
  js: string;
}

const moduleCodeMap: Record<string, ModuleCode> = {
  "basic-animations": {
    html: `<!-- Basic Animations React Component -->
<div className="flex gap-4 justify-center items-center">
  <div className="tween-box scale">Scale</div>
  <div className="tween-box rotate">Rotate</div>
  <div className="tween-box move">Move</div>
</div>`,

    css: `/* Basic Animations CSS */
.tween-box {
  width: 80px;
  height: 80px;
  background: #00ff88;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
}`,

    js: `// Basic Animations React Component
'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function BasicAnimations({ onRunDemo }: { onRunDemo: () => void }) {
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
        className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer"
        onClick={runAnimation}
      >
        Scale
      </div>
      <div 
        ref={rotateRef}
        className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer"
        onClick={runAnimation}
      >
        Rotate
      </div>
      <div 
        ref={moveRef}
        className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer"
        onClick={runAnimation}
      >
        Move
      </div>
    </div>
  )
}`,
  },

  "timeline-sequences": {
    html: `<!-- Timeline Sequences React Component -->
<div className="flex gap-4 justify-center items-center">
  <div className="timeline-box">1</div>
  <div className="timeline-box">2</div>
  <div className="timeline-box">3</div>
  <div className="timeline-box">4</div>
</div>`,

    css: `/* Timeline Sequences CSS */
.timeline-box {
  width: 80px;
  height: 80px;
  background: #ff6b6b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
}`,

    js: `// Timeline Sequences React Component
'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'

export default function TimelineSequences({ onRunDemo }: { onRunDemo: () => void }) {
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
    
    onRunDemo()
  }

  return (
    <div className="flex gap-4 justify-center items-center">
      {[1, 2, 3, 4].map((num, index) => (
        <div
          key={num}
          ref={[box1Ref, box2Ref, box3Ref, box4Ref][index]}
          className="w-20 h-20 bg-red-400 rounded-lg flex items-center justify-center text-white font-bold text-2xl cursor-pointer"
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
    html: `<!-- Text Animations React Component -->
<h2 className="animated-text">Hello GSAP World!</h2>`,

    css: `/* Text Animations CSS */
.animated-text {
  font-size: 2.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
  font-weight: bold;
}

.char {
  display: inline-block;
}`,

    js: `// Text Animations React Component
'use client'

import { useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function TextAnimations({ onRunDemo }: { onRunDemo: () => void }) {
  const textRef = useRef<HTMLHeadingElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const runAnimation = () => {
    if (isAnimating || !textRef.current) return
    
    setIsAnimating(true)
    const text = 'Hello GSAP World!'
    const chars = text.split('')
    
    textRef.current.innerHTML = chars.map(char => 
      char === ' ' ? '&nbsp;' : \`<span class="inline-block">\${char}</span>\`
    ).join('')
    
    const charElements = textRef.current.querySelectorAll('span')
    
    gsap.fromTo(charElements, {
      opacity: 0,
      y: 50,
      rotation: 180
    }, {
      opacity: 1,
      y: 0,
      rotation: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.05,
      onComplete: () => setIsAnimating(false)
    })
    
    onRunDemo()
  }

  return (
    <div className="text-center">
      <h2 
        ref={textRef}
        className="text-4xl font-bold text-white cursor-pointer"
        onClick={runAnimation}
      >
        Hello GSAP World!
      </h2>
    </div>
  )
}`,
  },

  "scroll-trigger": {
    html: `<!-- ScrollTrigger React Component -->
<div className="flex justify-center items-center min-h-[150px]">
  <div className="scroll-box">Scroll to animate</div>
</div>`,

    css: `/* ScrollTrigger CSS */
.scroll-box {
  width: 150px;
  height: 150px;
  background: #ff6b6b;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  text-align: center;
}`,

    js: `// ScrollTrigger React Component
'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ScrollTriggerModule({ onRunDemo }) {
  const scrollBoxRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (scrollBoxRef.current && triggerRef.current) {
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
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      })
    }
  }, [])

  return (
    <div ref={triggerRef}>
      <div ref={scrollBoxRef} className="scroll-box">
        Scroll to animate
      </div>
    </div>
  )
}`,
  },

  "parallax-effects": {
    html: `<!-- Parallax Effects React Component -->
<div className="parallax-container">
  <div className="parallax-bg"></div>
  <div className="parallax-content">
    <h4>Parallax Effect</h4>
    <p>Background moves differently</p>
  </div>
</div>`,

    css: `/* Parallax Effects CSS */
.parallax-container {
  position: relative;
  height: 150px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}

.parallax-bg {
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 120%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  opacity: 0.7;
}

.parallax-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}`,

    js: `// Parallax Effects React Component
'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ParallaxEffects({ onRunDemo }) {
  const containerRef = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (bgRef.current && contentRef.current) {
      gsap.to(bgRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })

      gsap.fromTo(contentRef.current, {
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
    }
  }, [])

  return (
    <div ref={containerRef} className="parallax-container">
      <div ref={bgRef} className="parallax-bg" />
      <div ref={contentRef} className="parallax-content">
        <h4>Parallax Effect</h4>
        <p>Background moves differently</p>
      </div>
    </div>
  )
}`,
  },

  "card-reveals": {
    html: `<!-- Card Reveals React Component -->
<div className="grid grid-cols-2 gap-4">
  <div className="card">Card 1</div>
  <div className="card">Card 2</div>
  <div className="card">Card 3</div>
  <div className="card">Card 4</div>
</div>`,

    css: `/* Card Reveals CSS */
.card {
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  backdrop-filter: blur(5px);
}`,

    js: `// Card Reveals React Component
'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CardReveals({ onRunDemo }) {
  const cardsRef = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const cards = cardsRef.current.filter(Boolean)

    if (cards.length > 0) {
      gsap.fromTo(cards, {
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
    }
  }, [])

  return (
    <div ref={containerRef} className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((num, index) => (
        <div
          key={num}
          ref={el => cardsRef.current[index] = el}
          className="card"
        >
          Card {num}
        </div>
      ))}
    </div>
  )
}`,
  },
};

export function getModuleCode(moduleId: string): ModuleCode {
  return (
    moduleCodeMap[moduleId] || {
      html: "<!-- Code not available -->",
      css: "/* Code not available */",
      js: "// Code not available",
    }
  );
}
