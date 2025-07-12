import { ref } from 'vue'

const isOpen = ref(false)
const currentModule = ref<string | null>(null)

export function useCodeModal() {
  const showCode = (moduleId: string) => {
    currentModule.value = moduleId
    isOpen.value = true
  }

  const hideCode = () => {
    isOpen.value = false
    currentModule.value = null
  }

  return {
    isOpen,
    currentModule,
    showCode,
    hideCode
  }
}
