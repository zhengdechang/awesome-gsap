"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "../utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionHero(): React.ReactElement {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        toggleClass: "animated",
      },
    });
  });

  return (
    <section className="w-full h-[calc(100vh-4rem)] bg-black">
      <div
        ref={sectionRef}
        className="section-wrapper relative w-[41.71875vw] h-full mx-auto overflow-hidden"
      >
        <img
          className="cover w-full h-full object-cover transition-transform duration-1000 delay-500 [.animated_&]:translate-y-[-60px]"
          src={getImageUrl("section-hero/magic-kv.png")}
          alt=""
        />
        <div className="content absolute left-0 right-0 bottom-[2.083333vw] text-center transition-transform duration-1000 delay-500 [.animated_&]:translate-y-[-60px]">
          <img
            className="magic-os w-[20.572917vw] h-full opacity-0 transition-opacity duration-1000 [.animated_&]:opacity-100"
            src={getImageUrl("section-hero/magic-os.svg")}
            alt=""
          />
          <h2 className="slogan mt-[1.5625vw] text-[1.666667vw] text-white opacity-0 transition-all duration-500 delay-500 transform translate-y-[60px] [.animated_&]:translate-y-0 [.animated_&]:opacity-100">
            越用越好用 越用越懂你
          </h2>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
