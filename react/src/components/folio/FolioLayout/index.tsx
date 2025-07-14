"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FolioHeader from "../FolioHeader";
import FolioFooter from "../FolioFooter";
import FolioCursor from "../FolioCursor";
import FolioProgressIndicator from "../FolioProgressIndicator";

interface FolioLayoutProps {
  children: React.ReactNode;
}

const FolioLayout: React.FC<FolioLayoutProps> = ({ children }) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial page load animation
    if (layoutRef.current) {
      gsap.fromTo(
        layoutRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div ref={layoutRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      <FolioCursor />
      <FolioProgressIndicator />
      <FolioHeader />
      <main className="relative">
        {children}
      </main>
      <FolioFooter />
    </div>
  );
};

export default FolioLayout;
