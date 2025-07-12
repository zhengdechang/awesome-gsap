<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits<{
  runDemo: []
}>()

const hoverBoxRef = ref<HTMLDivElement>()
const clickBoxRef = ref<HTMLDivElement>()

const handleHoverEnter = () => {
  if (hoverBoxRef.value) {
    gsap.to(hoverBoxRef.value, {
      scale: 1.2,
      rotation: 15,
      backgroundColor: "#ff6b6b",
      duration: 0.3,
      ease: "back.out(1.7)"
    })
  }
}

const handleHoverLeave = () => {
  if (hoverBoxRef.value) {
    gsap.to(hoverBoxRef.value, {
      scale: 1,
      rotation: 0,
      backgroundColor: "#4ecdc4",
      duration: 0.3,
      ease: "power2.out"
    })
  }
}

const handleClick = () => {
  if (clickBoxRef.value) {
    gsap.to(clickBoxRef.value, {
      scale: 0.8,
      duration: 0.1,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        gsap.to(clickBoxRef.value, {
          rotation: "+=360",
          backgroundColor: "#00ff88",
          duration: 0.6,
          ease: "power2.out"
        })
      }
    })
  }
  emit('runDemo')
}

const runAnimation = () => {
  handleHoverEnter()
  setTimeout(() => {
    handleHoverLeave()
    setTimeout(() => {
      handleClick()
    }, 500)
  }, 1000)
}
</script>

<template>
  <div class="flex gap-6 justify-center items-center">
    <div 
      ref="hoverBoxRef"
      class="w-24 h-24 bg-teal-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer select-none shadow-lg text-center"
      @mouseenter="handleHoverEnter"
      @mouseleave="handleHoverLeave"
      @click="runAnimation"
    >
      Hover Me
    </div>
    <div 
      ref="clickBoxRef"
      class="w-24 h-24 bg-teal-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer select-none shadow-lg hover:scale-105 transition-transform text-center"
      @click="handleClick"
    >
      Click Me
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
