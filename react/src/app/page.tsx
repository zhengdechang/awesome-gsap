"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ModuleSection from "@/components/ModuleSection";
import CodeModal from "@/components/CodeModal";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

// Import all animation components
import BasicAnimations from "@/components/BasicAnimations";
import TimelineSequences from "@/components/TimelineSequences";
import TextAnimations from "@/components/TextAnimations";
import ScrollTrigger from "@/components/ScrollTrigger";
import ParallaxEffects from "@/components/ParallaxEffects";
import CardReveals from "@/components/CardReveals";
import HoverInteractions from "@/components/HoverInteractions";
import MouseFollow from "@/components/MouseFollow";
import SvgPath from "@/components/SvgPath";
import ShapeMorphing from "@/components/ShapeMorphing";
import LoadingAnimations from "@/components/LoadingAnimations";

export default function Home() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(GSAPScrollTrigger, TextPlugin, MotionPathPlugin);

    // GSAP configuration
    gsap.config({
      nullTargetWarn: false,
    });

    console.log("🎬 GSAP React Modular Examples Loaded!");
  }, []);

  const basicModules = [
    {
      id: "basic-animations",
      name: "Basic Tweens",
      component: (props: any) => (
        <BasicAnimations variant="module" {...props} />
      ),
    },
    {
      id: "timeline-sequences",
      name: "Timeline Sequences",
      component: (props: any) => <TimelineSequences {...props} />,
    },
    {
      id: "text-animations",
      name: "Text Animations",
      component: (props: any) => <TextAnimations {...props} />,
    },
  ];

  const scrollModules = [
    {
      id: "scroll-trigger",
      name: "ScrollTrigger",
      component: (props: any) => <ScrollTrigger {...props} />,
    },
    {
      id: "parallax-effects",
      name: "Parallax Effects",
      component: (props: any) => <ParallaxEffects {...props} />,
    },
    {
      id: "card-reveals",
      name: "Card Reveals",
      component: (props: any) => <CardReveals {...props} />,
    },
  ];

  const interactiveModules = [
    {
      id: "hover-interactions",
      name: "Hover Interactions",
      component: (props: any) => <HoverInteractions {...props} />,
    },
    {
      id: "mouse-follow",
      name: "Mouse Follow",
      component: (props: any) => <MouseFollow {...props} />,
    },
  ];

  const advancedModules = [
    {
      id: "svg-path",
      name: "SVG Path Animation",
      component: (props: any) => <SvgPath {...props} />,
    },
    {
      id: "shape-morphing",
      name: "Shape Morphing",
      component: (props: any) => <ShapeMorphing {...props} />,
    },
    {
      id: "loading-animations",
      name: "Loading Animations",
      component: (props: any) => <LoadingAnimations {...props} />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <ScrollProgress />
      <Navigation />
      <Hero />

      <ModuleSection
        id="basic"
        title="Basic Animations"
        modules={basicModules}
      />

      <ModuleSection
        id="scroll"
        title="Scroll-Based Animations"
        modules={scrollModules}
      />

      <ModuleSection
        id="interactive"
        title="Interactive Animations"
        modules={interactiveModules}
      />

      <ModuleSection
        id="advanced"
        title="Advanced Animations"
        modules={advancedModules}
      />

      <Footer />
      <CodeModal />
    </main>
  );
}
