'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

const Navigation = () => {
  const navRef = useRef<HTMLNavElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsScrolled(scrolled)
      
      if (navRef.current) {
        if (scrolled) {
          gsap.to(navRef.current, {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            duration: 0.3,
            ease: 'power2.out'
          })
        } else {
          gsap.to(navRef.current, {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)',
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Initial animation
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
      )
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: element,
          offsetY: 80
        },
        ease: 'power2.inOut'
      })
    }
  }

  const navItems = [
    { id: 'basic', label: 'Basic' },
    { id: 'scroll', label: 'ScrollTrigger' },
    { id: 'interactive', label: 'Interactive' },
    { id: 'advanced', label: 'Advanced' }
  ]

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            GSAP Examples
          </h1>
          
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-green-400 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
