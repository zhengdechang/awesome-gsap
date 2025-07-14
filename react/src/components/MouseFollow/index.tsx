"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";

export default function MouseFollow() {
  const areaRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (followerRef.current && areaRef.current) {
      const rect = areaRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(followerRef.current, {
        x: x - 10,
        y: y - 10,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseEnter = () => {
    setIsActive(true);
    if (followerRef.current) {
      gsap.to(followerRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    if (followerRef.current) {
      gsap.to(followerRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const runAnimation = () => {
    if (followerRef.current && areaRef.current) {
      // Demo animation - simulate mouse movement
      const centerX = areaRef.current.offsetWidth / 2;
      const centerY = areaRef.current.offsetHeight / 2;

      // Show follower
      gsap.set(followerRef.current, { scale: 1, opacity: 1 });

      // Animate in a circle
      const tl = gsap.timeline();

      for (let i = 0; i <= 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * 40 - 10;
        const y = centerY + Math.sin(angle) * 40 - 10;

        tl.to(followerRef.current, {
          x,
          y,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      // Hide follower
      tl.to(followerRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      ref={areaRef}
      className={`relative min-h-[150px] bg-black/20 rounded-xl flex items-center justify-center text-white/70 text-lg select-none ${
        isActive ? "cursor-none" : "cursor-pointer"
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={runAnimation}
    >
      <div
        ref={followerRef}
        className="absolute w-5 h-5 bg-green-400 rounded-full pointer-events-none z-10 opacity-0 scale-0 shadow-lg"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <p>Move your mouse here</p>
    </div>
  );
}
