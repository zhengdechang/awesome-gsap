"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import VanillaTilt from "vanilla-tilt";
import { IProject } from "../constants";

interface FolioProjectTileProps {
  project: IProject;
  index: number;
}

const FolioProjectTile: React.FC<FolioProjectTileProps> = ({
  project,
  index,
}) => {
  const tileRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tile = tileRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const tech = techRef.current;

    if (!tile || !image || !content || !tech) return;

    // Initialize Vanilla Tilt
    VanillaTilt.init(tile, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      scale: 1.02,
    });

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(image, {
        scale: 1.1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(content, {
        y: -10,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(tech.children, {
        y: -5,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(content, {
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(tech.children, {
        y: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    tile.addEventListener("mouseenter", handleMouseEnter);
    tile.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tile.removeEventListener("mouseenter", handleMouseEnter);
      tile.removeEventListener("mouseleave", handleMouseLeave);

      // Destroy Vanilla Tilt instance
      if ((tile as any).vanillaTilt) {
        (tile as any).vanillaTilt.destroy();
      }
    };
  }, []);

  const handleClick = () => {
    if (project.url) {
      window.open(project.url, "_blank");
    }
  };

  return (
    <div
      ref={tileRef}
      className="relative group cursor-pointer rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors duration-300"
      onClick={handleClick}
      style={{
        background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
      }}
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-300 group-hover:opacity-30"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 p-6 h-full flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
            {project.name}
          </h3>
          <p className="text-gray-300 text-sm line-clamp-3 mb-4">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div ref={techRef} className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-white bg-opacity-20 text-white text-xs rounded-full backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FolioProjectTile;
