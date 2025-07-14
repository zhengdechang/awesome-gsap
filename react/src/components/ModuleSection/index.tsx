/*
 * @Description:
 * @Author: Devin
 * @Date: 2025-07-14 10:23:35
 */
"use client";

import { useCodeModal } from "@/hooks/useCodeModal";

interface ModuleProps {
  id: string;
  name: string;
  component: React.ComponentType<{}>;
}

interface ModuleSectionProps {
  id: string;
  title: string;
  modules: ModuleProps[];
}

export default function ModuleSection({
  id,
  title,
  modules,
}: ModuleSectionProps) {
  const { showCode } = useCodeModal();

  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {title}
        </h2>
        <div className="space-y-6">
          {modules.map((module) => {
            const ModuleComponent = module.component;

            return (
              <div
                key={module.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Module Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    {module.name}
                  </h3>
                  <button
                    onClick={() => showCode(module.id)}
                    className="w-8 h-8 bg-white/10 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    title="View Code"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-white/70 hover:text-white"
                    >
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                    </svg>
                  </button>
                </div>

                {/* Module Demo Area */}
                <div className="bg-black/20 rounded-xl p-8 min-h-[150px] flex items-center justify-center">
                  <ModuleComponent />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
