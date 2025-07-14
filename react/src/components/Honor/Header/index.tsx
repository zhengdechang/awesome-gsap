"use client";

import React from "react";
import { getImageUrl } from "../utils";

function HonorHeader(): React.ReactElement {
  return (
    <div className="sticky top-0 left-0 z-10 w-full h-16 border-b border-gray-200 bg-white">
      <div className="relative w-full h-full min-w-[1200px] max-w-[1440px] px-5 mx-auto">
        <img
          className="absolute top-1/2 transform -translate-y-1/2 w-[10vw] h-6 min-w-20 max-w-25"
          src={getImageUrl("logo.svg")}
          alt="Honor Logo"
        />
        <ul className="flex flex-row justify-center items-center w-full h-full list-none m-0 p-0">
          <li className="relative flex items-center h-full mx-4 text-sm text-black cursor-pointer group">
            手机
            <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-400 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative flex items-center h-full mx-4 text-sm text-black cursor-pointer group">
            笔记本
            <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-400 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative flex items-center h-full mx-4 text-sm text-black cursor-pointer group">
            平板
            <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-400 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative flex items-center h-full mx-4 text-sm text-black cursor-pointer group">
            穿戴
            <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-400 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative flex items-center h-full mx-4 text-sm text-black cursor-pointer group">
            智慧屏
            <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-400 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative flex items-center h-full mx-4 text-sm text-black cursor-pointer group">
            更多产品
            <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-400 ease-in-out group-hover:w-full"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HonorHeader;
