"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import FolioLayout from "@/components/folio/FolioLayout";
import FolioHero from "@/components/folio/FolioHero";
import FolioProjects from "@/components/folio/FolioProjects";
import FolioSkills from "@/components/folio/FolioSkills";
import FolioTimeline from "@/components/folio/FolioTimeline";
import FolioAbout from "@/components/folio/FolioAbout";
import FolioQuote from "@/components/folio/FolioQuote";
import FolioCollaboration from "@/components/folio/FolioCollaboration";
import FolioContact from "@/components/folio/FolioContact";

export default function FolioPage() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    // GSAP configuration
    gsap.config({
      nullTargetWarn: false,
    });

    console.log("🎨 Folio Portfolio Loaded!");
  }, []);

  return (
    <FolioLayout>
      <FolioHero />
      <FolioProjects />
      <FolioQuote />
      <FolioSkills />
      <FolioTimeline />
      <FolioAbout />
      <FolioCollaboration />
      <FolioContact />
    </FolioLayout>
  );
}
