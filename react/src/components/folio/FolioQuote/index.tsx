"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FolioQuote: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const patternLeftRef = useRef<HTMLDivElement>(null);
  const patternRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const quote = quoteRef.current;
    const patternLeft = patternLeftRef.current;
    const patternRight = patternRightRef.current;

    if (!section || !quote || !patternLeft || !patternRight) return;

    // Quote reveal animation
    gsap.fromTo(
      quote,
      { 
        opacity: 0, 
        y: 100, 
        skewY: 7,
        scale: 0.9 
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        scale: 1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: quote,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Pattern animations
    gsap.fromTo(
      patternLeft,
      { opacity: 0, x: -100, rotation: -10 },
      {
        opacity: 0.1,
        x: 0,
        rotation: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      patternRight,
      { opacity: 0, x: 100, rotation: 10 },
      {
        opacity: 0.1,
        x: 0,
        rotation: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax effect for patterns
    gsap.to(patternLeft, {
      y: -50,
      rotation: 5,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(patternRight, {
      y: 50,
      rotation: -5,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 to-black"
    >
      {/* Background Patterns */}
      <div
        ref={patternLeftRef}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5"
      >
        <svg
          width="320"
          height="700"
          viewBox="0 0 320 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="pattern-left"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="currentColor" />
              <circle cx="0" cy="0" r="1" fill="currentColor" />
              <circle cx="40" cy="40" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="320" height="700" fill="url(#pattern-left)" className="text-blue-500" />
        </svg>
      </div>

      <div
        ref={patternRightRef}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-5"
      >
        <svg
          width="140"
          height="335"
          viewBox="0 0 140 335"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="pattern-right"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="2" height="2" fill="currentColor" />
              <rect x="15" y="15" width="2" height="2" fill="currentColor" />
              <rect x="7" y="22" width="1" height="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="140" height="335" fill="url(#pattern-right)" className="text-purple-500" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2
          ref={quoteRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          I have a strong obsession for{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            attention to detail
          </span>
          .
        </h2>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-8">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
          <div className="w-8 h-8 border-2 border-purple-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
          </div>
          <div className="w-16 h-1 bg-gradient-to-l from-purple-500 to-transparent rounded-full" />
        </div>

        {/* Additional Quote */}
        <p className="mt-12 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Every pixel matters. Every animation serves a purpose. Every interaction tells a story.
        </p>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-2/3 left-1/6 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-2000" />
    </section>
  );
};

export default FolioQuote;
