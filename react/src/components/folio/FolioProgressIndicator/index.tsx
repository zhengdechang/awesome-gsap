"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FolioProgressIndicator: React.FC = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const progress = progressRef.current;
    if (!progress) return;

    // Create scroll progress animation
    gsap.to(progress, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Show/hide progress bar based on scroll position
    ScrollTrigger.create({
      start: "top -100",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.progress > 0.01) {
          gsap.to(progress.parentElement, {
            opacity: 1,
            duration: 0.3,
          });
        } else {
          gsap.to(progress.parentElement, {
            opacity: 0,
            duration: 0.3,
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 opacity-0">
      <div className="w-full h-full bg-gray-800">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 origin-left scale-x-0"
        />
      </div>
    </div>
  );
};

export default FolioProgressIndicator;
