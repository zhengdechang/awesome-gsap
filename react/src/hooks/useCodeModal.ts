'use client'

import { create } from 'zustand'

interface CodeModalState {
  isOpen: boolean
  currentModule: string | null
  showCode: (moduleId: string) => void
  hideCode: () => void
}

export const useCodeModal = create<CodeModalState>((set) => ({
  isOpen: false,
  currentModule: null,
  showCode: (moduleId: string) => set({ isOpen: true, currentModule: moduleId }),
  hideCode: () => set({ isOpen: false, currentModule: null }),
}))
