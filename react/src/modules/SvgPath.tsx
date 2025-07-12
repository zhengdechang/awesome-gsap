'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

interface SvgPathProps {
  onRunDemo: () => void
}

export default function SvgPath({ onRunDemo }: SvgPathProps) {
  const pathFollowerRef = useRef<SVGCircleElement>(null)
  const motionPathRef = useRef<SVGPathElement>(null)

  const runAnimation = () => {
    if (pathFollowerRef.current && motionPathRef.current) {
      // Check if MotionPathPlugin is available
      if (typeof MotionPathPlugin !== 'undefined') {
        gsap.registerPlugin(MotionPathPlugin)
        
        // Reset position
        gsap.set(pathFollowerRef.current, { 
          motionPath: { path: motionPathRef.current, start: 0 }
        })
        
        // Animate along path
        gsap.to(pathFollowerRef.current, {
          motionPath: {
            path: motionPathRef.current,
            align: motionPathRef.current,
            alignOrigin: [0.5, 0.5],
            autoRotate: true
          },
          duration: 3,
          ease: "power2.inOut",
          repeat: 1,
          yoyo: true
        })
        
        // Add scale animation
        gsap.to(pathFollowerRef.current, {
          scale: 1.5,
          duration: 1.5,
          ease: "sine.inOut",
          repeat: 1,
          yoyo: true
        })
      } else {
        // Fallback animation without MotionPathPlugin
        gsap.to(pathFollowerRef.current, {
          rotation: 360,
          transformOrigin: "150px 100px",
          duration: 3,
          ease: "power2.inOut",
          repeat: 1,
          yoyo: true
        })
        
        gsap.to(pathFollowerRef.current, {
          scale: 1.5,
          duration: 1.5,
          ease: "sine.inOut",
          repeat: 1,
          yoyo: true
        })
      }
    }
    onRunDemo()
  }

  return (
    <div className="flex justify-center items-center p-4">
      <svg 
        width="300" 
        height="200" 
        viewBox="0 0 300 200" 
        className="cursor-pointer"
        onClick={runAnimation}
      >
        <path 
          ref={motionPathRef}
          className="motion-path" 
          d="M50,100 Q150,50 250,100" 
          stroke="#00ff88" 
          strokeWidth="2" 
          fill="none"
          strokeDasharray="5,5"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;-10"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <circle 
          ref={pathFollowerRef}
          className="path-follower" 
          r="8" 
          fill="#ff6b6b"
          style={{ filter: 'drop-shadow(0 0 10px rgba(255, 107, 107, 0.5))' }}
        />
      </svg>
    </div>
  )
}
