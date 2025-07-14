"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "../constants";
import FolioProjectTile from "../FolioProjectTile";

const FolioProjects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const grid = gridRef.current;
    const background = backgroundRef.current;

    if (!section || !title || !subtitle || !grid || !background) return;

    // Background parallax effect
    gsap.to(background, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Title animation
    gsap.fromTo(
      title,
      { opacity: 0, y: 50, skewY: 7 },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Subtitle animation
    gsap.fromTo(
      subtitle,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitle,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Grid items stagger animation
    const gridItems = grid.children;
    gsap.fromTo(
      gridItems,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
            PROJECTS
          </p>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            My Works
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I have contributed in over 20+ projects ranging from Frontend development, 
            UI/UX design, Open Source, and Motion Graphics
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {PROJECTS.map((project, index) => (
            <div
              key={project.name}
              className="group"
            >
              <FolioProjectTile project={project} index={index} />
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Want to see more projects?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300 group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 5.302c.896 1.41 1.432 3.077 1.432 4.698 0 .348-.014.694-.041 1.036-.208-.046-2.281-.55-4.366-.25-.054-.13-.108-.266-.162-.403-.157-.378-.333-.756-.51-1.125 2.361-1.021 3.425-2.539 3.647-2.956zM12 2.139c2.317 0 4.429.804 6.11 2.146-.176.348-1.125 1.747-3.403 2.65C13.73 5.35 12.217 3.993 12 3.993c-.217 0-1.73 1.357-2.707 2.802-2.278-.903-3.227-2.302-3.403-2.65C7.571 2.943 9.683 2.139 12 2.139zm-7.43 3.163c.257.348 1.206 1.747 3.484 2.65-.176.378-.352.756-.51 1.125-.054.137-.108.273-.162.403-2.085-.3-4.158.204-4.366.25-.027-.342-.041-.688-.041-1.036 0-1.621.536-3.288 1.432-4.698zM2.139 12c0-.217.014-.433.027-.648.208-.046 2.553-.348 4.827.027.054.217.108.433.176.648.068.217.149.433.23.648-1.432.581-2.553 1.432-3.227 2.302C3.484 14.429 2.139 13.217 2.139 12zm1.432 4.698c.674-.87 1.795-1.721 3.227-2.302.433 1.125.966 2.139 1.621 2.956.176.217.365.433.554.648-1.432.581-2.553 1.432-3.227 2.302C4.429 18.571 3.571 16.698 3.571 14.698zm4.698 7.43c-2.317 0-4.429-.804-6.11-2.146.176-.348 1.125-1.747 3.403-2.65.977 1.445 2.49 2.802 2.707 2.802.217 0 1.73-1.357 2.707-2.802 2.278.903 3.227 2.302 3.403 2.65-1.681 1.342-3.793 2.146-6.11 2.146zm7.43-3.163c-.257-.348-1.206-1.747-3.484-2.65.176-.378.352-.756.51-1.125.054-.137.108-.273.162-.403 2.085.3 4.158-.204 4.366-.25.027.342.041.688.041 1.036 0 1.621-.536 3.288-1.432 4.698z"/>
              </svg>
              View Designs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FolioProjects;
