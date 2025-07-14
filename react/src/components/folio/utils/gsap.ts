import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);
}

// Common GSAP animation utilities
export const gsapUtils = {
  // Fade in animation
  fadeIn: (element: string | Element, options: gsap.TweenVars = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", ...options }
    );
  },

  // Slide in from left
  slideInLeft: (element: string | Element, options: gsap.TweenVars = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", ...options }
    );
  },

  // Slide in from right
  slideInRight: (element: string | Element, options: gsap.TweenVars = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", ...options }
    );
  },

  // Scale in animation
  scaleIn: (element: string | Element, options: gsap.TweenVars = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", ...options }
    );
  },

  // Stagger animation for multiple elements
  staggerIn: (elements: string | Element[], options: gsap.TweenVars = {}) => {
    return gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out", 
        stagger: 0.1,
        ...options 
      }
    );
  },

  // Reveal text animation
  revealText: (element: string | Element, options: gsap.TweenVars = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 100, skewY: 7 },
      { 
        opacity: 1, 
        y: 0, 
        skewY: 0, 
        duration: 1.5, 
        ease: "power4.out",
        ...options 
      }
    );
  },

  // Parallax scroll effect
  parallax: (element: string | Element, speed: number = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  },

  // Scroll-triggered fade in
  scrollFadeIn: (element: string | Element, options: gsap.TweenVars = {}) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        ...options,
      }
    );
  },

  // Hover scale effect
  hoverScale: (element: string | Element, scale: number = 1.05) => {
    const el = typeof element === "string" ? document.querySelector(element) : element;
    if (!el) return;

    el.addEventListener("mouseenter", () => {
      gsap.to(el, { scale, duration: 0.3, ease: "power2.out" });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  },

  // Timeline for complex animations
  createTimeline: (options: gsap.TimelineVars = {}) => {
    return gsap.timeline(options);
  },

  // Kill all animations on element
  killAnimations: (element: string | Element) => {
    gsap.killTweensOf(element);
  },

  // Set initial state
  set: (element: string | Element, vars: gsap.TweenVars) => {
    return gsap.set(element, vars);
  },
};

// Animation presets for common patterns
export const animationPresets = {
  heroTitle: {
    opacity: 0,
    y: 100,
    skewY: 7,
  },
  heroSubtitle: {
    opacity: 0,
    y: 50,
  },
  cardReveal: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  skillIcon: {
    opacity: 0,
    scale: 0,
    rotation: -180,
  },
  timelineItem: {
    opacity: 0,
    x: -50,
  },
};

export default gsapUtils;
