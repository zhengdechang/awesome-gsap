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
  <section :id="id" class="section">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <div class="modules-grid">
        <div
          v-for="module in modules"
          :key="module.id"
          class="module-card"
        >
          <!-- Module Header -->
          <div class="module-header">
            <h3>{{ module.name }}</h3>
            <div
              class="code-icon"
              @click="showCode(module.id)"
              title="View Code"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
          </div>

          <!-- Module Demo Area -->
          <div class="module-demo" :id="`${module.id}-demo`">
            <component
              :is="module.component"
              @run-demo="() => handleRunDemo(module.id)"
            />
          </div>

          <!-- Run Demo Button -->
          <button
            @click="handleRunDemo(module.id)"
            :disabled="runningModules.has(module.id)"
            class="demo-btn"
            :class="{ 'running': runningModules.has(module.id) }"
          >
            {{ runningModules.has(module.id) ? '✅ Running...' : 'Run Demo' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
