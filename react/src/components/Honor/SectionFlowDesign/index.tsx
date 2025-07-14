"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionFlowDesign(): React.ReactElement {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 65px",
        pin: true,
        scrub: 0.5,
      },
    });

    timeline.to(titleRef.current, { opacity: 1 });

    timeline.fromTo(
      subtitleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  });

  return (
    <section className="w-full h-full bg-white">
      <div
        ref={wrapperRef}
        className="flex flex-col justify-center items-center w-full h-[calc(100vh-65px)]"
      >
        <h2
          ref={titleRef}
          className="title mt-[0.520833vw] text-[3.333333vw] text-black/80 opacity-0"
        >
          Flow Design
        </h2>
        <p
          ref={subtitleRef}
          className="subtitle mt-[1.04167vw] text-[2.5vw] text-black/80 opacity-0"
        >
          自然交互 随心体验
        </p>
      </div>
    </section>
  );
}

export default SectionFlowDesign;
