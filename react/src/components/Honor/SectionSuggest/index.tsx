"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "../utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionSuggest(): React.ReactElement {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 65px",
        pin: true,
        scrub: 0.5,
      },
    });

    timeline.set(".card-list-1", { xPercent: -50 });
    timeline.set(".card-list-2", { xPercent: 0 });

    timeline.to(".card-list-1", { xPercent: 0 });
    timeline.to(".card-list-2", { xPercent: -50 }, "<");
  });

  return (
    <section className="w-full h-full bg-white">
      <div
        ref={wrapperRef}
        className="flex flex-col justify-center items-center w-full h-[calc(100vh-65px)]"
      >
        <div className="suggest-info mb-[3.645833vw] text-center">
          <h2 className="title text-[2.5vw] text-black/80">系统级卡片建议</h2>
          <p className="intro mt-[1.5625vw] leading-6 text-[0.9375vw] text-black/50">
            基于运动场景智能推荐 300+个系统级卡片建议。
          </p>
        </div>
        <div className="suggest-content flex flex-col gap-[1.25vw] w-full overflow-hidden">
          <div className="card-list card-list-1 flex flex-row items-center gap-[1.25vw]">
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-01.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-02.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-03.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-04.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-05.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-06.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-07.png")}
              alt=""
            />
          </div>
          <div className="card-list card-list-2 flex flex-row items-center gap-[1.25vw]">
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-01.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-02.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-03.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-04.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-05.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-06.png")}
              alt=""
            />
            <img
              className="item w-[20.15625vw]"
              src={getImageUrl("section-suggest/card-07.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSuggest;
