"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionTurbo(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const turboSvgRef = useRef<SVGSVGElement>(null);
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

    // 初始设置
    timeline.set(turboSvgRef.current, { yPercent: 50, scale: 3.6 });
    timeline.set(".turbo-path", { strokeWidth: 2 });
    timeline.set(".path-icon", { opacity: 0 });

    // 动画序列
    timeline.to(".path-circle", {
      strokeDasharray: "0% 0% 200%",
      duration: 0.5,
    });
    timeline.to(".path-circle", {
      stroke: "#FFFFFF",
      duration: 0.5,
    });

    timeline.to(".path-white .l1", {
      strokeDasharray: "11% 11% 0%",
      duration: 0.5,
    });
    timeline.to(
      ".path-white .l2",
      { strokeDasharray: "0% 0% 11%", duration: 0.5 },
      "<"
    );
    timeline.to(".path-icon", { opacity: 1, duration: 0.5 }, "<");

    timeline.to(turboSvgRef.current, {
      yPercent: 0,
      scale: 0.8,
      duration: 0.5,
    });
    timeline.to(".path-circle", { strokeWidth: 9, duration: 0.5 }, "<");
    timeline.to(".path-line", { strokeWidth: 5, duration: 0.5 }, "<");
    timeline.to(".path-icon", { strokeWidth: 9, duration: 0.5 }, "<");

    timeline.to(titleRef.current, { opacity: 1, duration: 0.5 });

    timeline.to(wrapperRef.current, {
      yPercent: -5,
      duration: 1,
    });
    timeline.fromTo(
      subtitleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "<"
    );
  });

  return (
    <section ref={sectionRef} className="w-full h-full bg-black">
      <div
        ref={wrapperRef}
        className="flex flex-col justify-center items-center w-full h-[calc(100vh-65px)]"
      >
        <svg
          ref={turboSvgRef}
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
                <rect x="0" y="0" width="180" height="180"></rect>
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
                  className="turbo-path path-line path-gold"
                  stroke="#DFB97C"
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
                  <line
                    className="l1"
                    x1="3.2651028"
                    y1="77.3377451"
                    x2="21.9322582"
                    y2="72.3358959"
                  ></line>
                  <line
                    className="l2"
                    x1="104.067742"
                    y1="50.3277594"
                    x2="122.734897"
                    y2="45.3259102"
                  ></line>
                  <line
                    className="l1"
                    x1="8.1485825"
                    y1="87.4214704"
                    x2="27.4742438"
                    y2="87.4214704"
                    transform="translate(17.811413, 87.421470) rotate(-30.000000) translate(-17.811413, -87.421470) "
                  ></line>
                  <line
                    className="l2"
                    x1="98.5257562"
                    y1="35.2421849"
                    x2="117.851417"
                    y2="35.2421849"
                    transform="translate(108.188587, 35.242185) rotate(-30.000000) translate(-108.188587, -35.242185) "
                  ></line>
                  <line
                    className="l2"
                    x1="90.233496"
                    y1="24.435501"
                    x2="109.559157"
                    y2="24.435501"
                    transform="translate(99.896327, 24.435501) rotate(-45.000000) translate(-99.896327, -24.435501) "
                  ></line>
                  <line
                    className="l2"
                    x1="79.4268121"
                    y1="16.1432408"
                    x2="98.7524734"
                    y2="16.1432408"
                    transform="translate(89.089643, 16.143241) rotate(-60.000000) translate(-89.089643, -16.143241) "
                  ></line>
                  <line
                    className="l2"
                    x1="66.8421622"
                    y1="10.9305081"
                    x2="86.1678235"
                    y2="10.9305081"
                    transform="translate(76.504993, 10.930508) rotate(-75.000000) translate(-76.504993, -10.930508) "
                  ></line>
                  <line
                    className="l2"
                    x1="54"
                    y1="9.9"
                    x2="73.8"
                    y2="9.9"
                    transform="translate(63.900000, 9.900000) rotate(-90.000000) translate(-63.900000, -9.900000) "
                  ></line>
                  <line
                    className="l2"
                    x1="39.8321765"
                    y1="10.9305081"
                    x2="59.1578378"
                    y2="10.9305081"
                    transform="translate(49.495007, 10.930508) rotate(-105.000000) translate(-49.495007, -10.930508) "
                  ></line>
                  <line
                    className="l2"
                    x1="27.2475266"
                    y1="16.1432408"
                    x2="46.5731879"
                    y2="16.1432408"
                    transform="translate(36.910357, 16.143241) rotate(-120.000000) translate(-36.910357, -16.143241) "
                  ></line>
                  <line
                    className="l2"
                    x1="16.4408427"
                    y1="24.435501"
                    x2="35.766504"
                    y2="24.435501"
                    transform="translate(26.103673, 24.435501) rotate(-135.000000) translate(-26.103673, -24.435501) "
                  ></line>
                  <line
                    className="l1"
                    x1="116.556844"
                    y1="92.2528857"
                    x2="99.82033"
                    y2="82.5900551"
                  ></line>
                  <line
                    className="l2"
                    x1="26.17967"
                    y1="40.0736002"
                    x2="9.44315634"
                    y2="30.4107695"
                  ></line>
                  <line
                    className="l1"
                    x1="122.734897"
                    y1="77.3377451"
                    x2="104.067742"
                    y2="72.3358959"
                  ></line>
                  <line
                    className="l2"
                    x1="21.9322582"
                    y1="50.3277594"
                    x2="3.2651028"
                    y2="45.3259102"
                  ></line>
                </g>
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
                  <line
                    className="l1"
                    x1="3.2651028"
                    y1="77.3377451"
                    x2="21.9322582"
                    y2="72.3358959"
                  ></line>
                  <line
                    className="l2"
                    x1="104.067742"
                    y1="50.3277594"
                    x2="122.734897"
                    y2="45.3259102"
                  ></line>
                  <line
                    className="l1"
                    x1="8.1485825"
                    y1="87.4214704"
                    x2="27.4742438"
                    y2="87.4214704"
                    transform="translate(17.811413, 87.421470) rotate(-30.000000) translate(-17.811413, -87.421470) "
                  ></line>
                  <line
                    className="l2"
                    x1="98.5257562"
                    y1="35.2421849"
                    x2="117.851417"
                    y2="35.2421849"
                    transform="translate(108.188587, 35.242185) rotate(-30.000000) translate(-108.188587, -35.242185) "
                  ></line>
                  <line
                    className="l2"
                    x1="90.233496"
                    y1="24.435501"
                    x2="109.559157"
                    y2="24.435501"
                    transform="translate(99.896327, 24.435501) rotate(-45.000000) translate(-99.896327, -24.435501) "
                  ></line>
                  <line
                    className="l2"
                    x1="79.4268121"
                    y1="16.1432408"
                    x2="98.7524734"
                    y2="16.1432408"
                    transform="translate(89.089643, 16.143241) rotate(-60.000000) translate(-89.089643, -16.143241) "
                  ></line>
                  <line
                    className="l2"
                    x1="66.8421622"
                    y1="10.9305081"
                    x2="86.1678235"
                    y2="10.9305081"
                    transform="translate(76.504993, 10.930508) rotate(-75.000000) translate(-76.504993, -10.930508) "
                  ></line>
                  <line
                    className="l2"
                    x1="54"
                    y1="9.9"
                    x2="73.8"
                    y2="9.9"
                    transform="translate(63.900000, 9.900000) rotate(-90.000000) translate(-63.900000, -9.900000) "
                  ></line>
                  <line
                    className="l2"
                    x1="39.8321765"
                    y1="10.9305081"
                    x2="59.1578378"
                    y2="10.9305081"
                    transform="translate(49.495007, 10.930508) rotate(-105.000000) translate(-49.495007, -10.930508) "
                  ></line>
                  <line
                    className="l2"
                    x1="27.2475266"
                    y1="16.1432408"
                    x2="46.5731879"
                    y2="16.1432408"
                    transform="translate(36.910357, 16.143241) rotate(-120.000000) translate(-36.910357, -16.143241) "
                  ></line>
                  <line
                    className="l2"
                    x1="16.4408427"
                    y1="24.435501"
                    x2="35.766504"
                    y2="24.435501"
                    transform="translate(26.103673, 24.435501) rotate(-135.000000) translate(-26.103673, -24.435501) "
                  ></line>
                  <line
                    className="l1"
                    x1="116.556844"
                    y1="92.2528857"
                    x2="99.82033"
                    y2="82.5900551"
                  ></line>
                  <line
                    className="l2"
                    x1="26.17967"
                    y1="40.0736002"
                    x2="9.44315634"
                    y2="30.4107695"
                  ></line>
                  <line
                    className="l1"
                    x1="122.734897"
                    y1="77.3377451"
                    x2="104.067742"
                    y2="72.3358959"
                  ></line>
                  <line
                    className="l2"
                    x1="21.9322582"
                    y1="50.3277594"
                    x2="3.2651028"
                    y2="45.3259102"
                  ></line>
                </g>
                <path
                  className="turbo-path path-icon"
                  d="M71.8651016,92.1469625 L83.025657,103.19356 C83.7122311,103.873124 84.8128123,103.889561 85.5193748,103.230805 L111.591534,78.9226898 L111.591534,78.9226898"
                  stroke="#DFB97C"
                  strokeWidth="9"
                  strokeLinecap="round"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <h2
          ref={titleRef}
          className="title mt-[0.520833vw] text-[3.333333vw] text-white opacity-0"
        >
          Turbo X 系统引擎
        </h2>
        <p
          ref={subtitleRef}
          className="subtitle mt-[1.04167vw] text-[2.5vw] text-white opacity-0"
        >
          流畅性能 久用如新
        </p>
      </div>
    </section>
  );
}

export default SectionTurbo;
