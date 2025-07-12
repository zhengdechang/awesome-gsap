<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits<{
  runDemo: []
}>()

const scaleRef = ref<HTMLDivElement>()
const rotateRef = ref<HTMLDivElement>()
const moveRef = ref<HTMLDivElement>()

const runAnimation = () => {
  // Reset all boxes
  gsap.set([scaleRef.value, rotateRef.value, moveRef.value], { 
    scale: 1, rotation: 0, x: 0, y: 0 
  })
  
  // Scale animation
  gsap.to(scaleRef.value, {
    scale: 1.5,
    duration: 1,
    ease: "bounce.out",
    yoyo: true,
    repeat: 1
  })
  
  // Rotation animation
  gsap.to(rotateRef.value, {
    rotation: 360,
    duration: 1,
    ease: "power2.inOut",
    delay: 0.2
  })
  
  // Movement animation
  gsap.to(moveRef.value, {
    x: 50,
    y: -30,
    duration: 1,
    ease: "elastic.out(1, 0.3)",
    delay: 0.4,
    yoyo: true,
    repeat: 1
  })
  
  emit('runDemo')
}
</script>

<template>
  <div class="flex gap-4 justify-center items-center">
    <div 
      ref="scaleRef"
      class="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer hover:bg-green-300 transition-colors"
      @click="runAnimation"
    >
      Scale
    </div>
    <div 
      ref="rotateRef"
      class="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer hover:bg-green-300 transition-colors"
      @click="runAnimation"
    >
      Rotate
    </div>
    <div 
      ref="moveRef"
      class="w-20 h-20 bg-green-400 rounded-lg flex items-center justify-center text-gray-800 font-bold cursor-pointer hover:bg-green-300 transition-colors"
      @click="runAnimation"
    >
      Move
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
