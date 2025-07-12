<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits<{
  runDemo: []
}>()

const containerRef = ref<HTMLDivElement>()
const bgRef = ref<HTMLDivElement>()
const contentRef = ref<HTMLDivElement>()

const runAnimation = () => {
  if (bgRef.value && contentRef.value) {
    const tl = gsap.timeline()
    
    tl.to(bgRef.value, {
      y: -20,
      duration: 1,
      ease: "power2.out"
    })
    .fromTo(contentRef.value, {
      y: 30,
      opacity: 0.5
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .to([bgRef.value, contentRef.value], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    })
  }
  emit('runDemo')
}
</script>

<template>
  <div 
    ref="containerRef"
    class="relative h-40 w-full overflow-hidden rounded-xl cursor-pointer"
    @click="runAnimation"
  >
    <div 
      ref="bgRef"
      class="absolute inset-0 bg-gradient-to-br from-red-400 to-blue-400 opacity-70 transform -translate-y-4"
    />
    <div 
      ref="contentRef"
      class="relative z-10 h-full flex flex-col items-center justify-center text-white text-center"
    >
      <h4 class="text-xl font-bold mb-2">Parallax Effect</h4>
      <p class="text-sm">Background moves differently</p>
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
