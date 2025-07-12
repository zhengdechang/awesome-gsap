<script setup lang="ts">
import { ref } from 'vue'
import { useCodeModal } from '@/composables/useCodeModal'

interface ModuleProps {
  id: string
  name: string
  component: any
}

interface Props {
  id: string
  title: string
  modules: ModuleProps[]
}

defineProps<Props>()

const { showCode } = useCodeModal()
const runningModules = ref<Set<string>>(new Set())

const handleRunDemo = (moduleId: string) => {
  if (runningModules.value.has(moduleId)) return

  runningModules.value.add(moduleId)
  
  try {
    console.log(`Running demo for ${moduleId}`)
    
    setTimeout(() => {
      runningModules.value.delete(moduleId)
    }, 3000)
  } catch (error) {
    console.error(`Error running demo for ${moduleId}:`, error)
    runningModules.value.delete(moduleId)
  }
}
</script>

<template>
  <section :id="id" class="py-20">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-white mb-12">
        {{ title }}
      </h2>
      <div class="space-y-6">
        <div
          v-for="module in modules"
          :key="module.id"
          class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <!-- Module Header -->
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-semibold text-white">
              {{ module.name }}
            </h3>
            <button
              @click="showCode(module.id)"
              class="w-8 h-8 bg-white/10 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              title="View Code"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 text-white/70 hover:text-white"
              >
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
              </svg>
            </button>
          </div>

          <!-- Module Demo Area -->
          <div class="bg-black/20 rounded-xl p-8 mb-6 min-h-[150px] flex items-center justify-center">
            <component 
              :is="module.component" 
              @run-demo="() => handleRunDemo(module.id)"
            />
          </div>

          <!-- Run Demo Button -->
          <div class="flex justify-center">
            <button
              @click="handleRunDemo(module.id)"
              :disabled="runningModules.has(module.id)"
              :class="[
                'px-6 py-3 rounded-full font-semibold text-white transition-all duration-300',
                runningModules.has(module.id) 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg'
              ]"
            >
              {{ runningModules.has(module.id) ? 'Running...' : 'Run Demo' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
