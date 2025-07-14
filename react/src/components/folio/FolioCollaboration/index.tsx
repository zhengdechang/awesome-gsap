"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FolioCollaboration: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollingTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const scrollingText = scrollingTextRef.current;

    if (!section || !title || !scrollingText) return;

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

    // Scrolling text animation
    const scrollingTextElements = scrollingText.children;
    Array.from(scrollingTextElements).forEach((element, index) => {
      gsap.to(element, {
        x: index % 2 === 0 ? "-100%" : "100%",
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const collaborationTexts = [
    "Frontend Development",
    "Motion Graphics", 
    "UI/UX Design",
    "GSAP Animations",
    "React Development",
    "Creative Coding",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Title */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 leading-tight"
        >
          Interested in{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Collaboration?
          </span>
        </h2>

        {/* Scrolling Text */}
        <div 
          ref={scrollingTextRef}
          className="relative h-32 md:h-40 overflow-hidden mb-16"
        >
          {/* First row - moving left */}
          <div className="absolute top-0 left-0 flex items-center space-x-8 whitespace-nowrap">
            {[...collaborationTexts, ...collaborationTexts].map((text, index) => (
              <span
                key={`left-${index}`}
                className="text-2xl md:text-4xl font-bold text-gray-600 hover:text-white transition-colors duration-300"
              >
                {text}
              </span>
            ))}
          </div>

          {/* Second row - moving right */}
          <div className="absolute bottom-0 right-0 flex items-center space-x-8 whitespace-nowrap">
            {[...collaborationTexts.reverse(), ...collaborationTexts].map((text, index) => (
              <span
                key={`right-${index}`}
                className="text-2xl md:text-4xl font-bold text-gray-600 hover:text-white transition-colors duration-300"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-8">
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's create something amazing together. I'm always excited to work on 
            innovative projects that push the boundaries of web development.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 font-medium">Start a Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <a
              href="mailto:contact@example.com"
              className="group relative px-8 py-4 border-2 border-gray-600 text-white rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:border-blue-500"
            >
              <span className="relative z-10 font-medium">Send an Email</span>
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: "🚀",
              title: "Fast Delivery",
              description: "Quick turnaround times without compromising quality"
            },
            {
              icon: "💡",
              title: "Creative Solutions",
              description: "Innovative approaches to complex design challenges"
            },
            {
              icon: "🎯",
              title: "Pixel Perfect",
              description: "Attention to detail in every aspect of development"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FolioCollaboration;
