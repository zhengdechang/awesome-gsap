<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits<{
  runDemo: []
}>()

const textRef = ref<HTMLHeadingElement>()
const isAnimating = ref(false)

const runAnimation = () => {
  if (isAnimating.value || !textRef.value) return
  
  isAnimating.value = true
  const text = 'Hello GSAP World!'
  const chars = text.split('')
  
  textRef.value.innerHTML = chars.map(char => 
    char === ' ' ? '&nbsp;' : `<span class="inline-block">${char}</span>`
  ).join('')
  
  const charElements = textRef.value.querySelectorAll('span')
  
  gsap.fromTo(charElements, {
    opacity: 0,
    y: 50,
    rotation: 180,
    scale: 0
  }, {
    opacity: 1,
    y: 0,
    rotation: 0,
    scale: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.05,
    onComplete: () => {
      // Color wave animation
      gsap.to(charElements, {
        color: "#00ff88",
        duration: 0.3,
        stagger: 0.05,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          // Bounce effect
          gsap.to(charElements, {
            y: -10,
            duration: 0.2,
            stagger: 0.03,
            yoyo: true,
            repeat: 1,
            ease: "power2.out",
            onComplete: () => isAnimating.value = false
          })
        }
      })
    }
  })
  
  emit('runDemo')
}
</script>

<template>
  <div class="text-center">
    <h2 
      ref="textRef"
      :class="[
        'text-4xl font-bold text-white cursor-pointer transition-colors',
        isAnimating ? 'pointer-events-none' : 'hover:text-green-400'
      ]"
      @click="runAnimation"
    >
      Hello GSAP World!
    </h2>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
