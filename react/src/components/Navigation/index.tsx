"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const menuItemsRef = useRef<HTMLButtonElement[]>([]);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine navbar visibility based on scroll direction
      const scrollingDown =
        currentScrollY > lastScrollY.current && currentScrollY > 100;
      const scrollingUp = currentScrollY < lastScrollY.current;

      if (navRef.current) {
        if (scrollingDown) {
          // Hide navbar when scrolling down
          gsap.to(navRef.current, {
            y: "-100%",
            duration: 0.3,
            ease: "power2.out",
          });
        } else if (scrollingUp || currentScrollY <= 100) {
          // Show navbar when scrolling up or at top
          gsap.to(navRef.current, {
            y: "0%",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initial animation
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
      );
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Kill any existing scroll animations to prevent conflicts
      gsap.killTweensOf(window);

      gsap.to(window, {
        duration: 1.0,
        scrollTo: {
          y: element,
          offsetY: 80,
        },
        ease: "power2.out",
      });
    }
  };

  const navItems = [
    { id: "basic", label: "Basic" },
    { id: "scroll", label: "ScrollTrigger" },
    { id: "interactive", label: "Interactive" },
    { id: "advanced", label: "Advanced" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1
            ref={titleRef}
            className="text-2xl font-bold text-white cursor-pointer hover:text-green-400 transition-colors duration-200 active:scale-95 transform"
            onClick={() => scrollToSection("hero")}
          >
            GSAP Examples
          </h1>

          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <button
                  ref={(el) => {
                    if (el) menuItemsRef.current[index] = el;
                  }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-green-400 transition-colors duration-200 font-medium cursor-pointer active:scale-95 transform"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            ref={mobileButtonRef}
            className="md:hidden text-white cursor-pointer hover:text-green-400 transition-colors duration-200 active:scale-95 transform"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
