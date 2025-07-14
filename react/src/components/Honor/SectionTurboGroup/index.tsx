"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "../utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTurboGroup(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Turbo X 系统引擎 - 主SVG动画
    const turboTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".turbo-main",
        start: "top 65px",
        pin: true,
        scrub: 0.5,
      },
    });

    turboTimeline.set(".turbo-svg", { yPercent: 50, scale: 3.6 });
    turboTimeline.set(".turbo-path", { strokeWidth: 2 });
    turboTimeline.set(".path-icon", { opacity: 0 });

    turboTimeline.to(".path-circle", {
      strokeDasharray: "0% 0% 200%",
      duration: 0.5,
    });
    turboTimeline.to(".path-circle", {
      stroke: "#FFFFFF",
      duration: 0.5,
    });

    turboTimeline.to(".path-white .l1", {
      strokeDasharray: "11% 11% 0%",
      duration: 0.5,
    });
    turboTimeline.to(
      ".path-white .l2",
      { strokeDasharray: "0% 0% 11%", duration: 0.5 },
      "<"
    );
    turboTimeline.to(".path-icon", { opacity: 1, duration: 0.5 }, "<");

    turboTimeline.to(".turbo-svg", {
      yPercent: 0,
      scale: 0.8,
      duration: 0.5,
    });
    turboTimeline.to(".path-circle", { strokeWidth: 9, duration: 0.5 }, "<");
    turboTimeline.to(".path-line", { strokeWidth: 5, duration: 0.5 }, "<");
    turboTimeline.to(".path-icon", { strokeWidth: 9, duration: 0.5 }, "<");

    turboTimeline.to(".turbo-title", { opacity: 1, duration: 0.5 });

    turboTimeline.to(".turbo-main", {
      yPercent: -5,
      duration: 1,
    });
    turboTimeline.fromTo(
      ".turbo-subtitle",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "<"
    );

    // TurboOS 动画
    const osTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".turbo-os-section",
        start: "top 65px",
        pin: true,
        scrub: 0.5,
      },
    });

    const osWrapper = document.querySelector(
      ".turbo-os-section"
    ) as HTMLElement;
    const osHeadline = document.querySelector(".os-headline") as HTMLElement;
    const wrapperHeight = osWrapper?.clientHeight ?? 0;
    const headlineHeight = osHeadline?.clientHeight ?? 0;
    const headlineOffsetTop = osHeadline?.offsetTop ?? 0;

    osTimeline.set(".os-headline", {
      y: wrapperHeight / 2 - headlineHeight / 2 - headlineOffsetTop,
    });
    osTimeline.set(".os-content", {
      y: wrapperHeight - headlineOffsetTop,
    });
    osTimeline.set(".os-headline-wrapper", { scale: 0.666667 });
    osTimeline.set(".turbo-os", { scale: 1.5 });

    osTimeline.fromTo(
      ".os-headline-wrapper .os-mask",
      {
        "--gradient-left": "50%",
        "--gradient-right": "50%",
      },
      {
        "--gradient-left": "0%",
        "--gradient-right": "100%",
      }
    );

    osTimeline.from(".os-fill-top", { xPercent: 100 });
    osTimeline.from(".os-fill-bottom", { xPercent: -100 }, "<");
    osTimeline.fromTo(
      ".os-headline-wrapper .os-mask",
      { autoAlpha: 1 },
      { autoAlpha: 0 },
      "<"
    );

    osTimeline.to(".turbo-os", { scale: 0.4, opacity: 0.6 });
    osTimeline.to(".os-headline-wrapper", { scale: 1 }, "<");

    osTimeline.to(".os-headline", { y: 0, duration: 1.5 });
    osTimeline.to(".os-content", { y: 0, duration: 1.5 }, "<");

    // TurboGPU 动画
    const gpuTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".turbo-gpu-section",
        start: "top 65px",
        pin: true,
        scrub: 0.5,
      },
    });

    const gpuWrapper = document.querySelector(
      ".turbo-gpu-section"
    ) as HTMLElement;
    const gpuHeadline = document.querySelector(".gpu-headline") as HTMLElement;
    const gpuWrapperHeight = gpuWrapper?.clientHeight ?? 0;
    const gpuHeadlineHeight = gpuHeadline?.clientHeight ?? 0;
    const gpuHeadlineOffsetTop = gpuHeadline?.offsetTop ?? 0;

    gpuTimeline.set(".gpu-headline", {
      y: gpuWrapperHeight / 2 - gpuHeadlineHeight / 2 - gpuHeadlineOffsetTop,
    });
    gpuTimeline.set(".gpu-content", {
      y: gpuWrapperHeight - gpuHeadlineOffsetTop,
    });
    gpuTimeline.set(".gpu-headline-wrapper", { scale: 0.666667 });
    gpuTimeline.set(".turbo-gpu", { scale: 1.5 });

    gpuTimeline.fromTo(
      ".gpu-headline-wrapper .gpu-mask",
      {
        "--gradient-left": "50%",
        "--gradient-right": "50%",
      },
      {
        "--gradient-left": "0%",
        "--gradient-right": "100%",
      }
    );

    gpuTimeline.from(".gpu-fill-top", { xPercent: 100 });
    gpuTimeline.from(".gpu-fill-bottom", { xPercent: -100 }, "<");
    gpuTimeline.fromTo(
      ".gpu-headline-wrapper .gpu-mask",
      { autoAlpha: 1 },
      { autoAlpha: 0 },
      "<"
    );

    gpuTimeline.to(".turbo-gpu", { scale: 0.4, opacity: 0.6 });
    gpuTimeline.to(".gpu-headline-wrapper", { scale: 1 }, "<");

    gpuTimeline.to(".gpu-headline", { y: 0, duration: 1.5 });
    gpuTimeline.to(".gpu-content", { y: 0, duration: 1.5 }, "<");

    // TurboLink 动画
    const linkTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".turbo-link-section",
        start: "top 65px",
        pin: true,
        scrub: 0.5,
      },
    });

    const linkWrapper = document.querySelector(
      ".turbo-link-section"
    ) as HTMLElement;
    const linkHeadline = document.querySelector(
      ".link-headline"
    ) as HTMLElement;
    const linkWrapperHeight = linkWrapper?.clientHeight ?? 0;
    const linkHeadlineHeight = linkHeadline?.clientHeight ?? 0;
    const linkHeadlineOffsetTop = linkHeadline?.offsetTop ?? 0;

    linkTimeline.set(".link-headline", {
      y: linkWrapperHeight / 2 - linkHeadlineHeight / 2 - linkHeadlineOffsetTop,
    });
    linkTimeline.set(".link-content", {
      y: linkWrapperHeight - linkHeadlineOffsetTop,
    });
    linkTimeline.set(".link-headline-wrapper", { scale: 0.666667 });
    linkTimeline.set(".turbo-link", { scale: 1.5 });

    linkTimeline.fromTo(
      ".link-headline-wrapper .link-mask",
      {
        "--gradient-left": "50%",
        "--gradient-right": "50%",
      },
      {
        "--gradient-left": "0%",
        "--gradient-right": "100%",
      }
    );

    linkTimeline.from(".link-fill-top", { xPercent: 100 });
    linkTimeline.from(".link-fill-bottom", { xPercent: -100 }, "<");
    linkTimeline.fromTo(
      ".link-headline-wrapper .link-mask",
      { autoAlpha: 1 },
      { autoAlpha: 0 },
      "<"
    );

    linkTimeline.to(".turbo-link", { scale: 0.4, opacity: 0.6 });
    linkTimeline.to(".link-headline-wrapper", { scale: 1 }, "<");

    linkTimeline.to(".link-headline", { y: 0, duration: 1.5 });
    linkTimeline.to(".link-content", { y: 0, duration: 1.5 }, "<");

    // MagicGuard 动画
    const guardTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".magic-guard-section",
        start: "top 65px",
        pin: true,
        scrub: 0.5,
      },
    });

    guardTimeline.set(".guard-svg", {
      yPercent: 50,
      scale: 3.6,
    });
    guardTimeline.set(".guard-path", { strokeWidth: 2 });
    guardTimeline.set(".guard-path-icon", { opacity: 0 });

    guardTimeline.to(".guard-path-line", {
      strokeDasharray: "300 300 0",
      duration: 0.5,
    });

    guardTimeline.to(".guard-path-line", {
      stroke: "#FFFFFF",
      duration: 0.5,
    });
    guardTimeline.to(".guard-path-icon", { opacity: 1, duration: 0.5 }, "<");

    guardTimeline.to(".guard-svg", {
      yPercent: 0,
      scale: 0.8,
      duration: 0.5,
    });
    guardTimeline.to(".guard-path", { strokeWidth: 9, duration: 0.5 }, "<");

    guardTimeline.to(".guard-title", { opacity: 1, duration: 0.5 });

    guardTimeline.fromTo(
      ".guard-subtitle",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    guardTimeline.to(".magic-guard-section", {
      yPercent: -5,
      duration: 1,
    });
    guardTimeline.fromTo(
      ".guard-intro",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "<"
    );
  });

  return (
    <section ref={sectionRef} className="w-full h-full bg-black">
      {/* Turbo X 系统引擎 */}
      <div className="turbo-main flex flex-col justify-center items-center w-full h-[calc(100vh-65px)]">
        <svg
          className="turbo-svg"
          width="180px"
          height="180px"
          viewBox="0 0 180 180"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2535.000000, -669.000000)">
              <g transform="translate(2535.000000, 669.000000)">
                <path
                  className="turbo-path path-circle"
                  d="M142.915808,147.793341 C156.914565,134.072229 165.6,114.95041 165.6,93.8 C165.6,52.0472729 131.752727,18.2 90,18.2 C48.2472729,18.2 14.4,52.0472729 14.4,93.8 C14.4,114.901577 23.0453746,133.983919 36.9873129,147.698214"
                  stroke="#D7A85B"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray="0 200% 0"
                  strokeDashoffset="2"
                ></path>
                <g
                  className="turbo-path path-line path-white"
                  stroke="#FFFFFF"
                  strokeWidth="5.4"
                  transform="translate(27.000000, 34.400000)"
                >
                  <line
                    className="l1"
                    x1="-2.94900823e-12"
                    y1="62.1"
                    x2="19.40625"
                    y2="62.1"
                  ></line>
                  <line
                    className="l2"
                    x1="104.79375"
                    y1="62.1"
                    x2="124.2"
                    y2="62.1"
                  ></line>
                </g>
                <path
                  className="turbo-path path-icon"
                  d="M71.8651016,92.1469625 L83.025657,103.19356 C83.7122311,103.873124 84.8128123,103.889561 85.5193748,103.230805 L111.591534,78.9226898 L111.591534,78.9226898"
                  stroke="#DFB97C"
                  strokeWidth="9"
                  strokeLinecap="round"
                ></path>
                <rect x="0" y="0" width="180" height="180"></rect>
              </g>
            </g>
          </g>
        </svg>
        <h2 className="turbo-title mt-[0.520833vw] text-[3.333333vw] text-white opacity-0">
          Turbo X 系统引擎
        </h2>
        <p className="turbo-subtitle mt-[1.04167vw] text-[2.5vw] text-white opacity-0">
          流畅性能 久用如新
        </p>
      </div>

      {/* TurboOS 流畅升级 功耗更优 */}
      <div className="turbo-os-section flex flex-col justify-center items-center w-full h-[calc(100vh-65px)]">
        <div className="os-headline flex flex-col justify-center items-center">
          <div className="turbo-os relative w-[37.864583vw] overflow-hidden origin-center">
            <div className="os-fill-top absolute top-[1px] left-[1px] -z-10 w-[calc(100%-2px)] h-1/2 bg-white"></div>
            <div className="os-fill-bottom absolute right-[1px] bottom-[1px] -z-10 w-[calc(100%-2px)] h-1/2 bg-white"></div>
            <img
              className="w-full"
              src={getImageUrl("section-turbo-os/turbo-os.svg")}
              alt=""
            />
          </div>
          <div className="os-headline-wrapper relative">
            <div
              className="os-mask absolute inset-0 w-full h-full pointer-events-none"
              style={{
                background: `linear-gradient(90deg, #000000 var(--gradient-left, 50%), transparent 50%, #000000 var(--gradient-right, 50%))`,
              }}
            ></div>
            <div className="title mt-[1.5625vw] text-[2.5vw] text-white font-bold text-center">
              流畅升级 功耗更优
            </div>
          </div>
        </div>
        <div className="os-content flex flex-row justify-center items-center mt-[4.6875vw]">
          <div className="performance text-center">
            <h3 className="subtitle text-[1.666667vw] text-white font-bold">
              系统更流畅
            </h3>
            <div className="improved flex flex-row gap-[4.166667vw] mt-[4.166667vw]">
              <div className="improved-item">
                <p className="intro leading-6 text-[0.9375vw] text-white">
                  应用滑动卡顿率
                </p>
                <div className="ratio flex flex-row items-center justify-center mt-[2.083333vw]">
                  <img
                    className="w-[3.125vw]"
                    src={getImageUrl("section-turbo-os/arrow-down.svg")}
                    alt=""
                  />
                  <p className="text-[4.856183vw] font-semibold bg-gradient-to-b from-[#97DEFF] to-[#1D3DE5] bg-clip-text text-transparent">
                    43%
                  </p>
                </div>
              </div>
              <div className="improved-item">
                <p className="intro leading-6 text-[0.9375vw] text-white">
                  应用启动响应时延
                </p>
                <div className="ratio flex flex-row items-center justify-center mt-[2.083333vw]">
                  <img
                    className="w-[3.125vw]"
                    src={getImageUrl("section-turbo-os/arrow-down.svg")}
                    alt=""
                  />
                  <p className="text-[4.856183vw] font-semibold bg-gradient-to-b from-[#97DEFF] to-[#1D3DE5] bg-clip-text text-transparent">
                    29%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="divider w-px h-32 mx-[5.208333vw] bg-white/30"></div>
          <div className="performance text-center">
            <h3 className="subtitle text-[1.666667vw] text-white font-bold">
              续航更持久
            </h3>
            <div className="improved flex flex-row gap-[4.166667vw] mt-[4.166667vw]">
              <div className="improved-item">
                <p className="intro leading-6 text-[0.9375vw] text-white">
                  视频聊天
                </p>
                <div className="ratio flex flex-row items-center justify-center mt-[2.083333vw]">
                  <img
                    className="w-[3.125vw]"
                    src={getImageUrl("section-turbo-os/arrow-up.svg")}
                    alt=""
                  />
                  <p className="text-[4.856183vw] font-semibold bg-gradient-to-b from-[#97DEFF] to-[#1D3DE5] bg-clip-text text-transparent">
                    20<span className="text-[2.604167vw]"> 分钟</span>
                  </p>
                </div>
              </div>
              <div className="improved-item">
                <p className="intro leading-6 text-[0.9375vw] text-white">
                  刷短视频
                </p>
                <div className="ratio flex flex-row items-center justify-center mt-[2.083333vw]">
                  <img
                    className="w-[3.125vw]"
                    src={getImageUrl("section-turbo-os/arrow-up.svg")}
                    alt=""
                  />
                  <p className="text-[4.856183vw] font-semibold bg-gradient-to-b from-[#97DEFF] to-[#1D3DE5] bg-clip-text text-transparent">
                    30<span className="text-[2.604167vw]"> 分钟</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TurboGPU 帧率更高更稳定 */}
      <div className="turbo-gpu-section flex flex-col justify-center items-center w-full h-[calc(100vh-65px)]">
        <div className="gpu-headline flex flex-col justify-center items-center">
          <div className="turbo-gpu relative w-[37.864583vw] overflow-hidden origin-center">
            <div className="gpu-fill-top absolute top-[1px] left-[1px] -z-10 w-[calc(100%-2px)] h-1/2 bg-white"></div>
            <div className="gpu-fill-bottom absolute right-[1px] bottom-[1px] -z-10 w-[calc(100%-2px)] h-1/2 bg-white"></div>
            <img
              className="w-full"
              src={getImageUrl("section-turbo-gpu/turbo-gpu.svg")}
              alt=""
            />
          </div>
          <div className="gpu-headline-wrapper relative">
            <div
              className="gpu-mask absolute inset-0 w-full h-full pointer-events-none"
              style={{
                background: `linear-gradient(90deg, #000000 var(--gradient-left, 50%), transparent 50%, #000000 var(--gradient-right, 50%))`,
              }}
            ></div>
            <div className="title mt-[1.5625vw] text-[2.5vw] text-white font-bold text-center">
              帧率更高更稳定
            </div>
          </div>
        </div>
        <div className="gpu-content flex justify-center items-center text-white">
          <img
            className="w-[60vw] h-auto"
            src={getImageUrl("section-turbo-gpu/s7-01.png")}
            alt=""
          />
        </div>
      </div>

      {/* TurboLink 网络自主优选 通信稳定流畅 */}
      <div className="turbo-link-section flex flex-col justify-center items-center w-full h-[calc(100vh-65px)]">
        <div className="link-headline flex flex-col justify-center items-center">
          <div className="turbo-link relative w-[37.864583vw] overflow-hidden origin-center">
            <div className="link-fill-top absolute top-[1px] left-[1px] -z-10 w-[calc(100%-2px)] h-1/2 bg-white"></div>
            <div className="link-fill-bottom absolute right-[1px] bottom-[1px] -z-10 w-[calc(100%-2px)] h-1/2 bg-white"></div>
            <img
              className="w-full"
              src={getImageUrl("section-turbo-link/turbo-link.svg")}
              alt=""
            />
          </div>
          <div className="link-headline-wrapper relative">
            <div
              className="link-mask absolute inset-0 w-full h-full pointer-events-none"
              style={{
                background: `linear-gradient(90deg, #000000 var(--gradient-left, 50%), transparent 50%, #000000 var(--gradient-right, 50%))`,
              }}
            ></div>
            <div className="title mt-[1.5625vw] text-[2.5vw] text-white font-bold text-center">
              网络自主优选 通信稳定流畅
            </div>
          </div>
        </div>
        <div className="link-content flex flex-row justify-center items-center gap-[5.208333vw] mt-[4.6875vw]">
          <img
            className="w-[6.25vw] h-auto"
            src={getImageUrl("section-turbo-link/tower-white.svg")}
            alt=""
          />
          <div className="improved text-center">
            <p className="subtitle text-[1.666667vw] text-white font-bold mb-[2.083333vw]">
              蜂窝网络数据卡顿率
            </p>
            <div className="ratio flex flex-row items-center justify-center">
              <img
                className="w-[3.125vw]"
                src={getImageUrl("section-turbo-link/arrow-down.svg")}
                alt=""
              />
              <p className="text-[4.856183vw] font-semibold bg-gradient-to-b from-[#97DEFF] to-[#1D3DE5] bg-clip-text text-transparent">
                83%
              </p>
            </div>
          </div>
          <img
            className="w-[6.25vw] h-auto"
            src={getImageUrl("section-turbo-link/tower-blue.svg")}
            alt=""
          />
        </div>
      </div>

      {/* MagicGuard 荣耀安全 */}
      <div className="magic-guard-section flex flex-col justify-center items-center w-full h-[calc(100vh-65px)]">
        <svg
          className="guard-svg"
          width="180px"
          height="180px"
          viewBox="0 0 180 180"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-2263.000000, -669.000000)">
              <g transform="translate(2263.000000, 669.000000)">
                <rect x="0" y="0" width="180" height="180"></rect>
                <path
                  className="guard-path guard-path-line"
                  d="M90,18 L140,28 C140,50 140,75 140,100 C140,125 120,145 90,160 C60,145 40,125 40,100 C40,75 40,50 40,28 L90,18 Z"
                  stroke="#D7A85B"
                  strokeWidth="9"
                  strokeDasharray="0 300 0"
                  strokeDashoffset="0"
                  fill="none"
                ></path>
                <path
                  className="guard-path guard-path-icon"
                  d="M68.4,85.1430969 L81.0472115,97.6305357 C81.8225916,98.3961204 83.0635635,98.4146531 83.8614592,97.6725636 L113.4,70.2 L113.4,70.2"
                  stroke="#DFB97C"
                  strokeWidth="9"
                  strokeLinecap="round"
                  opacity="0"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <h2 className="guard-title mt-[0.520833vw] text-[3.333333vw] text-white opacity-0">
          MagicGuard 荣耀安全
        </h2>
        <p className="guard-subtitle mt-[1.04167vw] text-[2.5vw] text-white opacity-0">
          科技有道 隐私至上
        </p>
        <a
          className="guard-intro mt-[1.04167vw] leading-6 text-[0.9375vw] text-blue-400 cursor-pointer opacity-0"
          href="/"
        >
          了解更多
        </a>
      </div>
    </section>
  );
}

export default SectionTurboGroup;
