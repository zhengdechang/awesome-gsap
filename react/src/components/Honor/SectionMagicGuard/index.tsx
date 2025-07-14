"use client";

import React from "react";

function SectionMagicGuard(): React.ReactElement {
  return (
    <section className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-green-900 to-teal-900">
      <div className="text-center text-white max-w-4xl mx-auto px-8">
        <h2 className="text-6xl font-bold mb-8">MagicGuard 荣耀安全</h2>
        <p className="text-2xl text-green-200 mb-12">
          三重安全防护体系，守护您的数字生活
        </p>
        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-2">硬件安全</h3>
            <p className="text-green-200">芯片级安全防护</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-2">系统安全</h3>
            <p className="text-green-200">多层防护机制</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-2">应用安全</h3>
            <p className="text-green-200">智能威胁检测</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionMagicGuard;
