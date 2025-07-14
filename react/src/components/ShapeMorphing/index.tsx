"use client";

import { useRef } from "react";
import { gsap } from "gsap";

export default function ShapeMorphing() {
  const morphShapeRef = useRef<SVGPathElement>(null);

  const runAnimation = () => {
    if (morphShapeRef.current) {
      const shapes = [
        "M100,50 L150,150 L50,150 Z", // Triangle
        "M50,100 Q100,50 150,100 Q100,150 50,100", // Diamond-like
        "M100,50 A50,50 0 1,1 100,150 A50,50 0 1,1 100,50", // Circle
        "M50,75 L150,75 L150,125 L50,125 Z", // Rectangle
        "M100,50 L150,150 L50,150 Z", // Back to triangle
      ];

      const colors = ["#00ff88", "#ff6b6b", "#4ecdc4", "#8B5CF6", "#00ff88"];

      const tl = gsap.timeline();

      shapes.forEach((shape, index) => {
        tl.to(
          morphShapeRef.current,
          {
            attr: { d: shape },
            fill: colors[index],
            duration: 1,
            ease: "power2.inOut",
          },
          index * 1.2
        );
      });
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="cursor-pointer"
        onClick={runAnimation}
      >
        <path
          ref={morphShapeRef}
          className="morph-shape"
          d="M100,50 L150,150 L50,150 Z"
          fill="#00ff88"
          style={{
            filter: "drop-shadow(0 4px 15px rgba(0, 255, 136, 0.3))",
            transformOrigin: "center",
          }}
        />
      </svg>
    </div>
  );
}
