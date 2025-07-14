"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getImageUrl } from "../utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  title: string[];
  intro: string[];
  videoURL: string;
};

function SectionConnect(props: Props): React.ReactElement {
  const connectRef = useRef<HTMLDivElement | null>(null);
  const videoInfoRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: connectRef.current,
      start: "top 70%",
      onToggle: ({ isActive }) => {
        if (!isActive) {
          gsap.to(videoInfoRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.5,
          });
          return;
        }

        gsap.fromTo(
          videoInfoRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
      },
    });
    ScrollTrigger.create({
      trigger: connectRef.current,
      start: "top center",
      onToggle: ({ isActive }) => {
        if (!isActive) {
          gsap.to(videoRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.5,
          });
          return;
        }

        gsap.fromTo(
          videoRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        );
      },
    });
  });

  return (
    <section
      className="flex flex-row justify-center items-center w-full h-screen bg-white"
      ref={connectRef}
    >
      <div className="flex flex-col justify-center items-center">
        <div
          className="video-info flex flex-row justify-start w-[54.166667vw] opacity-0"
          ref={videoInfoRef}
        >
          <h2
            className="title text-[2.5vw] text-black/80 m-0"
            dangerouslySetInnerHTML={{ __html: props.title?.join?.("<br />") }}
          ></h2>
          <h2
            className="intro ml-[3.125vw] leading-6 text-[0.9375vw] text-black/50 mt-0 mb-0"
            dangerouslySetInnerHTML={{ __html: props.intro?.join?.("<br />") }}
          ></h2>
        </div>
        <video
          className="video w-[58.333333vw] mt-[1.5625vw] mb-[10.416667vw] rounded-[1.5625vw] opacity-0"
          autoPlay
          playsInline
          loop
          muted
          ref={videoRef}
        >
          <source src={getImageUrl(props.videoURL)} />
        </video>
      </div>
    </section>
  );
}

export default SectionConnect;
