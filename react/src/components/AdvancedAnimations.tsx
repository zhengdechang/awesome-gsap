'use client'

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

// Register MotionPath plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(MotionPathPlugin)
}

const AdvancedAnimations = () => {
  const pathFollowerRef = useRef<SVGCircleElement>(null)
  const morphShapeRef = useRef<SVGPathElement>(null)
  const loaderDotsRef = useRef<HTMLDivElement[]>([])
  const [isLoaderActive, setIsLoaderActive] = useState(false)

  const addToLoaderRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      loaderDotsRef.current[index] = el
    }
  }

  const playPathAnimation = () => {
    if (pathFollowerRef.current) {
      // Reset position
      gsap.set(pathFollowerRef.current, { 
        motionPath: { path: '#motion-path', start: 0 }
      })
      
      // Animate along path
      gsap.to(pathFollowerRef.current, {
        motionPath: {
          path: '#motion-path',
          align: '#motion-path',
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        duration: 3,
        ease: 'power2.inOut',
        repeat: 1,
        yoyo: true
      })
      
      // Add scale animation
      gsap.to(pathFollowerRef.current, {
        scale: 1.5,
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: 1,
        yoyo: true
      })
    }
  }

  const playMorphAnimation = () => {
    if (morphShapeRef.current) {
      const shapes = [
        'M100,50 L150,150 L50,150 Z', // Triangle
        'M50,100 Q100,50 150,100 Q100,150 50,100', // Diamond-like
        'M100,50 A50,50 0 1,1 100,150 A50,50 0 1,1 100,50', // Circle
        'M50,75 L150,75 L150,125 L50,125 Z', // Rectangle
        'M100,50 L150,150 L50,150 Z' // Back to triangle
      ]
      
      const colors = ['#10B981', '#EF4444', '#06B6D4', '#8B5CF6', '#10B981']
      
      const tl = gsap.timeline()
      
      shapes.forEach((shape, index) => {
        tl.to(morphShapeRef.current, {
          attr: { d: shape },
          fill: colors[index],
          duration: 1,
          ease: 'power2.inOut'
        }, index * 1.2)
      })
    }
  }

  const toggleLoader = () => {
    if (!isLoaderActive) {
      startLoader()
    } else {
      stopLoader()
    }
    setIsLoaderActive(!isLoaderActive)
  }

  const startLoader = () => {
    // Pulsing animation
    gsap.to(loaderDotsRef.current, {
      scale: 1.5,
      backgroundColor: '#EF4444',
      duration: 0.6,
      ease: 'power2.inOut',
      stagger: 0.2,
      repeat: -1,
      yoyo: true
    })
  }

  const stopLoader = () => {
    gsap.killTweensOf(loaderDotsRef.current)
    
    gsap.to(loaderDotsRef.current, {
      scale: 1,
      backgroundColor: '#10B981',
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  return (
    <section id="advanced" className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Advanced Animations
        </h2>

        {/* SVG Path Animation */}
        <div className="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">SVG Path Animation</h3>
          <div className="flex justify-center items-center mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
            <svg width="300" height="200" viewBox="0 0 300 200" className="overflow-visible">
              <path 
                id="motion-path" 
                d="M50,100 Q150,50 250,100" 
                stroke="#10B981" 
                strokeWidth="2" 
                fill="none"
              />
              <circle 
                ref={pathFollowerRef}
                r="8" 
                fill="#EF4444"
              />
            </svg>
          </div>
          <button
            onClick={playPathAnimation}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Animate Path
          </button>
        </div>

        {/* Morphing Animation */}
        <div className="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">Morphing Animation</h3>
          <div className="flex justify-center items-center mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <path 
                ref={morphShapeRef}
                d="M100,50 L150,150 L50,150 Z" 
                fill="#10B981"
              />
            </svg>
          </div>
          <button
            onClick={playMorphAnimation}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Morph Shape
          </button>
        </div>

        {/* Loading Animation */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">Loading Animation</h3>
          <div className="flex justify-center items-center mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
            <div className="flex gap-3">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  ref={(el) => addToLoaderRefs(el, index)}
                  className="w-5 h-5 bg-green-400 rounded-full"
                />
              ))}
            </div>
          </div>
          <button
            onClick={toggleLoader}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
          >
            {isLoaderActive ? 'Stop Loader' : 'Start Loader'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default AdvancedAnimations
