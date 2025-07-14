"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const floatingBoxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { scale: 0, rotation: 180, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1.5,
            ease: "back.out(1.7)",
            delay: 1,
          }
        );
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 1.5,
          }
        );
      }

      // Floating boxes animation
      // Predefined animation values for consistency
      const animationValues = [
        {
          x: 200,
          y: 150,
          rotation: 45,
          scale: 0.8,
          moveY: 30,
          moveX: 20,
          rotateBy: 15,
          duration: 4,
          delay: 0,
        },
        {
          x: 800,
          y: 100,
          rotation: 120,
          scale: 1.2,
          moveY: -40,
          moveX: -25,
          rotateBy: -20,
          duration: 3.5,
          delay: 0.5,
        },
        {
          x: 300,
          y: 400,
          rotation: 270,
          scale: 0.6,
          moveY: 50,
          moveX: 15,
          rotateBy: 25,
          duration: 5,
          delay: 1,
        },
        {
          x: 700,
          y: 500,
          rotation: 180,
          scale: 1.0,
          moveY: -30,
          moveX: -20,
          rotateBy: -10,
          duration: 3,
          delay: 1.5,
        },
        {
          x: 500,
          y: 200,
          rotation: 90,
          scale: 0.9,
          moveY: 40,
          moveX: 30,
          rotateBy: 20,
          duration: 4.5,
          delay: 0.8,
        },
        {
          x: 400,
          y: 350,
          rotation: 315,
          scale: 0.7,
          moveY: -20,
          moveX: 25,
          rotateBy: -15,
          duration: 3.8,
          delay: 1.2,
        },
      ];

      floatingBoxesRef.current.forEach((box, index) => {
        if (box && animationValues[index]) {
          const values = animationValues[index];

          // Initial position
          gsap.set(box, {
            x: values.x,
            y: values.y,
            rotation: values.rotation,
            scale: values.scale,
          });

          // Floating animation
          gsap.to(box, {
            y: `+=${values.moveY}`,
            x: `+=${values.moveX}`,
            rotation: `+=${values.rotateBy}`,
            duration: values.duration,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.3,
          });

          // Continuous floating
          gsap.to(box, {
            y: "+=20",
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: values.delay,
          });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      floatingBoxesRef.current[index] = el;
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 15, top: 20 },
          { left: 85, top: 10 },
          { left: 25, top: 70 },
          { left: 75, top: 80 },
          { left: 60, top: 30 },
          { left: 40, top: 60 },
        ].map((position, index) => (
          <div
            key={index}
            ref={(el) => addToRefs(el, index)}
            className="absolute w-16 h-16 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Awesome GSAP
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white text-opacity-90 mb-8"
        >
          React + Next.js Examples
        </p>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white bg-opacity-70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
