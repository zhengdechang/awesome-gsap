"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "../utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionService(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContentRef = useRef<HTMLDivElement>(null);
  const planRef = useRef<HTMLImageElement>(null);
  const scheduleRef = useRef<HTMLImageElement>(null);
  const leftInfoRef = useRef<HTMLDivElement>(null);
  const rightInfoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "bottom 100%",
        scrub: 0.5,
      },
    });

    timeline.from(imageContentRef.current, { scale: 0.9 });

    timeline.to(planRef.current, { scale: 1.35 });
    timeline.to(scheduleRef.current, { scale: 1.35 }, "<");

    timeline.to(leftInfoRef.current, { autoAlpha: 1 });
    timeline.to(leftInfoRef.current, { autoAlpha: 0 });

    timeline.to(rightInfoRef.current, { autoAlpha: 1 });
    timeline.to(planRef.current, { autoAlpha: 0 }, "<");
    timeline.to(scheduleRef.current, { autoAlpha: 1 }, "<");
  });

  return (
    <section ref={sectionRef} className="w-full h-[250vh] bg-white">
      <div className="service-info mb-[6.25vw] text-center">
        <h2 className="title text-[2.5vw] text-black/80">
          YOYO建议
          <br />
          多服务组合推荐 更懂你
        </h2>
        <p className="intro mt-[1.5625vw] leading-6 text-[0.9375vw] text-black/50">
          YOYO 个人化服务场景更丰富，同时提供多场景下多个并行服务的组合推荐；
          <br />
          你需要的精准服务，一键直达，无需在APP内频繁操作。
        </p>
      </div>
      <div className="section-wrapper sticky top-[240px] flex flex-row justify-center items-center w-full h-[455px] overflow-hidden">
        <div className="sticky-content relative w-[72.916667vw] h-full">
          <div
            ref={leftInfoRef}
            className="image-info left-info absolute top-0 left-0 w-[16.145833vw] mt-[3.125vw] opacity-0"
          >
            <h2 className="title text-[1.666667vw] text-black/80">
              人因优化 顺畅出行
            </h2>
            <p className="intro mt-[0.2625vw] leading-6 text-[0.9375vw] text-black/50">
              YOYO
              建议综合考虑你的当前位置、出发地天气、实时路况以及个人航旅习惯等多个因素，
              为你提供最适合的航旅出行建议，让航班出票、出发提醒、值机、登机等信息适时呈现。
            </p>
          </div>
          <div
            ref={rightInfoRef}
            className="image-info right-info absolute top-0 right-0 w-[16.145833vw] mt-[3.125vw] opacity-0"
          >
            <h2 className="title text-[1.666667vw] text-black/80">
              安排不错 出行不错过
            </h2>
            <p className="intro mt-[0.2625vw] leading-6 text-[0.9375vw] text-black/50">
              YOYO 在你出行前提示重要日程，
              <br />
              为你做好行程规划。
            </p>
          </div>
          <div
            ref={imageContentRef}
            className="image-content relative w-[50vw] mx-auto"
          >
            <img
              className="mobile w-full h-auto"
              src={getImageUrl("section-service/s4-01.png")}
              alt=""
            />
            <img
              ref={planRef}
              className="plan absolute top-0 left-0 w-full h-auto"
              src={getImageUrl("section-service/s4-02.png")}
              alt=""
            />
            <img
              ref={scheduleRef}
              className="schedule absolute top-0 left-0 w-full h-auto opacity-0"
              src={getImageUrl("section-service/s4-03.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionService;
