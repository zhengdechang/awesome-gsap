"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MENULINKS } from "../constants";

const FolioHeader: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollToPlugin);

    const header = headerRef.current;
    const logo = logoRef.current;
    const menu = menuRef.current;

    if (!header || !logo || !menu) return;

    // Initial animation
    gsap.fromTo(
      header,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
    );

    // Scroll behavior
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 100;
      const scrollingUp = currentScrollY < lastScrollY.current;

      if (scrollingDown) {
        gsap.to(header, {
          y: "-100%",
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (scrollingUp || currentScrollY <= 100) {
        gsap.to(header, {
          y: "0%",
          duration: 0.3,
          ease: "power2.out",
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
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
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-40 transition-all duration-300"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            ref={logoRef}
            className="text-2xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors duration-200"
            onClick={() => scrollToSection("home")}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              FOLIO
            </span>
          </div>

          {/* Desktop Menu */}
          <ul ref={menuRef} className="hidden md:flex space-x-8">
            {MENULINKS.map((item, index) => (
              <li key={item.ref}>
                <button
                  onClick={() => scrollToSection(item.ref)}
                  className="text-white hover:text-blue-400 transition-colors duration-200 font-medium cursor-pointer relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white cursor-pointer hover:text-blue-400 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="space-y-2">
              {MENULINKS.map((item) => (
                <li key={item.ref}>
                  <button
                    onClick={() => scrollToSection(item.ref)}
                    className="block w-full text-left text-white hover:text-blue-400 transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default FolioHeader;
