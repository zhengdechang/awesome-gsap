"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "../utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionNote(): React.ReactElement {
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
                  精彩全收藏
                  <br />
                  兴趣永在线
                </h2>
                <p className="intro mt-[1.5625vw] leading-6 text-[0.9375vw] text-black/50">
                  告诉你一个节省流量的妙招：
                  <br />
                  现在网页也能离线保存了。
                  <br />
                  把你的知识、视频永久收藏保存，
                  <br />
                  不论设备离线在线，
                  <br />
                  让你感兴趣的内容始终在线。
                </p>
              </div>
              <img
                className="cover w-full h-full object-cover"
                src={getImageUrl("section-note/s2-01.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="card card-blur flex-shrink-0 w-full h-full ml-[3.125vw]">
            <div className="card-content flex flex-row items-center w-full h-full bg-gray-50 rounded-[1.5625vw] overflow-hidden scale-80 origin-left blur-[10px]">
              <div className="cover-info flex flex-col w-[34.083333vw] px-[3.125vw]">
                <h2 className="title text-[2.5vw] text-black/80">
                  知音笔记
                  <br />
                  一触即达
                </h2>
                <p className="intro mt-[1.5625vw] leading-6 text-[0.9375vw] text-black/50">
                  录音关联笔记，点击笔记，
                  <br />
                  自动跳转到相应的录音片段。
                  <br />
                  回顾会议、复习课程、随心批注更高效。
                </p>
              </div>
              <img
                className="cover w-full h-full object-cover"
                src={getImageUrl("section-note/s2-01.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionNote;
