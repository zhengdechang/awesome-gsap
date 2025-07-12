<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits<{
  runDemo: []
}>()

const cardsRef = ref<HTMLDivElement[]>([])

const runAnimation = () => {
  const cards = cardsRef.value.filter(Boolean)
  
  // Reset cards
  gsap.set(cards, {
    y: 50,
    opacity: 0,
    scale: 0.8
  })
  
  // Animate cards
  gsap.to(cards, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.2
  })
  
  emit('runDemo')
}
</script>

<template>
  <div class="w-full">
    <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
      <div
        v-for="(num, index) in [1, 2, 3, 4]"
        :key="num"
        :ref="el => cardsRef[index] = el as HTMLDivElement"
        class="h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white font-bold cursor-pointer hover:bg-white/20 transition-colors"
        @click="runAnimation"
      >
        Card {{ num }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
