<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits<{
  runDemo: []
}>()

const areaRef = ref<HTMLDivElement>()
const followerRef = ref<HTMLDivElement>()
const isActive = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  if (followerRef.value && areaRef.value) {
    const rect = areaRef.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    gsap.to(followerRef.value, {
      x: x - 10,
      y: y - 10,
      duration: 0.3,
      ease: "power2.out"
    })
  }
}

const handleMouseEnter = () => {
  isActive.value = true
  if (followerRef.value) {
    gsap.to(followerRef.value, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "back.out(1.7)"
    })
  }
}

const handleMouseLeave = () => {
  isActive.value = false
  if (followerRef.value) {
    gsap.to(followerRef.value, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    })
  }
}

const runAnimation = () => {
  if (followerRef.value && areaRef.value) {
    const centerX = areaRef.value.offsetWidth / 2
    const centerY = areaRef.value.offsetHeight / 2
    
    gsap.set(followerRef.value, { scale: 1, opacity: 1 })
    
    const tl = gsap.timeline()
    
    for (let i = 0; i <= 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const x = centerX + Math.cos(angle) * 40 - 10
      const y = centerY + Math.sin(angle) * 40 - 10
      
      tl.to(followerRef.value, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out"
      })
    }
    
    tl.to(followerRef.value, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    })
  }
  emit('runDemo')
}
</script>

<template>
  <div 
    ref="areaRef"
    :class="[
      'relative min-h-[150px] bg-black/20 rounded-xl flex items-center justify-center text-white/70 text-lg select-none',
      isActive ? 'cursor-none' : 'cursor-pointer'
    ]"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="runAnimation"
  >
    <div
      ref="followerRef"
      class="absolute w-5 h-5 bg-green-400 rounded-full pointer-events-none z-10 opacity-0 scale-0 shadow-lg"
      style="transform: translate(-50%, -50%)"
    />
    <p>Move your mouse here</p>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
