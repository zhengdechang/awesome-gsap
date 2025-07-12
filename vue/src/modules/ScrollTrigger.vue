<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const emit = defineEmits<{
  runDemo: []
}>()

const scrollBoxRef = ref<HTMLDivElement>()
const triggerRef = ref<HTMLDivElement>()

let animation: gsap.core.Tween | null = null

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  if (scrollBoxRef.value && triggerRef.value) {
    animation = gsap.fromTo(scrollBoxRef.value, {
      scale: 0.5,
      rotation: 0,
      backgroundColor: "#ff6b6b"
    }, {
      scale: 1.2,
      rotation: 360,
      backgroundColor: "#00ff88",
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: triggerRef.value,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        toggleActions: "play none none reverse"
      }
    })
  }
})

onUnmounted(() => {
  if (animation) {
    animation.kill()
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

const runAnimation = () => {
  if (scrollBoxRef.value) {
    // Manual trigger animation for demo
    gsap.fromTo(scrollBoxRef.value, {
      scale: 0.5,
      rotation: 0,
      backgroundColor: "#ff6b6b"
    }, {
      scale: 1.2,
      rotation: 360,
      backgroundColor: "#00ff88",
      duration: 1,
      ease: "back.out(1.7)",
      yoyo: true,
      repeat: 1
    })
  }
  emit('runDemo')
}
</script>

<template>
  <div ref="triggerRef" class="flex justify-center items-center min-h-[150px]">
    <div 
      ref="scrollBoxRef"
      class="w-32 h-32 bg-red-400 rounded-2xl flex items-center justify-center text-white font-bold cursor-pointer transition-colors hover:bg-red-300 text-center"
      @click="runAnimation"
    >
      Scroll to animate
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
