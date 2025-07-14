"use client";

import { useState, useEffect } from "react";
import { useCodeModal } from "@/hooks/useCodeModal";
import { getModuleCode } from "@/utils/moduleCode";

export default function CodeModal() {
  const { isOpen, currentModule, hideCode } = useCodeModal();
  const [code, setCode] = useState("");

  useEffect(() => {
    if (isOpen && currentModule) {
      const moduleCode = getModuleCode(currentModule);
      setCode(moduleCode);
    }
  }, [isOpen, currentModule]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        hideCode();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, hideCode]);

  if (!isOpen || !currentModule) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      hideCode();
    }
  };

  const formatModuleName = (moduleId: string) => {
    return moduleId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-900 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 bg-gray-800 border-b border-gray-700">
          <h3 className="text-xl font-semibold text-white">
            {formatModuleName(currentModule)} - React Component
          </h3>
          <button
            onClick={hideCode}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-400 hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col h-[calc(90vh-80px)]">
          {/* Code Content */}
          <div className="flex-1 overflow-auto">
            <pre className="p-6 text-sm text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
