"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "../utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function SectionDevice(): React.ReactElement {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".honor-section-device",
      start: "top 85%",
      onToggle: ({ isActive }) => {
        if (!isActive) {
          return;
        }

        const timeline = gsap.timeline();

        timeline.fromTo(
          ".honor-section-device .title",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
        timeline.fromTo(
          ".honor-section-device .intro",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );

        timeline.fromTo(
          ".honor-section-device .pc",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          0
        );
        timeline.fromTo(
          ".honor-section-device .ipad",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          0.5
        );
        timeline.fromTo(
          ".honor-section-device .mobile",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          1
        );
      },
    });
  });

  return (
    <section className="honor-section-device flex justify-center items-center w-full h-screen bg-white">
      <div className="section-wrapper flex flex-row items-center max-w-6xl mx-auto px-8">
        <div className="image-info flex-1 pr-12">
          <h2 className="title text-4xl font-bold text-gray-800 mb-6 opacity-0">
            多端同步
            <br />
            随处可见
          </h2>
          <p className="intro text-lg text-gray-600 leading-relaxed opacity-0">
            首发电脑版荣耀笔记，帮你更高效的笔记整理，更快速的笔记编辑。在荣耀手机、平板、电脑设备上，随时随处查看修改笔记。
          </p>
        </div>
        <div className="image-content flex-1 relative">
          <img
            className="pc absolute top-0 left-0 w-full opacity-0"
            src={getImageUrl("section-device/s3-01.png")}
            alt=""
          />
          <img
            className="ipad absolute top-8 left-8 w-3/4 opacity-0"
            src={getImageUrl("section-device/s3-02.png")}
            alt=""
          />
          <img
            className="mobile absolute top-16 left-16 w-1/2 opacity-0"
            src={getImageUrl("section-device/s3-03.png")}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default SectionDevice;
