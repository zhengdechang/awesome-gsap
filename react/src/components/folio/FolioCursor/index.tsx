"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FolioCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move cursor dot immediately
      gsap.to(cursorDot, {
        x: mouseX,
        y: mouseY,
        duration: 0,
      });

      // Move cursor with slight delay for smooth effect
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, cursorDot], {
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, cursorDot], {
        opacity: 0,
        duration: 0.3,
      });
    };

    // Handle hover effects on interactive elements
    const handleElementHover = (scale: number) => {
      gsap.to(cursor, {
        scale,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => handleElementHover(1.5));
      el.addEventListener("mouseleave", () => handleElementHover(1));
    });

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => handleElementHover(1.5));
        el.removeEventListener("mouseleave", () => handleElementHover(1));
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 opacity-0"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-full h-full border-2 border-white rounded-full mix-blend-difference" />
      </div>

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-50 opacity-0"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-full h-full bg-white rounded-full mix-blend-difference" />
      </div>
    </>
  );
};

export default FolioCursor;
