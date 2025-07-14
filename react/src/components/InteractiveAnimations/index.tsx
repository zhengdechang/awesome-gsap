"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";

const InteractiveAnimations = () => {
  const hoverBox1Ref = useRef<HTMLDivElement>(null);
  const hoverBox2Ref = useRef<HTMLDivElement>(null);
  const mouseAreaRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [trails, setTrails] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const trailIdRef = useRef(0);

  const handleHoverEnter1 = () => {
    if (hoverBox1Ref.current) {
      gsap.to(hoverBox1Ref.current, {
        scale: 1.2,
        rotation: 15,
        backgroundColor: "#EF4444",
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    }
  };

  const handleHoverLeave1 = () => {
    if (hoverBox1Ref.current) {
      gsap.to(hoverBox1Ref.current, {
        scale: 1,
        rotation: 0,
        backgroundColor: "#06B6D4",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleClick2 = () => {
    if (hoverBox2Ref.current) {
      gsap.to(hoverBox2Ref.current, {
        scale: 0.8,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          gsap.to(hoverBox2Ref.current, {
            rotation: "+=360",
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    }
  };

  const handleHoverEnter2 = () => {
    if (hoverBox2Ref.current) {
      gsap.to(hoverBox2Ref.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleHoverLeave2 = () => {
    if (hoverBox2Ref.current) {
      gsap.to(hoverBox2Ref.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mouseAreaRef.current && followerRef.current) {
      const rect = mouseAreaRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(followerRef.current, {
        x: x - 10,
        y: y - 10,
        duration: 0.3,
        ease: "power2.out",
      });

      // Create trail effect
      const newTrail = { id: ++trailIdRef.current, x, y };
      setTrails((prev) => [...prev.slice(-10), newTrail]);

      // Remove trail after animation
      setTimeout(() => {
        setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
      }, 1000);
    }
  };

  const handleMouseEnterArea = () => {
    if (followerRef.current) {
      gsap.to(followerRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeaveArea = () => {
    if (followerRef.current) {
      gsap.to(followerRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section id="interactive" className="py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Interactive Animations
        </h2>

        {/* Hover Effects */}
        <div className="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Hover Effects
          </h3>
          <div className="flex justify-center items-center gap-8 mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
            <div
              ref={hoverBox1Ref}
              onMouseEnter={handleHoverEnter1}
              onMouseLeave={handleHoverLeave1}
              className="w-24 h-24 bg-cyan-400 rounded-xl flex items-center justify-center text-black font-bold cursor-pointer select-none"
            >
              Hover Me
            </div>
            <div
              ref={hoverBox2Ref}
              onClick={handleClick2}
              onMouseEnter={handleHoverEnter2}
              onMouseLeave={handleHoverLeave2}
              className="w-24 h-24 bg-cyan-400 rounded-xl flex items-center justify-center text-black font-bold cursor-pointer select-none"
            >
              Click Me
            </div>
          </div>
        </div>

        {/* Mouse Follow */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Mouse Follow
          </h3>
          <div
            ref={mouseAreaRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnterArea}
            onMouseLeave={handleMouseLeaveArea}
            className="relative min-h-[300px] bg-black bg-opacity-20 rounded-xl p-8 cursor-none overflow-hidden"
          >
            {/* Follower */}
            <div
              ref={followerRef}
              className="absolute w-5 h-5 bg-green-400 rounded-full pointer-events-none z-10"
              style={{ scale: 0, opacity: 0 }}
            />

            {/* Trail dots */}
            {trails.map((trail) => (
              <div
                key={trail.id}
                className="absolute w-1 h-1 bg-green-400 rounded-full pointer-events-none animate-ping"
                style={{
                  left: trail.x - 2,
                  top: trail.y - 2,
                }}
              />
            ))}

            <p className="text-white text-center mt-32 pointer-events-none">
              Move your mouse in this area
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAnimations;
