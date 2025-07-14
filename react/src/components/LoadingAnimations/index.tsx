"use client";

import { useRef } from "react";
import { gsap } from "gsap";

export default function LoadingAnimations() {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  const runAnimation = () => {
    const dots = dotsRef.current.filter(Boolean);

    // Reset dots
    gsap.set(dots, {
      scale: 1,
      backgroundColor: "#00ff88",
    });

    // Pulsing animation
    gsap.to(dots, {
      scale: 1.5,
      backgroundColor: "#ff6b6b",
      duration: 0.6,
      ease: "power2.inOut",
      stagger: 0.2,
      repeat: 3,
      yoyo: true,
      onComplete: () => {
        gsap.set(dots, {
          scale: 1,
          backgroundColor: "#00ff88",
        });
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-[100px]">
      <div className="flex gap-3 cursor-pointer" onClick={runAnimation}>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            ref={(el) => {
              dotsRef.current[index] = el;
            }}
            className="w-5 h-5 bg-green-400 rounded-full shadow-lg"
            style={{
              boxShadow: "0 4px 15px rgba(0, 255, 136, 0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
