'use client'

import { useEffect, useRef, useCallback, RefObject } from 'react'
import { gsap } from 'gsap'

// Basic GSAP animation hook
export function useGSAPAnimation() {
  const contextRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    contextRef.current = gsap.context(() => {})
    
    return () => {
      if (contextRef.current) {
        contextRef.current.revert()
      }
    }
  }, [])

  const animate = useCallback((target: gsap.TweenTarget, vars: gsap.TweenVars) => {
    if (contextRef.current) {
      return contextRef.current.add(() => gsap.to(target, vars))
    }
    return gsap.to(target, vars)
  }, [])

  const animateFrom = useCallback((target: gsap.TweenTarget, fromVars: gsap.TweenVars, toVars?: gsap.TweenVars) => {
    if (contextRef.current) {
      return contextRef.current.add(() => 
        toVars ? gsap.fromTo(target, fromVars, toVars) : gsap.from(target, fromVars)
      )
    }
    return toVars ? gsap.fromTo(target, fromVars, toVars) : gsap.from(target, fromVars)
  }, [])

  const set = useCallback((target: gsap.TweenTarget, vars: gsap.TweenVars) => {
    if (contextRef.current) {
      return contextRef.current.add(() => gsap.set(target, vars))
    }
    return gsap.set(target, vars)
  }, [])

  const killAll = useCallback(() => {
    if (contextRef.current) {
      contextRef.current.kill()
    }
  }, [])

  return {
    animate,
    animateFrom,
    set,
    killAll,
    context: contextRef.current
  }
}

// Timeline hook
export function useGSAPTimeline(vars?: gsap.TimelineVars) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const contextRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    contextRef.current = gsap.context(() => {
      timelineRef.current = gsap.timeline(vars)
    })
    
    return () => {
      if (contextRef.current) {
        contextRef.current.revert()
      }
    }
  }, [])

  const timeline = timelineRef.current

  return {
    timeline,
    context: contextRef.current
  }
}

// Basic animations hook with common patterns
export function useBasicAnimations() {
  const { animate, animateFrom, set } = useGSAPAnimation()

  const scaleAnimation = useCallback((target: gsap.TweenTarget, options?: {
    scale?: number
    duration?: number
    ease?: string
    yoyo?: boolean
    repeat?: number
  }) => {
    const { scale = 1.5, duration = 1, ease = "bounce.out", yoyo = true, repeat = 1 } = options || {}
    
    // Reset first
    set(target, { scale: 1 })
    
    return animate(target, {
      scale,
      duration,
      ease,
      yoyo,
      repeat
    })
  }, [animate, set])

  const rotateAnimation = useCallback((target: gsap.TweenTarget, options?: {
    rotation?: number
    duration?: number
    ease?: string
    delay?: number
  }) => {
    const { rotation = 360, duration = 1, ease = "power2.inOut", delay = 0 } = options || {}
    
    // Reset first
    set(target, { rotation: 0 })
    
    return animate(target, {
      rotation,
      duration,
      ease,
      delay
    })
  }, [animate, set])

  const moveAnimation = useCallback((target: gsap.TweenTarget, options?: {
    x?: number
    y?: number
    duration?: number
    ease?: string
    delay?: number
    yoyo?: boolean
    repeat?: number
  }) => {
    const { 
      x = 50, 
      y = -30, 
      duration = 1, 
      ease = "elastic.out(1, 0.3)", 
      delay = 0,
      yoyo = true,
      repeat = 1
    } = options || {}
    
    // Reset first
    set(target, { x: 0, y: 0 })
    
    return animate(target, {
      x,
      y,
      duration,
      ease,
      delay,
      yoyo,
      repeat
    })
  }, [animate, set])

  const resetAll = useCallback((targets: gsap.TweenTarget[]) => {
    set(targets, { 
      scale: 1, 
      rotation: 0, 
      x: 0, 
      y: 0 
    })
  }, [set])

  return {
    scaleAnimation,
    rotateAnimation,
    moveAnimation,
    resetAll
  }
}

// Text animation hook
export function useTextAnimation() {
  const { animateFrom } = useGSAPAnimation()

  const splitTextAnimation = useCallback((textElement: HTMLElement, options?: {
    stagger?: number
    duration?: number
    ease?: string
    delay?: number
  }) => {
    const { stagger = 0.05, duration = 0.8, ease = "back.out(1.7)", delay = 0 } = options || {}
    
    if (!textElement) return null

    const text = textElement.textContent || ''
    const chars = text.split('')
    
    textElement.innerHTML = chars.map(char => 
      char === ' ' ? '&nbsp;' : `<span class="char">${char}</span>`
    ).join('')

    const charElements = textElement.querySelectorAll('.char')

    return animateFrom(charElements, {
      opacity: 0,
      y: 50,
      rotation: 180
    }, {
      opacity: 1,
      y: 0,
      rotation: 0,
      duration,
      ease,
      stagger,
      delay
    })
  }, [animateFrom])

  const colorWaveAnimation = useCallback((textElement: HTMLElement, options?: {
    color?: string
    duration?: number
    stagger?: number
    delay?: number
    yoyo?: boolean
    repeat?: number
  }) => {
    const { 
      color = '#10B981', 
      duration = 0.3, 
      stagger = 0.05, 
      delay = 0,
      yoyo = true,
      repeat = 1
    } = options || {}
    
    const charElements = textElement.querySelectorAll('.char')
    
    return gsap.to(charElements, {
      color,
      duration,
      stagger,
      delay,
      yoyo,
      repeat
    })
  }, [])

  return {
    splitTextAnimation,
    colorWaveAnimation
  }
}

// Timeline sequence hook
export function useTimelineSequence() {
  const { timeline } = useGSAPTimeline()

  const createSequence = useCallback((elements: HTMLElement[], options?: {
    stagger?: number
    duration?: number
    ease?: string
  }) => {
    const { stagger = 0.3, duration = 0.5, ease = "back.out(1.7)" } = options || {}
    
    if (!timeline || !elements.length) return null

    // Reset all elements
    gsap.set(elements, {
      scale: 1,
      rotation: 0,
      y: 0,
      opacity: 1
    })

    // Create sequence
    timeline
      .from(elements[0], {
        scale: 0,
        rotation: 180,
        duration,
        ease
      })
      .from(elements[1], {
        y: -100,
        opacity: 0,
        duration,
        ease: 'bounce.out'
      }, `-=${stagger}`)
      .from(elements[2], {
        scale: 0,
        rotation: -180,
        duration,
        ease
      }, `-=${stagger}`)

    if (elements[3]) {
      timeline.from(elements[3], {
        y: 100,
        opacity: 0,
        duration,
        ease: 'bounce.out'
      }, `-=${stagger}`)
    }

    // Final rotation for all
    timeline.to(elements, {
      rotation: 360,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.1
    }, '+=0.5')

    return timeline
  }, [timeline])

  return {
    createSequence,
    timeline
  }
}
