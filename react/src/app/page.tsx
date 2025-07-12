"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ModuleSection from "@/components/ModuleSection";
import CodeModal from "@/components/CodeModal";
import Footer from "@/components/Footer";

// Import all animation modules
import BasicAnimationsModule from "@/modules/BasicAnimations";
import TimelineSequencesModule from "@/modules/TimelineSequences";
import TextAnimationsModule from "@/modules/TextAnimations";
import ScrollTriggerModule from "@/modules/ScrollTrigger";
import ParallaxEffectsModule from "@/modules/ParallaxEffects";
import CardRevealsModule from "@/modules/CardReveals";
import HoverInteractionsModule from "@/modules/HoverInteractions";
import MouseFollowModule from "@/modules/MouseFollow";
import SvgPathModule from "@/modules/SvgPath";
import ShapeMorphingModule from "@/modules/ShapeMorphing";
import LoadingAnimationsModule from "@/modules/LoadingAnimations";

export default function Home() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);

    // GSAP configuration
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false,
    });

    console.log("🎬 GSAP React Modular Examples Loaded!");
  }, []);

  const basicModules = [
    {
      id: "basic-animations",
      name: "Basic Tweens",
      component: BasicAnimationsModule,
    },
    {
      id: "timeline-sequences",
      name: "Timeline Sequences",
      component: TimelineSequencesModule,
    },
    {
      id: "text-animations",
      name: "Text Animations",
      component: TextAnimationsModule,
    },
  ];

  const scrollModules = [
    {
      id: "scroll-trigger",
      name: "ScrollTrigger",
      component: ScrollTriggerModule,
    },
    {
      id: "parallax-effects",
      name: "Parallax Effects",
      component: ParallaxEffectsModule,
    },
    { id: "card-reveals", name: "Card Reveals", component: CardRevealsModule },
  ];

  const interactiveModules = [
    {
      id: "hover-interactions",
      name: "Hover Interactions",
      component: HoverInteractionsModule,
    },
    { id: "mouse-follow", name: "Mouse Follow", component: MouseFollowModule },
  ];

  const advancedModules = [
    { id: "svg-path", name: "SVG Path Animation", component: SvgPathModule },
    {
      id: "shape-morphing",
      name: "Shape Morphing",
      component: ShapeMorphingModule,
    },
    {
      id: "loading-animations",
      name: "Loading Animations",
      component: LoadingAnimationsModule,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
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
