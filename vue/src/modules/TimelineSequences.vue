<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits<{
  runDemo: []
}>()

const boxRefs = ref<HTMLDivElement[]>([])

const runAnimation = () => {
  const boxes = boxRefs.value.filter(Boolean)
  const tl = gsap.timeline()
  
  // Reset positions
  gsap.set(boxes, { scale: 1, rotation: 0, y: 0, opacity: 1 })
  
  tl.from(boxes[0], {
    scale: 0,
    rotation: 180,
    duration: 0.5,
    ease: "back.out(1.7)"
  })
  .from(boxes[1], {
    y: -100,
    opacity: 0,
    duration: 0.5,
    ease: "bounce.out"
  }, "-=0.3")
  .from(boxes[2], {
    scale: 0,
    rotation: -180,
    duration: 0.5,
    ease: "back.out(1.7)"
  }, "-=0.3")
  .from(boxes[3], {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "bounce.out"
  }, "-=0.3")
  .to(boxes, {
    rotation: 360,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.1
  }, "+=0.5")
  
  emit('runDemo')
}
</script>

<template>
  <div class="flex gap-4 justify-center items-center">
    <div
      v-for="(num, index) in [1, 2, 3, 4]"
      :key="num"
      :ref="el => boxRefs[index] = el as HTMLDivElement"
      class="w-20 h-20 bg-red-400 rounded-lg flex items-center justify-center text-white font-bold text-2xl cursor-pointer hover:bg-red-300 transition-colors"
      @click="runAnimation"
    >
      {{ num }}
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
