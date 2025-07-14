"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS } from "../constants";

const FolioSkills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const categories = categoriesRef.current;

    if (!section || !title || !subtitle || !categories) return;

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

    // Animate skill categories
    const skillCategories = categories.children;
    Array.from(skillCategories).forEach((category, index) => {
      const skillItems = category.querySelectorAll('.skill-item');
      
      gsap.fromTo(
        skillItems,
        { 
          opacity: 0, 
          scale: 0, 
          rotation: -180 
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: category,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: SKILLS.frontend,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "UI/UX Design",
      skills: SKILLS.userInterface,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Other Skills",
      skills: SKILLS.other,
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const getSkillIcon = (skill: string) => {
    // Simple icon mapping - in a real app, you'd use proper icon libraries
    const iconMap: { [key: string]: string } = {
      javascript: "JS",
      react: "⚛️",
      redux: "🔄",
      next: "▲",
      angular: "🅰️",
      gsap: "🎬",
      tailwind: "🎨",
      sass: "💅",
      svg: "📐",
      html: "🌐",
      css: "🎨",
      figma: "🎨",
      sketch: "✏️",
      illustrator: "🎨",
      photoshop: "🖼️",
      git: "📝",
      webpack: "📦",
      gulp: "🥤",
      lightroom: "📸",
      aftereffects: "🎬",
    };
    return iconMap[skill] || "⚡";
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
            Skills
          </p>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            My Skills
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I like to take responsibility to craft aesthetic user experience using modern frontend architecture.
          </p>
        </div>

        {/* Skills Categories */}
        <div ref={categoriesRef} className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="text-center">
              <h3 className={`text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="skill-item group relative"
                  >
                    <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 cursor-pointer`}>
                      {getSkillIcon(skill)}
                    </div>
                    
                    {/* Skill Name Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {skill.charAt(0).toUpperCase() + skill.slice(1)}
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg mb-6">
            Interested in working together?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group"
          >
            <span className="mr-2">Let's Create Something Amazing</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FolioSkills;
