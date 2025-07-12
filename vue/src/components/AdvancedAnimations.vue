<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

// Register MotionPath plugin
gsap.registerPlugin(MotionPathPlugin)

const pathFollowerRef = ref<SVGCircleElement>()
const morphShapeRef = ref<SVGPathElement>()
const loaderDotsRef = ref<HTMLElement[]>([])
const isLoaderActive = ref(false)

let ctx: gsap.Context

const setLoaderDotRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    loaderDotsRef.value[index] = el
  }
}

const playPathAnimation = () => {
  if (pathFollowerRef.value) {
    // Reset position
    gsap.set(pathFollowerRef.value, { 
      motionPath: { path: '#motion-path', start: 0 }
    })
    
    // Animate along path
    gsap.to(pathFollowerRef.value, {
      motionPath: {
        path: '#motion-path',
        align: '#motion-path',
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      },
      duration: 3,
      ease: 'power2.inOut',
      repeat: 1,
      yoyo: true
    })
    
    // Add scale animation
    gsap.to(pathFollowerRef.value, {
      scale: 1.5,
      duration: 1.5,
      ease: 'sine.inOut',
      repeat: 1,
      yoyo: true
    })
  }
}

const playMorphAnimation = () => {
  if (morphShapeRef.value) {
    const shapes = [
      'M100,50 L150,150 L50,150 Z', // Triangle
      'M50,100 Q100,50 150,100 Q100,150 50,100', // Diamond-like
      'M100,50 A50,50 0 1,1 100,150 A50,50 0 1,1 100,50', // Circle
      'M50,75 L150,75 L150,125 L50,125 Z', // Rectangle
      'M100,50 L150,150 L50,150 Z' // Back to triangle
    ]
    
    const colors = ['#10B981', '#EF4444', '#06B6D4', '#8B5CF6', '#10B981']
    
    const tl = gsap.timeline()
    
    shapes.forEach((shape, index) => {
      tl.to(morphShapeRef.value, {
        attr: { d: shape },
        fill: colors[index],
        duration: 1,
        ease: 'power2.inOut'
      }, index * 1.2)
    })
  }
}

const toggleLoader = () => {
  if (!isLoaderActive.value) {
    startLoader()
  } else {
    stopLoader()
  }
  isLoaderActive.value = !isLoaderActive.value
}

const startLoader = () => {
  // Pulsing animation
  gsap.to(loaderDotsRef.value, {
    scale: 1.5,
    backgroundColor: '#EF4444',
    duration: 0.6,
    ease: 'power2.inOut',
    stagger: 0.2,
    repeat: -1,
    yoyo: true
  })
}

const stopLoader = () => {
  gsap.killTweensOf(loaderDotsRef.value)
  
  gsap.to(loaderDotsRef.value, {
    scale: 1,
    backgroundColor: '#10B981',
    duration: 0.3,
    ease: 'power2.out'
  })
}

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
  }
})
</script>

<template>
  <section id="advanced" class="py-20 min-h-screen">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-white text-center mb-16">
        Advanced Animations
      </h2>

      <!-- SVG Path Animation -->
      <div class="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-6">SVG Path Animation</h3>
        <div class="flex justify-center items-center mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
          <svg width="300" height="200" viewBox="0 0 300 200" class="overflow-visible">
            <path 
              id="motion-path" 
              d="M50,100 Q150,50 250,100" 
              stroke="#10B981" 
              stroke-width="2" 
              fill="none"
            />
            <circle 
              ref="pathFollowerRef"
              r="8" 
              fill="#EF4444"
            />
          </svg>
        </div>
        <button
          @click="playPathAnimation"
          class="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
        >
          Animate Path
        </button>
      </div>

      <!-- Morphing Animation -->
      <div class="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-6">Morphing Animation</h3>
        <div class="flex justify-center items-center mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <path 
              ref="morphShapeRef"
              d="M100,50 L150,150 L50,150 Z" 
              fill="#10B981"
            />
          </svg>
        </div>
        <button
          @click="playMorphAnimation"
          class="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
        >
          Morph Shape
        </button>
      </div>

      <!-- Loading Animation -->
      <div class="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-6">Loading Animation</h3>
        <div class="flex justify-center items-center mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
          <div class="flex gap-3">
            <div
              v-for="index in 3"
              :key="index"
              :ref="(el) => setLoaderDotRef(el as HTMLElement, index - 1)"
              class="w-5 h-5 bg-green-400 rounded-full"
            />
          </div>
        </div>
        <button
          @click="toggleLoader"
          class="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
        >
          {{ isLoaderActive ? 'Stop Loader' : 'Start Loader' }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Component-specific styles */
</style>
