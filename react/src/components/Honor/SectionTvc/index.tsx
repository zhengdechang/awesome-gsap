"use client";

import React from "react";
import { getImageUrl } from "../utils";

function SectionTvc(): React.ReactElement {
  return (
    <section className="w-full h-screen bg-white">
      <div className="w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={getImageUrl("section-tvc/tvc-glance.mp4")} />
        </video>
      </div>
    </section>
  );
}

export default SectionTvc;
