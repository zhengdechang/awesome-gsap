"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "../utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionNotice(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const clientWidth = document.documentElement.clientWidth;
    const scrollWidth = stickyContentRef.current?.scrollWidth ?? 0;
    const offsetLeft = stickyContentRef.current?.offsetLeft ?? 0;

    gsap.to(stickyContentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65px",
        end: "bottom 100%",
        scrub: 0,
      },
      x: -(scrollWidth + offsetLeft * 2 - clientWidth),
      ease: "none",
    });

    gsap.to(".card-blur .card-content", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65px",
        end: "center 100%",
        scrub: 0,
      },
      filter: "blur(0px)",
      scale: 1,
      ease: "none",
    });

    gsap.to(".card-offset", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: "bottom bottom",
        scrub: 0,
      },
      x: -offsetLeft,
      ease: "none",
    });
  });

  return (
    <section ref={sectionRef} className="w-full h-[108.333333vw] bg-gray-100">
      <div className="sticky top-[65px] flex flex-row justify-center items-center w-full h-[calc(100vh-65px)] overflow-hidden">
        <div
          ref={stickyContentRef}
          className="sticky-content flex w-[70.833333vw] h-[24.583333vw] mx-auto"
        >
          <div className="card card-offset flex-shrink-0 w-full h-full">
            <div className="card-content flex flex-row items-center w-full h-full bg-gray-50 rounded-[1.5625vw] overflow-hidden">
              <div className="cover-info flex flex-col w-[34.083333vw] px-[3.125vw]">
                <h2 className="title text-[2.5vw] text-black/80">
                  重要不错过
                  <br />
                  重在不打扰
                </h2>
                <p className="intro mt-[1.5625vw] leading-6 text-[0.9375vw] text-black/50">
                  直接在当前使用的荣耀设备上，
                  <br />
                  支持定制查看和回复所有手机通知消息。
                  <br />
                  重要信息不容错过，专注工作不被打扰。
                </p>
              </div>
              <img
                className="cover w-full h-full object-cover"
                src={getImageUrl("section-notice/s1-01.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="card card-blur flex-shrink-0 w-full h-full ml-[3.125vw]">
            <div className="card-content flex flex-row items-center w-full h-full bg-gray-50 rounded-[1.5625vw] overflow-hidden scale-80 origin-left blur-[10px]">
              <div className="cover-info flex flex-col w-[34.083333vw] px-[3.125vw]">
                <h2 className="title text-[2.5vw] text-black/80">
                  来电不漏接
                  <br />
                  思考不中断
                </h2>
                <p className="intro mt-[1.5625vw] leading-6 text-[0.9375vw] text-black/50">
                  在当前使用的荣耀设备上接打电话，
                  <br />
                  让重要来电不漏接，专注效率不中断。
                </p>
              </div>
              <img
                className="cover w-full h-full object-cover"
                src={getImageUrl("section-notice/s1-02.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionNotice;
