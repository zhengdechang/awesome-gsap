"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "../utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionMagicText(): React.ReactElement {
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
        end: `bottom +=${scrollWidth / 3}`,
        scrub: 0,
      },
      x: -(scrollWidth + offsetLeft * 2 - clientWidth),
      ease: "none",
    });

    gsap.to(".card-blur-1 .card-content", {
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

    gsap.to(".card-blur-2 .card-content", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top -100%",
        end: "bottom bottom",
        scrub: 0,
      },
      filter: "blur(0px)",
      scale: 1,
      ease: "none",
    });
  });

  return (
    <section ref={sectionRef} className="w-full h-[108.333333vw] bg-gray-100">
      <div className="section-wrapper sticky top-[65px] flex flex-col justify-center items-center w-full h-[calc(100vh-65px)] overflow-hidden">
        <h2 className="title w-full ml-[33.75vw] mb-[2.083333vw] text-[2.5vw] text-black/80">
          Magic 文本
        </h2>
        <div
          ref={stickyContentRef}
          className="sticky-content flex w-[70.833333vw] h-[24.583333vw] mx-auto"
        >
          <div className="card flex-shrink-0 w-full h-full">
            <div className="card-content flex flex-row items-center w-full h-full bg-gray-50 rounded-[1.5625vw] overflow-hidden">
              <div className="cover-info flex flex-col w-[34.083333vw] px-[3.125vw]">
                <p className="subtitle text-[1.666667vw] text-black/80">
                  提取快 识别准
                </p>
                <p className="intro leading-6 text-[0.9375vw] text-black/50">
                  手机上任意界面的文字，用指关节圈选，
                  <br />
                  即可一步实现全局高精准提取。
                </p>
              </div>
              <img
                className="cover w-full h-full object-cover"
                src={getImageUrl("section-magic-text/s6-01.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="card card-blur card-blur-1 flex-shrink-0 w-full h-full ml-[3.125vw]">
            <div className="card-content flex flex-row items-center w-full h-full bg-gray-50 rounded-[1.5625vw] overflow-hidden scale-80 origin-left blur-[10px]">
              <div className="cover-info flex flex-col w-[34.083333vw] px-[3.125vw]">
                <p className="subtitle text-[1.666667vw] text-black/80">
                  生活服务 一点即达
                </p>
                <p className="intro leading-6 text-[0.9375vw] text-black/50">
                  智慧分析图片中的文本语义：电话座机、地址、快
                  <br />
                  递号、航班班次、身份证、邮箱、网址等信息，后
                  <br />
                  续操作一点即达。
                </p>
              </div>
              <img
                className="cover w-full h-full object-cover"
                src={getImageUrl("section-magic-text/s6-02.jpg")}
                alt=""
              />
            </div>
          </div>
          <div className="card card-blur card-blur-2 flex-shrink-0 w-full h-full ml-[3.125vw]">
            <div className="card-content flex flex-row items-center w-full h-full bg-gray-50 rounded-[1.5625vw] overflow-hidden scale-80 origin-left blur-[10px]">
              <div className="cover-info flex flex-col w-[34.083333vw] px-[3.125vw]">
                <p className="subtitle text-[1.666667vw] text-black/80">
                  翻页扫描
                </p>
                <p className="intro leading-6 text-[0.9375vw] text-black/50">
                  文档自动连拍扫描，超强去阴影，智能防止重复。
                  <br />
                  扫描导出的格式更丰富，支持图片、TXT、PDF。
                </p>
              </div>
              <img
                className="cover w-full h-full object-cover"
                src={getImageUrl("section-magic-text/s6-02.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionMagicText;
