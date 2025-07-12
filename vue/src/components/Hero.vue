<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const heroRef = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const subtitleRef = ref<HTMLElement>()
const floatingBoxesRef = ref<HTMLElement[]>([])

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    // Hero title animation
    if (titleRef.value) {
      gsap.fromTo(titleRef.value,
        { scale: 0, rotation: 180, opacity: 0 },
        { 
          scale: 1, 
          rotation: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: 'back.out(1.7)',
          delay: 1
        }
      )
    }

    // Subtitle animation
    if (subtitleRef.value) {
      gsap.fromTo(subtitleRef.value,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: 'power2.out',
          delay: 1.5
        }
      )
    }

    // Floating boxes animation
    floatingBoxesRef.value.forEach((box, index) => {
      if (box) {
        // Initial position
        gsap.set(box, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotation: Math.random() * 360,
          scale: Math.random() * 0.5 + 0.5
        })

        // Floating animation
        gsap.to(box, {
          y: `+=${Math.random() * 100 - 50}`,
          x: `+=${Math.random() * 60 - 30}`,
          rotation: `+=${Math.random() * 30 - 15}`,
          duration: Math.random() * 3 + 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.3
        })

        // Continuous floating
        gsap.to(box, {
          y: '+=20',
          duration: 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2
        })
      }
    })
  }, heroRef.value)
})

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
  }
})

const setFloatingBoxRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    floatingBoxesRef.value[index] = el
  }
}
</script>

<template>
  <section 
    id="hero"
    ref="heroRef"
    class="relative h-screen flex items-center justify-center text-center overflow-hidden"
  >
    <!-- Floating background elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        v-for="(_, index) in 6"
        :key="index"
        :ref="(el) => setFloatingBoxRef(el as HTMLElement, index)"
        class="absolute w-16 h-16 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }"
      />
    </div>

    <!-- Hero content -->
    <div class="relative z-10 max-w-4xl mx-auto px-6">
      <h1 
        ref="titleRef"
        class="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg"
      >
        Awesome GSAP
      </h1>
      <p 
        ref="subtitleRef"
        class="text-xl md:text-2xl text-white text-opacity-90 mb-8"
      >
        Vue 3 + Composition API Examples
      </p>
      
      <!-- Animated scroll indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div class="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white bg-opacity-70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Component-specific styles */
</style>
