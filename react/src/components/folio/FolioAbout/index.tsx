"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FolioAbout: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const stats = statsRef.current;

    if (!section || !title || !content || !image || !stats) return;

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

    // Content animation
    gsap.fromTo(
      content.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Image animation
    gsap.fromTo(
      image,
      { opacity: 0, scale: 0.8, rotation: -5 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stats counter animation
    const statNumbers = stats.querySelectorAll("[data-count]");
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-count") || "0");
      gsap.fromTo(
        stat,
        { textContent: 0 },
        {
          textContent: target,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
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

  const stats = [
    { number: 50, label: "Projects Completed", suffix: "+" },
    { number: 5, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Happy Clients", suffix: "%" },
    { number: 24, label: "Support Available", suffix: "/7" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <p className="text-blue-400 text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
                About Me
              </p>
              <h2
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
              >
                Crafting Digital{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate frontend developer with a deep love for
                creating beautiful, interactive web experiences. My journey
                began with a curiosity about how websites work, and it has
                evolved into a professional pursuit of pixel-perfect design and
                smooth animations.
              </p>

              <p>
                Specializing in modern JavaScript frameworks like React and
                Next.js, I bring designs to life with the power of GSAP
                animations. Every project is an opportunity to push the
                boundaries of what's possible on the web.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new animation
                techniques, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "GSAP",
                "TypeScript",
                "Tailwind CSS",
                "Three.js",
                "Framer Motion",
                "UI/UX Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div ref={imageRef} className="relative">
            <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
              {/* Code-like visual */}
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="space-y-2 text-gray-400">
                  <div className="text-blue-400">const developer = {`{`}</div>
                  <div className="ml-4">
                    name:{" "}
                    <span className="text-green-400">"GSAP Developer"</span>,
                  </div>
                  <div className="ml-4">skills: [</div>
                  <div className="ml-8 text-yellow-400">
                    "Frontend Development",
                  </div>
                  <div className="ml-8 text-yellow-400">"GSAP Animations",</div>
                  <div className="ml-8 text-yellow-400">"UI/UX Design"</div>
                  <div className="ml-4">],</div>
                  <div className="ml-4">
                    passion:{" "}
                    <span className="text-green-400">
                      "Creating Amazing UX"
                    </span>
                    ,
                  </div>
                  <div className="ml-4">
                    available: <span className="text-green-400">true</span>
                  </div>
                  <div className="text-blue-400">{`};`}</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <span data-count={stat.number}>0</span>
                <span className="text-blue-400">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FolioAbout;
