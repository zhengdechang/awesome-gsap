"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typed from "typed.js";
import { TYPED_STRINGS, SOCIAL_LINKS } from "../constants";
import FolioButton from "../FolioButton";

const FolioHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const typed = typedRef.current;
    const description = descriptionRef.current;
    const buttons = buttonsRef.current;
    const social = socialRef.current;
    const background = backgroundRef.current;

    if (!hero || !title || !subtitle || !typed || !description || !buttons || !social || !background) return;

    // Initialize Typed.js
    const typedInstance = new Typed(typed, {
      strings: TYPED_STRINGS,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 8000,
      loop: true,
    });

    // Create timeline for hero animations
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Set initial states
    gsap.set([title, subtitle, typed, description, buttons, social], {
      opacity: 0,
      y: 100,
    });

    gsap.set(background, {
      opacity: 0,
      scale: 1.1,
    });

    // Animate elements in sequence
    tl.to(hero, { opacity: 1, duration: 0.5 })
      .to(title, { opacity: 1, y: 0, duration: 1 }, "+=0.2")
      .to(subtitle, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .to(typed, { opacity: 1, y: 0, duration: 1 }, "-=0.3")
      .to(description, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .to(buttons, { opacity: 1, y: 0, duration: 1 }, "-=0.3")
      .to(social, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .to(background, { opacity: 0.1, scale: 1, duration: 2 }, "-=1");

    return () => {
      typedInstance.destroy();
    };
  }, []);

  const socialIcons = [
    { name: "LinkedIn", url: SOCIAL_LINKS.linkedin, icon: "linkedin" },
    { name: "GitHub", url: SOCIAL_LINKS.github, icon: "github" },
    { name: "Twitter", url: SOCIAL_LINKS.twitter, icon: "twitter" },
    { name: "Instagram", url: SOCIAL_LINKS.instagram, icon: "instagram" },
    { name: "Dribbble", url: SOCIAL_LINKS.dribbble, icon: "dribbble" },
    { name: "Behance", url: SOCIAL_LINKS.behance, icon: "behance" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Animation */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"
      >
        {/* Animated background shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Greeting */}
        <h2
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-300 mb-4 font-light"
        >
          Hello 👋🏻
        </h2>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          I am{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            GSAP Developer
          </span>
        </h1>

        {/* Typed Animation */}
        <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-12">
          <span ref={typedRef} />
        </div>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I am a passionate UI Engineer who bridges the gap between development and design. 
          I take responsibility to craft a good user experience using modern frontend architecture.
        </p>

        {/* Action Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <FolioButton
            variant="primary"
            size="lg"
            onClick={() => {
              const element = document.getElementById("works");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View My Work
          </FolioButton>
          <FolioButton
            variant="outline"
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Let's Talk
          </FolioButton>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="flex justify-center space-x-4">
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/50 transition-all duration-300 transform hover:scale-110"
              aria-label={social.name}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                {social.icon === "linkedin" && (
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                )}
                {social.icon === "github" && (
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                )}
                {social.icon === "twitter" && (
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                )}
                {social.icon === "instagram" && (
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                )}
                {social.icon === "dribbble" && (
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 5.302c.896 1.41 1.432 3.077 1.432 4.698 0 .348-.014.694-.041 1.036-.208-.046-2.281-.55-4.366-.25-.054-.13-.108-.266-.162-.403-.157-.378-.333-.756-.51-1.125 2.361-1.021 3.425-2.539 3.647-2.956zM12 2.139c2.317 0 4.429.804 6.11 2.146-.176.348-1.125 1.747-3.403 2.65C13.73 5.35 12.217 3.993 12 3.993c-.217 0-1.73 1.357-2.707 2.802-2.278-.903-3.227-2.302-3.403-2.65C7.571 2.943 9.683 2.139 12 2.139zm-7.43 3.163c.257.348 1.206 1.747 3.484 2.65-.176.378-.352.756-.51 1.125-.054.137-.108.273-.162.403-2.085-.3-4.158.204-4.366.25-.027-.342-.041-.688-.041-1.036 0-1.621.536-3.288 1.432-4.698zM2.139 12c0-.217.014-.433.027-.648.208-.046 2.553-.348 4.827.027.054.217.108.433.176.648.068.217.149.433.23.648-1.432.581-2.553 1.432-3.227 2.302C3.484 14.429 2.139 13.217 2.139 12zm1.432 4.698c.674-.87 1.795-1.721 3.227-2.302.433 1.125.966 2.139 1.621 2.956.176.217.365.433.554.648-1.432.581-2.553 1.432-3.227 2.302C4.429 18.571 3.571 16.698 3.571 14.698zm4.698 7.43c-2.317 0-4.429-.804-6.11-2.146.176-.348 1.125-1.747 3.403-2.65.977 1.445 2.49 2.802 2.707 2.802.217 0 1.73-1.357 2.707-2.802 2.278.903 3.227 2.302 3.403 2.65-1.681 1.342-3.793 2.146-6.11 2.146zm7.43-3.163c-.257-.348-1.206-1.747-3.484-2.65.176-.378.352-.756.51-1.125.054-.137.108-.273.162-.403 2.085.3 4.158-.204 4.366-.25.027.342.041.688.041 1.036 0 1.621-.536 3.288-1.432 4.698z"/>
                )}
                {social.icon === "behance" && (
                  <path d="M0 7.5v9c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-21c-.8 0-1.5.7-1.5 1.5zm22.5 0v9h-21v-9h21zm-20.5 1.5v6h3c1.7 0 3-1.3 3-3s-1.3-3-3-3h-3zm1.5 1.5h1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-1.5v-3zm7.5-1.5v6h3c1.7 0 3-1.3 3-3 0-1-.5-1.9-1.2-2.4.7-.5 1.2-1.4 1.2-2.6 0-1.7-1.3-3-3-3h-3zm1.5 1.5h1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-1.5v-3zm0 4.5h1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-1.5v-3z"/>
                )}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FolioHero;
