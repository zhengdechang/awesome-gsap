"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionMagicLive(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const liveSvgRef = useRef<SVGSVGElement>(null);
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
    timeline.set(liveSvgRef.current, { yPercent: 50, scale: 3.6 });
    timeline.set(".live-path", { strokeWidth: 2 });

    // 动画序列
    timeline.to(".path-gold", {
      strokeDasharray: "0% 0% 210%",
      duration: 0.5,
    });
    timeline.to(".path-black", {
      opacity: 1,
      duration: 0.5,
    });

    timeline.to(liveSvgRef.current, {
      yPercent: 0,
      scale: 0.8,
      duration: 0.5,
    });
    timeline.to(".live-path", { strokeWidth: 9, duration: 0.5 }, "<");

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
    <section ref={sectionRef} className="w-full h-full bg-white">
      <div
        ref={wrapperRef}
        className="flex flex-col justify-center items-center w-full h-[calc(100vh-65px)]"
      >
        <svg
          ref={liveSvgRef}
          className="live-svg"
          width="180px"
          height="180px"
          viewBox="0 0 180 180"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1905.000000, -669.000000)">
              <g transform="translate(1905.000000, 669.000000)">
                <path
                  className="live-path path-gold"
                  d="M62.7625106,83 C94.5335445,83 94.1912184,83 134.118235,83 C145.540105,83 154.8,73.866141 154.8,62.5997328 C154.8,51.331863 145.540105,42.198004 134.118235,42.198004 C130.14992,42.198004 126.457224,43.3205522 123.308356,45.2309304 C123.115719,35.2420054 114.860499,27.2 104.687802,27.2 C96.595582,27.2 89.7288269,32.2938548 87.1519415,39.4004034 C84.5735742,32.2938548 77.7068191,27.2 69.6160805,27.2 C59.3218751,27.2 50.9762634,35.4305585 50.9762634,45.5861117 C50.9762634,46.2935509 51.0251635,46.9892969 51.1051818,47.6762731 C48.8720787,46.7437395 46.4181843,46.2277766 43.8398171,46.2277766 C33.5456117,46.2277766 25.2,54.4597967 25.2,64.6138883 C25.2,74.7679799 33.5456117,83 43.8398171,83 C48.2111282,83 52.1591186,83 55.7657777,83 L61.7290805,83 C69.7763602,75.4233981 73.8,66.4233981 73.8,56"
                  stroke="#D7A85B"
                  strokeWidth="9"
                  strokeDasharray="0 210% 0"
                ></path>
                <path
                  className="live-path path-black"
                  d="M134.118235,83 C145.540105,83 154.8,73.866141 154.8,62.5997328 C154.8,51.331863 145.540105,42.198004 134.118235,42.198004 C130.14992,42.198004 126.457224,43.3205522 123.308356,45.2309304 C123.115719,35.2420054 114.860499,27.2 104.687802,27.2 C96.595582,27.2 89.7288269,32.2938548 87.1519415,39.4004034 C84.5735742,32.2938548 77.7068191,27.2 69.6160805,27.2 C59.3218751,27.2 50.9762634,35.4305585 50.9762634,45.5861117 C50.9762634,46.2935509 51.0251635,46.9892969 51.1051818,47.6762731 C48.8720787,46.7437395 46.4181843,46.2277766 43.8398171,46.2277766 C33.5456117,46.2277766 25.2,54.4597967 25.2,64.6138883 C25.2,74.7679799 33.5456117,83 43.8398171,83 C88.9790258,83 88.9790258,83 134.118235,83 Z"
                  stroke="#000000"
                  strokeWidth="8.8"
                  opacity="0"
                ></path>
                <path
                  className="live-path path-gold"
                  d="M62.5625106,152.8 C94.3335445,152.8 93.9912184,152.8 133.918235,152.8 C145.340105,152.8 154.6,143.666141 154.6,132.399733 C154.6,121.131863 145.340105,111.998004 133.918235,111.998004 C129.94992,111.998004 126.257224,113.120552 123.108356,115.03093 C122.915719,105.042005 114.660499,97 104.487802,97 C96.395582,97 89.5288269,102.093855 86.9519415,109.200403 C84.3735742,102.093855 77.5068191,97 69.4160805,97 C59.1218751,97 50.7762634,105.230558 50.7762634,115.386112 C50.7762634,116.093551 50.8251635,116.789297 50.9051818,117.476273 C48.6720787,116.54374 46.2181843,116.027777 43.6398171,116.027777 C33.3456117,116.027777 25,124.259797 25,134.413888 C25,144.56798 33.3456117,152.8 43.6398171,152.8 C48.0111282,152.8 51.9591186,152.8 55.5657777,152.8 L61.5290805,152.8 C69.5763602,145.223398 73.6,136.223398 73.6,125.8"
                  stroke="#D7A85B"
                  strokeWidth="9"
                  strokeDasharray="0 210% 0"
                  transform="translate(89.800000, 124.900000) scale(1, -1) translate(-89.800000, -124.900000)"
                ></path>
                <path
                  className="live-path path-black"
                  d="M133.918235,152.8 C145.340105,152.8 154.6,143.666141 154.6,132.399733 C154.6,121.131863 145.340105,111.998004 133.918235,111.998004 C129.94992,111.998004 126.257224,113.120552 123.108356,115.03093 C122.915719,105.042005 114.660499,97 104.487802,97 C96.395582,97 89.5288269,102.093855 86.9519415,109.200403 C84.3735742,102.093855 77.5068191,97 69.4160805,97 C59.1218751,97 50.7762634,105.230558 50.7762634,115.386112 C50.7762634,116.093551 50.8251635,116.789297 50.9051818,117.476273 C48.6720787,116.54374 46.2181843,116.027777 43.6398171,116.027777 C33.3456117,116.027777 25,124.259797 25,134.413888 C25,144.56798 33.3456117,152.8 43.6398171,152.8 C88.7790258,152.8 88.7790258,152.8 133.918235,152.8 Z"
                  stroke="#000000"
                  strokeWidth="8.8"
                  opacity="0"
                  transform="translate(89.800000, 124.900000) scale(1, -1) translate(-89.800000, -124.900000)"
                ></path>
                <rect x="0" y="0" width="180" height="180"></rect>
              </g>
            </g>
          </g>
        </svg>
        <h2
          ref={titleRef}
          className="title mt-[0.520833vw] text-[3.333333vw] text-black/80 opacity-0"
        >
          Magic Live 智慧引擎
        </h2>
        <p
          ref={subtitleRef}
          className="subtitle mt-[1.04167vw] text-[2.5vw] text-black/80 opacity-0"
        >
          越用越好用
        </p>
      </div>
    </section>
  );
}

export default SectionMagicLive;
