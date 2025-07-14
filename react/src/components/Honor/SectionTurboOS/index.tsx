"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTurboOS(): React.ReactElement {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 65px",
        pin: true,
        scrub: 0.5,
      },
    });

    const wrapperHeight = wrapperRef.current?.clientHeight ?? 0;
    const headlineHeight = headlineRef.current?.clientHeight ?? 0;
    const headlineOffsetTop = headlineRef.current?.offsetTop ?? 0;

    timeline.set(".headline", {
      y: wrapperHeight / 2 - headlineHeight / 2 - headlineOffsetTop,
    });
    timeline.set(".section-content", {
      y: wrapperHeight - headlineOffsetTop,
    });
    timeline.set(".headline-wrapper", { scale: 0.666667 });

    timeline.fromTo(
      ".headline-wrapper .mask",
      {
        "--gradient-left": "50%",
        "--gradient-right": "50%",
      },
      {
        "--gradient-left": "0%",
        "--gradient-right": "100%",
      }
    );

    timeline.from(".fill-top", { xPercent: 100 });
    timeline.from(".fill-bottom", { xPercent: -100 }, "<");
    timeline.fromTo(
      ".headline-wrapper .mask",
      { autoAlpha: 1 },
      { autoAlpha: 0 },
      "<"
    );

    timeline.to(".turbo-os", { scale: 0.4, opacity: 0.6 });
    timeline.to(".headline-wrapper", { scale: 1 }, "<");

    timeline.to(".headline", { y: 0, duration: 1.5 });
    timeline.to(".section-content", { y: 0, duration: 1.5 }, "<");
  });

  return (
    <section className="w-full h-full bg-black">
      <div className="section-wrapper h-[calc(100vh-65px)]" ref={wrapperRef}>
        <div className="headline flex flex-col items-center" ref={headlineRef}>
          <div className="turbo-os relative w-[180px] h-[180px] mx-auto overflow-hidden rounded-full">
            <div className="fill-top absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <div className="fill-bottom absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">OS</span>
            </div>
          </div>
          <div className="headline-wrapper relative mt-8">
            <div
              className="mask absolute inset-0 bg-gradient-to-r opacity-100 pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent var(--gradient-left, 50%), white var(--gradient-left, 50%), white var(--gradient-right, 50%), transparent var(--gradient-right, 50%))`,
              }}
            ></div>
            <div className="title text-[3.333333vw] text-white text-center font-bold">
              流畅升级 功耗更优
            </div>
          </div>
        </div>
        <div className="section-content flex justify-center items-center gap-16 text-white px-16">
          <div className="performance text-center">
            <h3 className="subtitle text-[2vw] mb-8 text-white">系统更流畅</h3>
            <div className="improved flex gap-8">
              <div className="improved-item text-center">
                <p className="intro text-[1vw] mb-4 text-white/70">
                  应用滑动卡顿率
                </p>
                <div className="ratio flex items-center justify-center gap-2">
                  <span className="text-red-400 text-2xl">↓</span>
                  <p className="text-[3vw] font-bold text-white">43%</p>
                </div>
              </div>
              <div className="improved-item text-center">
                <p className="intro text-[1vw] mb-4 text-white/70">
                  应用启动响应时延
                </p>
                <div className="ratio flex items-center justify-center gap-2">
                  <span className="text-red-400 text-2xl">↓</span>
                  <p className="text-[3vw] font-bold text-white">29%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="divider w-px h-32 bg-white/30"></div>
          <div className="performance text-center">
            <h3 className="subtitle text-[2vw] mb-8 text-white">续航更持久</h3>
            <div className="improved flex gap-8">
              <div className="improved-item text-center">
                <p className="intro text-[1vw] mb-4 text-white/70">视频聊天</p>
                <div className="ratio flex items-center justify-center gap-2">
                  <span className="text-green-400 text-2xl">↑</span>
                  <p className="text-[3vw] font-bold text-white">
                    20<span className="text-[1vw]"> 分钟</span>
                  </p>
                </div>
              </div>
              <div className="improved-item text-center">
                <p className="intro text-[1vw] mb-4 text-white/70">刷短视频</p>
                <div className="ratio flex items-center justify-center gap-2">
                  <span className="text-green-400 text-2xl">↑</span>
                  <p className="text-[3vw] font-bold text-white">
                    30<span className="text-[1vw]"> 分钟</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTurboOS;
