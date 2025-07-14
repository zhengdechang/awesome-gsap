/*
 * @Description:
 * @Author: Devin
 * @Date: 2025-07-14 11:58:36
 */
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((currentScrollY / documentHeight) * 100, 100);

      // Update progress bar with GSAP
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          width: `${progress}%`,
          duration: 0.1,
          ease: "none",
        });
      }
    };

    // Initial call
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[100]">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-lg"
        style={{ width: "0%" }}
      />
    </div>
  );
};

export default ScrollProgress;
