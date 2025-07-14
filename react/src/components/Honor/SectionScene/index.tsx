"use client";

import React from "react";
import { getImageUrl } from "../utils";

function SectionScene(): React.ReactElement {
  return (
    <section className="w-full h-screen bg-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="cover-info text-center mb-[3.125vw]">
          <h2 className="title text-[2.5vw] text-black/80 font-bold">
            YOYO建议 场景倍增
          </h2>
          <p className="intro mt-[1.5625vw] leading-6 text-[0.9375vw] text-black/50 max-w-[50vw]">
            YOYO建议的服务场景更多，成为您出行、工作生活、娱乐等多个场景的贴心助理：
            <br />
            替您管理
            地铁通勤、无忧打卡、健康码、付款码、惬意观影、快递提醒、充电提醒等多个场景。
          </p>
        </div>
        <img
          className="cover w-full h-auto"
          src={getImageUrl("section-scene/s5-01.png")}
          alt=""
        />
      </div>
    </section>
  );
}

export default SectionScene;
