"use client";

import React from "react";
import HonorHeader from "./Header";
import SectionHero from "./SectionHero";
import SectionTvc from "./SectionTvc";
import SectionMagic from "./SectionMagic";
import SectionMagicRing from "./SectionMagicRing";
import SectionConnect from "./SectionConnect";
import SectionNotice from "./SectionNotice";
import SectionDevice from "./SectionDevice";
import SectionNote from "./SectionNote";
import SectionService from "./SectionService";
import SectionSuggest from "./SectionSuggest";
import SectionMagicLive from "./SectionMagicLive";
import SectionScene from "./SectionScene";
import SectionMagicText from "./SectionMagicText";
import SectionTurboGroup from "./SectionTurboGroup";
import SectionFlowDesign from "./SectionFlowDesign";

function Honor(): React.ReactElement {
  return (
    <div className="w-full min-h-screen bg-black font-sans">
      <HonorHeader />
      <SectionHero />
      <SectionTvc />
      <SectionMagic />
      <SectionMagicRing />
      <SectionConnect
        title={["三指上滑", "万物互联"]}
        intro={[
          "进入控制中心，三指上滑，拖动图标触碰周围的荣耀设备，一步开展多设备协同；",
          "在App里，以上述相同操作，还可实现应用数据流转。",
        ]}
        videoURL={"section-connect/s1.mp4"}
      />
      <SectionConnect
        title={["跨设备接续", "思路畅通无阻"]}
        intro={[
          "在一台荣耀设备上已经展开的工作，",
          "能随着你切换到附近的荣耀设备上继续，",
          "让工作衔接无缝，思路畅通无阻。",
        ]}
        videoURL={"section-connect/s2.mp4"}
      />
      <SectionConnect
        title={["一套键鼠", "多设备自成一套"]}
        intro={[
          "在荣耀电脑管家中，可以发现周围五台荣耀设备；",
          "使用一套键鼠，同时控制其中任意三台，",
          "多设备协同无间，多资源跨屏拖拽。",
        ]}
        videoURL={"section-connect/s3.mp4"}
      />
      <SectionNotice />
      <SectionDevice />
      <SectionNote />
      <SectionMagicLive />
      <SectionService />
      <SectionScene />
      <SectionMagicText />
      <SectionTurboGroup />
      <SectionFlowDesign />
      <SectionSuggest />
    </div>
  );
}

export default Honor;
