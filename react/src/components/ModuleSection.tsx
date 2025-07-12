'use client'

import { useState } from 'react'
import { useCodeModal } from '@/hooks/useCodeModal'

interface ModuleProps {
  id: string
  name: string
  component: React.ComponentType<{ onRunDemo: () => void }>
}

interface ModuleSectionProps {
  id: string
  title: string
  modules: ModuleProps[]
}

export default function ModuleSection({ id, title, modules }: ModuleSectionProps) {
  const { showCode } = useCodeModal()
  const [runningModules, setRunningModules] = useState<Set<string>>(new Set())

  const handleRunDemo = (moduleId: string, component: React.ComponentType<{ onRunDemo: () => void }>) => {
    if (runningModules.has(moduleId)) return

    setRunningModules(prev => new Set(prev).add(moduleId))
    
    // Create a temporary instance to run the demo
    const tempDiv = document.createElement('div')
    tempDiv.style.display = 'none'
    document.body.appendChild(tempDiv)
    
    try {
      // This is a simplified approach - in a real implementation,
      // you'd want to properly instantiate and run the component's animation
      console.log(`Running demo for ${moduleId}`)
      
      setTimeout(() => {
        setRunningModules(prev => {
          const newSet = new Set(prev)
          newSet.delete(moduleId)
          return newSet
        })
        document.body.removeChild(tempDiv)
      }, 3000)
    } catch (error) {
      console.error(`Error running demo for ${moduleId}:`, error)
      setRunningModules(prev => {
        const newSet = new Set(prev)
        newSet.delete(moduleId)
        return newSet
      })
      document.body.removeChild(tempDiv)
    }
  }

  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {title}
        </h2>
        <div className="space-y-6">
          {modules.map((module) => {
            const ModuleComponent = module.component
            const isRunning = runningModules.has(module.id)
            
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
                <div className="bg-black/20 rounded-xl p-8 mb-6 min-h-[150px] flex items-center justify-center">
                  <ModuleComponent 
                    onRunDemo={() => handleRunDemo(module.id, ModuleComponent)}
                  />
                </div>

                {/* Run Demo Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => handleRunDemo(module.id, ModuleComponent)}
                    disabled={isRunning}
                    className={`
                      px-6 py-3 rounded-full font-semibold text-white transition-all duration-300
                      ${isRunning 
                        ? 'bg-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg'
                      }
                    `}
                  >
                    {isRunning ? 'Running...' : 'Run Demo'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
