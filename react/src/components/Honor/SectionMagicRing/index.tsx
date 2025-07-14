"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionMagicRing(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ringSvgRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const introRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65px",
        end: "bottom 100%",
        scrub: 0.5,
      },
    });

    // 初始设置
    timeline.set(ringSvgRef.current, { yPercent: 80, scale: 5 });
    timeline.set(".ring-path", {
      stroke: "#D7A85B",
      strokeWidth: 2,
    });

    // 动画序列
    timeline.to(".ring-path", {
      strokeDasharray: "0% 0% 220%",
      duration: 0.5,
    });

    timeline.to(ringSvgRef.current, {
      yPercent: 0,
      scale: 0.8,
      duration: 0.5,
    });
    timeline.to(
      ".ring-path",
      { stroke: "#000000", strokeWidth: 8, duration: 0.5 },
      "<"
    );
    timeline.to(".ring-circle", { opacity: 1, duration: 0.5 }, "<");

    timeline.to(titleRef.current, { opacity: 1, duration: 0.5 });

    timeline.fromTo(
      subtitleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    timeline.to(wrapperRef.current, {
      yPercent: -5,
      duration: 1,
    });
    timeline.fromTo(
      introRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "<"
    );
  });

  return (
    <section ref={sectionRef} className="w-full h-[200vh] bg-white">
      <div
        ref={wrapperRef}
        className="sticky top-[65px] flex flex-col justify-center items-center w-full h-[calc(100vh-65px)]"
      >
        <svg
          ref={ringSvgRef}
          className="ring-svg"
          width="162px"
          height="146px"
          viewBox="0 0 162 146"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1536.000000, -479.000000)">
              <g transform="translate(1542.400000, 483.800000)">
                <ellipse
                  className="ring-path"
                  stroke="#000000"
                  strokeWidth="8"
                  strokeDasharray="0 220% 0"
                  transform="translate(74.844732, 68.400000) rotate(-240.000000) translate(-74.844732, -68.400000)"
                  cx="74.8447318"
                  cy="68.4"
                  rx="31.5406825"
                  ry="68.2132305"
                ></ellipse>
                <ellipse
                  className="ring-path"
                  stroke="#000000"
                  strokeWidth="8"
                  strokeDasharray="0 220% 0"
                  cx="74.8447318"
                  cy="68.4"
                  rx="31.4542843"
                  ry="68.4"
                ></ellipse>
                <ellipse
                  className="ring-path"
                  stroke="#000000"
                  strokeWidth="8"
                  strokeDasharray="0 220% 0"
                  transform="translate(74.844732, 68.400000) rotate(-300.000000) translate(-74.844732, -68.400000)"
                  cx="74.8447318"
                  cy="68.4"
                  rx="31.5406825"
                  ry="68.2132305"
                ></ellipse>
                <ellipse
                  className="ring-circle"
                  fill="#D7A85B"
                  cx="74.8447318"
                  cy="68.4"
                  rx="10.4847614"
                  ry="10.5230769"
                  opacity="0"
                ></ellipse>
              </g>
            </g>
          </g>
        </svg>
        <h2
          ref={titleRef}
          className="title mt-[0.520833vw] text-[3.333333vw] text-black/80 opacity-0"
        >
          MagicRing 信任环
        </h2>
        <p
          ref={subtitleRef}
          className="subtitle mt-[1.04167vw] text-[2.5vw] text-black/80 opacity-0"
        >
          智慧互联 再无界
        </p>
        <a
          ref={introRef}
          className="intro mt-[1.04167vw] leading-6 text-[0.9375vw] text-blue-600 cursor-pointer opacity-0"
          href="/"
        >
          查看智慧互联产品适配列表
        </a>
      </div>
    </section>
  );
}

export default SectionMagicRing;
