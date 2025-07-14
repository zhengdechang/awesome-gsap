"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "../utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionMagic(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      scrub: 0.5,
      onToggle: ({ isActive }) => {
        if (!isActive) {
          gsap.to(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
          });
          return;
        }

        gsap.fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power1.inOut" }
        );
      },
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 30%",
      scrub: 0.5,
      onToggle: ({ isActive }) => {
        if (!isActive) {
          gsap.to(listRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
          });
          return;
        }

        gsap.fromTo(
          listRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power1.inOut" }
        );
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      className="flex flex-row justify-center items-center w-full h-screen bg-white"
    >
      <div className="flex flex-col text-center">
        <h2
          ref={titleRef}
          className="title text-[2.5vw] text-black/80 opacity-0"
        >
          4大技术加持 共筑新体验
        </h2>
        <ul
          ref={listRef}
          className="list flex flex-row mt-[7.291667vw] opacity-0 list-none p-0"
        >
          <li className="item px-[3.333333vw]">
            <img
              className="cover w-25 h-25 mb-5"
              src={getImageUrl("section-magic/magic-ring.svg")}
              alt=""
            />
            <p className="subtitle text-[1.666667vw] text-black/80 m-0">
              MagicRing 信任环
            </p>
            <p className="intro mt-[1.041667vw] leading-6 text-[0.9375vw] text-black/50 mb-0">
              跨系统可信互联
            </p>
          </li>
          <li className="item px-[3.333333vw]">
            <img
              className="cover w-25 h-25 mb-5"
              src={getImageUrl("section-magic/magic-ring.svg")}
              alt=""
            />
            <p className="subtitle text-[1.666667vw] text-black/80 m-0">
              Magic Live 智慧引擎
            </p>
            <p className="intro mt-[1.041667vw] leading-6 text-[0.9375vw] text-black/50 mb-0">
              平台级AI能力
            </p>
          </li>
          <li className="item px-[3.333333vw]">
            <img
              className="cover w-25 h-25 mb-5"
              src={getImageUrl("section-magic/magic-ring.svg")}
              alt=""
            />
            <p className="subtitle text-[1.666667vw] text-black/80 m-0">
              Turbo X 系统引擎
            </p>
            <p className="intro mt-[1.041667vw] leading-6 text-[0.9375vw] text-black/50 mb-0">
              内核级底层性能增强
            </p>
          </li>
          <li className="item px-[3.333333vw]">
            <img
              className="cover w-25 h-25 mb-5"
              src={getImageUrl("section-magic/magic-ring.svg")}
              alt=""
            />
            <p className="subtitle text-[1.666667vw] text-black/80 m-0">
              MagicGuard 荣耀安全
            </p>
            <p className="intro mt-[1.041667vw] leading-6 text-[0.9375vw] text-black/50 mb-0">
              三重安全防护体系
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SectionMagic;
