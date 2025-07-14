"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE, NodeTypes, ItemSize, Branch } from "../constants";

const FolioTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const timeline = timelineRef.current;

    if (!section || !title || !subtitle || !timeline) return;

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

    // Timeline items animation
    const timelineItems = timeline.querySelectorAll(".timeline-item");
    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Timeline line animation
    const timelineLine = timeline.querySelector(".timeline-line");
    if (timelineLine) {
      gsap.fromTo(
        timelineLine,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timeline,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const renderTimelineItem = (item: any, index: number) => {
    if (item.type !== NodeTypes.CHECKPOINT) return null;

    const isLarge = item.size === ItemSize.LARGE;
    const isLeft = item.alignment === Branch.LEFT;

    return (
      <div
        key={index}
        className={`timeline-item relative flex items-center ${
          isLeft ? "justify-start" : "justify-end"
        } mb-12`}
      >
        {/* Content */}
        <div
          className={`relative max-w-md ${
            isLeft ? "mr-8 text-right" : "ml-8 text-left"
          }`}
        >
          {isLarge ? (
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {item.title}
              </h3>
            </div>
          ) : (
            <div
              className={`bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300 ${
                isLeft ? "ml-auto" : "mr-auto"
              }`}
            >
              <h4 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h4>
              {item.subtitle && (
                <p className="text-gray-400 text-sm mb-4">{item.subtitle}</p>
              )}
              {item.image && (
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                  {item.title.charAt(0)}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Timeline dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <div
            className={`${
              isLarge ? "w-6 h-6" : "w-4 h-4"
            } bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-black`}
          />
        </div>
      </div>
    );
  };

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
            Milestones
          </p>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Timeline
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A quick recap of proud moments
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div
            className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 origin-top"
            style={{ height: "100%" }}
          />

          {/* Timeline Items */}
          <div className="relative">
            {TIMELINE.map((item, index) => renderTimelineItem(item, index))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg mb-6">
            Want to be part of my journey?
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
            <span className="mr-2">Let's Connect</span>
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

export default FolioTimeline;
