"use client";

import { useRef } from "react";
import {
  useBasicAnimations,
  useTextAnimation,
  useTimelineSequence,
} from "@/hooks/useGSAP";

interface BasicAnimationsProps {
  variant?: "full" | "module";
}

const BasicAnimations = ({ variant = "full" }: BasicAnimationsProps) => {
  // Refs for different animation groups
  const tweenBoxesRef = useRef<HTMLDivElement[]>([]);
  const timelineBoxesRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Custom hooks
  const { scaleAnimation, rotateAnimation, moveAnimation, resetAll } =
    useBasicAnimations();
  const { splitTextAnimation, colorWaveAnimation } = useTextAnimation();
  const { createSequence } = useTimelineSequence();

  // Helper functions for refs
  const addToTweenRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      tweenBoxesRef.current[index] = el;
    }
  };

  const addToTimelineRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      timelineBoxesRef.current[index] = el;
    }
  };

  // Animation handlers
  const playBasicTweens = () => {
    console.log("playBasicTweens called");
    console.log("tweenBoxesRef.current:", tweenBoxesRef.current);

    resetAll(tweenBoxesRef.current);

    // Scale animation
    if (tweenBoxesRef.current[0]) {
      console.log("Starting scale animation");
      scaleAnimation(tweenBoxesRef.current[0]);
    }

    // Rotation animation
    if (tweenBoxesRef.current[1]) {
      console.log("Starting rotation animation");
      rotateAnimation(tweenBoxesRef.current[1], { delay: 0.2 });
    }

    // Movement animation
    if (tweenBoxesRef.current[2]) {
      console.log("Starting movement animation");
      moveAnimation(tweenBoxesRef.current[2], {
        x: variant === "module" ? 50 : 100,
        y: variant === "module" ? -30 : -50,
        delay: 0.4,
      });
    }
  };

  const playTimeline = () => {
    createSequence(timelineBoxesRef.current.filter(Boolean));
  };

  const playTextAnimation = () => {
    if (textRef.current) {
      splitTextAnimation(textRef.current);

      // Add color wave effect
      setTimeout(() => {
        colorWaveAnimation(textRef.current!, { delay: 1 });
      }, 1000);
    }
  };

  // Module variant (simplified)
  if (variant === "module") {
    return (
      <div
        className="flex gap-4 justify-center items-center cursor-pointer"
        onClick={playBasicTweens}
      >
        <div
          ref={(el) => addToTweenRefs(el, 0)}
          className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold transition-colors"
        >
          Scale
        </div>
        <div
          ref={(el) => addToTweenRefs(el, 1)}
          className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold transition-colors"
        >
          Rotate
        </div>
        <div
          ref={(el) => addToTweenRefs(el, 2)}
          className="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold transition-colors"
        >
          Move
        </div>
      </div>
    );
  }

  // Full variant (complete page section)
  return (
    <section id="basic" className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Basic Animations1
        </h2>

        {/* Simple Tweens */}
        <div className="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Simple Tweens
          </h3>
          <div
            className="flex justify-center items-center gap-8 mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8 cursor-pointer"
            onClick={playBasicTweens}
          >
            <div
              ref={(el) => addToTweenRefs(el, 0)}
              className="w-20 h-20 bg-green-400 rounded-xl flex items-center justify-center text-black font-bold"
            >
              Scale
            </div>
            <div
              ref={(el) => addToTweenRefs(el, 1)}
              className="w-20 h-20 bg-green-400 rounded-xl flex items-center justify-center text-black font-bold"
            >
              Rotate
            </div>
            <div
              ref={(el) => addToTweenRefs(el, 2)}
              className="w-20 h-20 bg-green-400 rounded-xl flex items-center justify-center text-black font-bold"
            >
              Move
            </div>
          </div>
        </div>

        {/* Timeline Example */}
        <div className="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Timeline Sequence
          </h3>
          <div
            className="flex justify-center items-center gap-8 mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8 cursor-pointer"
            onClick={playTimeline}
          >
            {[1, 2, 3, 4].map((num, index) => (
              <div
                key={num}
                ref={(el) => addToTimelineRefs(el, index)}
                className="w-20 h-20 bg-red-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl"
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* Text Animation */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Text Animation
          </h3>
          <div
            className="flex justify-center items-center mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8 cursor-pointer"
            onClick={playTextAnimation}
          >
            <h2 ref={textRef} className="text-4xl font-bold text-white">
              Hello GSAP World!
            </h2>
          </div>
        </div>
      </div>

      <style jsx>{`
        .char {
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default BasicAnimations;
