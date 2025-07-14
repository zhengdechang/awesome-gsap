import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Global animation configurations
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    verySlow: 2.0,
  },
  ease: {
    power1: "power1.out",
    power2: "power2.out",
    power3: "power3.out",
    power4: "power4.out",
    back: "back.out(1.7)",
    elastic: "elastic.out(1, 0.3)",
    bounce: "bounce.out",
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.2,
  },
};

// Page transition animations
export const pageTransitions = {
  fadeIn: (element: string | Element) => {
    return gsap.fromTo(
      element,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.ease.power2 
      }
    );
  },

  slideUp: (element: string | Element) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.ease.power2 
      }
    );
  },

  scaleIn: (element: string | Element) => {
    return gsap.fromTo(
      element,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.ease.back 
      }
    );
  },
};

// Scroll-triggered animations
export const scrollAnimations = {
  fadeInUp: (element: string | Element, trigger?: string | Element) => {
    return gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.ease.power2,
        scrollTrigger: {
          trigger: trigger || element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },

  staggerFadeIn: (elements: string | Element[], trigger?: string | Element) => {
    return gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: ANIMATION_CONFIG.duration.normal,
        ease: ANIMATION_CONFIG.ease.power2,
        stagger: ANIMATION_CONFIG.stagger.normal,
        scrollTrigger: {
          trigger: trigger || elements[0],
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  },

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
};

// Hover animations
export const hoverAnimations = {
  scale: (element: string | Element, scale: number = 1.05) => {
    const el = typeof element === "string" ? document.querySelector(element) : element;
    if (!el) return;

    const handleMouseEnter = () => {
      gsap.to(el, { 
        scale, 
        duration: ANIMATION_CONFIG.duration.fast, 
        ease: ANIMATION_CONFIG.ease.power2 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, { 
        scale: 1, 
        duration: ANIMATION_CONFIG.duration.fast, 
        ease: ANIMATION_CONFIG.ease.power2 
      });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  },

  lift: (element: string | Element) => {
    const el = typeof element === "string" ? document.querySelector(element) : element;
    if (!el) return;

    const handleMouseEnter = () => {
      gsap.to(el, { 
        y: -10, 
        duration: ANIMATION_CONFIG.duration.fast, 
        ease: ANIMATION_CONFIG.ease.power2 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, { 
        y: 0, 
        duration: ANIMATION_CONFIG.duration.fast, 
        ease: ANIMATION_CONFIG.ease.power2 
      });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  },
};

// Loading animations
export const loadingAnimations = {
  spinner: (element: string | Element) => {
    return gsap.to(element, {
      rotation: 360,
      duration: 1,
      ease: "none",
      repeat: -1,
    });
  },

  pulse: (element: string | Element) => {
    return gsap.to(element, {
      scale: 1.1,
      duration: 1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  },
};

// Utility functions
export const animationUtils = {
  killAll: (element?: string | Element) => {
    if (element) {
      gsap.killTweensOf(element);
    } else {
      gsap.killTweensOf("*");
    }
  },

  set: (element: string | Element, vars: gsap.TweenVars) => {
    return gsap.set(element, vars);
  },

  timeline: (vars?: gsap.TimelineVars) => {
    return gsap.timeline(vars);
  },

  refreshScrollTrigger: () => {
    ScrollTrigger.refresh();
  },

  killScrollTriggers: () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  },
};

export default {
  pageTransitions,
  scrollAnimations,
  hoverAnimations,
  loadingAnimations,
  animationUtils,
  ANIMATION_CONFIG,
};
