<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useCodeModal } from '@/composables/useCodeModal'
import { getModuleCode } from '@/utils/moduleCode'

const { isOpen, currentModule, hideCode } = useCodeModal()
const activeTab = ref<'html' | 'css' | 'js'>('html')
const code = ref({ html: '', css: '', js: '' })

watch([isOpen, currentModule], ([newIsOpen, newCurrentModule]) => {
  if (newIsOpen && newCurrentModule) {
    const moduleCode = getModuleCode(newCurrentModule)
    code.value = moduleCode
    activeTab.value = 'html'
  }
})

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    hideCode()
  }
}

watch(isOpen, (newIsOpen) => {
  if (newIsOpen) {
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = 'unset'
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = 'unset'
})

const handleBackdropClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) {
    hideCode()
  }
}

const formatModuleName = (moduleId: string) => {
  return moduleId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen && currentModule"
      class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      @click="handleBackdropClick"
    >
      <div class="bg-gray-900 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
        <!-- Modal Header -->
        <div class="flex justify-between items-center p-6 bg-gray-800 border-b border-gray-700">
          <h3 class="text-xl font-semibold text-white">
            {{ formatModuleName(currentModule) }} - Code
          </h3>
          <button
            @click="hideCode"
            class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors"
          >
            <svg
              class="w-5 h-5 text-gray-400 hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="flex flex-col h-[calc(90vh-80px)]">
          <!-- Code Tabs -->
          <div class="flex bg-gray-800 border-b border-gray-700">
            <button
              v-for="tab in ['html', 'css', 'js'] as const"
              :key="tab"
              @click="activeTab = tab"
              :class="[
                'px-6 py-3 font-medium transition-colors border-b-2',
                activeTab === tab
                  ? 'text-green-400 border-green-400 bg-gray-700'
                  : 'text-gray-400 border-transparent hover:text-white hover:bg-gray-700'
              ]"
            >
              {{ tab.toUpperCase() }}
            </button>
          </div>

          <!-- Code Content -->
          <div class="flex-1 overflow-auto">
            <pre class="p-6 text-sm text-gray-300 font-mono leading-relaxed whitespace-pre-wrap">
              <code>{{ code[activeTab] }}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
