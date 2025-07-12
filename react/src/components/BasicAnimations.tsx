'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'

const BasicAnimations = () => {
  const tweenBoxesRef = useRef<HTMLDivElement[]>([])
  const timelineBoxesRef = useRef<HTMLDivElement[]>([])
  const textRef = useRef<HTMLHeadingElement>(null)

  const addToTweenRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      tweenBoxesRef.current[index] = el
    }
  }

  const addToTimelineRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      timelineBoxesRef.current[index] = el
    }
  }

  const playBasicTweens = () => {
    // Reset positions first
    gsap.set(tweenBoxesRef.current, {
      scale: 1,
      rotation: 0,
      x: 0,
      y: 0
    })

    // Scale animation
    if (tweenBoxesRef.current[0]) {
      gsap.to(tweenBoxesRef.current[0], {
        scale: 1.5,
        duration: 1,
        ease: 'bounce.out',
        yoyo: true,
        repeat: 1
      })
    }

    // Rotation animation
    if (tweenBoxesRef.current[1]) {
      gsap.to(tweenBoxesRef.current[1], {
        rotation: 360,
        duration: 1,
        ease: 'power2.inOut',
        delay: 0.2
      })
    }

    // Movement animation
    if (tweenBoxesRef.current[2]) {
      gsap.to(tweenBoxesRef.current[2], {
        x: 100,
        y: -50,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        delay: 0.4,
        yoyo: true,
        repeat: 1
      })
    }
  }

  const playTimeline = () => {
    const tl = gsap.timeline()

    // Reset positions
    gsap.set(timelineBoxesRef.current, {
      scale: 1,
      rotation: 0,
      y: 0,
      opacity: 1
    })

    tl.from(timelineBoxesRef.current[0], {
      scale: 0,
      rotation: 180,
      duration: 0.5,
      ease: 'back.out(1.7)'
    })
    .from(timelineBoxesRef.current[1], {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'bounce.out'
    }, '-=0.3')
    .from(timelineBoxesRef.current[2], {
      scale: 0,
      rotation: -180,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, '-=0.3')
    .from(timelineBoxesRef.current[3], {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'bounce.out'
    }, '-=0.3')
    .to(timelineBoxesRef.current, {
      rotation: 360,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.1
    }, '+=0.5')
  }

  const playTextAnimation = () => {
    if (textRef.current) {
      const text = textRef.current.textContent || ''
      const chars = text.split('')
      
      textRef.current.innerHTML = chars.map(char => 
        char === ' ' ? '&nbsp;' : `<span class="char">${char}</span>`
      ).join('')

      const charElements = textRef.current.querySelectorAll('.char')

      gsap.fromTo(charElements, {
        opacity: 0,
        y: 50,
        rotation: 180
      }, {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.05
      })

      // Color animation
      gsap.to(charElements, {
        color: '#10B981',
        duration: 0.3,
        stagger: 0.05,
        delay: 1,
        yoyo: true,
        repeat: 1
      })
    }
  }

  return (
    <section id="basic" className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Basic Animations
        </h2>

        {/* Simple Tweens */}
        <div className="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">Simple Tweens</h3>
          <div className="flex justify-center items-center gap-8 mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
            <div 
              ref={(el) => addToTweenRefs(el, 0)}
              className="w-20 h-20 bg-green-400 rounded-xl flex items-center justify-center text-black font-bold cursor-pointer"
            >
              Scale
            </div>
            <div 
              ref={(el) => addToTweenRefs(el, 1)}
              className="w-20 h-20 bg-green-400 rounded-xl flex items-center justify-center text-black font-bold cursor-pointer"
            >
              Rotate
            </div>
            <div 
              ref={(el) => addToTweenRefs(el, 2)}
              className="w-20 h-20 bg-green-400 rounded-xl flex items-center justify-center text-black font-bold cursor-pointer"
            >
              Move
            </div>
          </div>
          <button
            onClick={playBasicTweens}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Play Animation
          </button>
        </div>

        {/* Timeline Example */}
        <div className="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">Timeline Sequence</h3>
          <div className="flex justify-center items-center gap-8 mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
            {[1, 2, 3, 4].map((num, index) => (
              <div 
                key={num}
                ref={(el) => addToTimelineRefs(el, index)}
                className="w-20 h-20 bg-red-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl cursor-pointer"
              >
                {num}
              </div>
            ))}
          </div>
          <button
            onClick={playTimeline}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Play Timeline
          </button>
        </div>

        {/* Text Animation */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">Text Animation</h3>
          <div className="flex justify-center items-center mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
            <h2 
              ref={textRef}
              className="text-4xl font-bold text-white"
            >
              Hello GSAP World!
            </h2>
          </div>
          <button
            onClick={playTextAnimation}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Animate Text
          </button>
        </div>
      </div>
    </section>
  )
}

export default BasicAnimations
