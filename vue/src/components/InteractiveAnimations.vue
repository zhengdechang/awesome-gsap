<script setup lang="ts">
import { ref, reactive, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const hoverBox1Ref = ref<HTMLElement>()
const hoverBox2Ref = ref<HTMLElement>()
const mouseAreaRef = ref<HTMLElement>()
const followerRef = ref<HTMLElement>()

const trails = reactive<Array<{ id: number; x: number; y: number }>>([])

let ctx: gsap.Context

const handleHoverEnter1 = () => {
  if (hoverBox1Ref.value) {
    gsap.to(hoverBox1Ref.value, {
      scale: 1.2,
      rotation: 15,
      backgroundColor: '#EF4444',
      duration: 0.3,
      ease: 'back.out(1.7)'
    })
  }
}

const handleHoverLeave1 = () => {
  if (hoverBox1Ref.value) {
    gsap.to(hoverBox1Ref.value, {
      scale: 1,
      rotation: 0,
      backgroundColor: '#06B6D4',
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const handleClick2 = () => {
  if (hoverBox2Ref.value) {
    gsap.to(hoverBox2Ref.value, {
      scale: 0.8,
      duration: 0.1,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        gsap.to(hoverBox2Ref.value, {
          rotation: '+=360',
          duration: 0.5,
          ease: 'power2.out'
        })
      }
    })
  }
}

const handleHoverEnter2 = () => {
  if (hoverBox2Ref.value) {
    gsap.to(hoverBox2Ref.value, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const handleHoverLeave2 = () => {
  if (hoverBox2Ref.value) {
    gsap.to(hoverBox2Ref.value, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const handleMouseMove = (e: MouseEvent) => {
  if (mouseAreaRef.value && followerRef.value) {
    const rect = mouseAreaRef.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    gsap.to(followerRef.value, {
      x: x - 10,
      y: y - 10,
      duration: 0.3,
      ease: 'power2.out'
    })

    // Create trail effect
    const newTrail = { id: Date.now(), x, y }
    trails.push(newTrail)
    
    // Keep only last 10 trails
    if (trails.length > 10) {
      trails.shift()
    }

    // Remove trail after animation
    setTimeout(() => {
      const index = trails.findIndex(trail => trail.id === newTrail.id)
      if (index > -1) {
        trails.splice(index, 1)
      }
    }, 1000)
  }
}

const handleMouseEnterArea = () => {
  if (followerRef.value) {
    gsap.to(followerRef.value, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const handleMouseLeaveArea = () => {
  if (followerRef.value) {
    gsap.to(followerRef.value, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
  }
})
</script>

<template>
  <section id="interactive" class="py-20 min-h-screen">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-white text-center mb-16">
        Interactive Animations
      </h2>

      <!-- Hover Effects -->
      <div class="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-6">Hover Effects</h3>
        <div class="flex justify-center items-center gap-8 mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
          <div 
            ref="hoverBox1Ref"
            @mouseenter="handleHoverEnter1"
            @mouseleave="handleHoverLeave1"
            class="w-24 h-24 bg-cyan-400 rounded-xl flex items-center justify-center text-black font-bold cursor-pointer select-none"
          >
            Hover Me
          </div>
          <div 
            ref="hoverBox2Ref"
            @click="handleClick2"
            @mouseenter="handleHoverEnter2"
            @mouseleave="handleHoverLeave2"
            class="w-24 h-24 bg-cyan-400 rounded-xl flex items-center justify-center text-black font-bold cursor-pointer select-none"
          >
            Click Me
          </div>
        </div>
      </div>

      <!-- Mouse Follow -->
      <div class="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-6">Mouse Follow</h3>
        <div 
          ref="mouseAreaRef"
          @mousemove="handleMouseMove"
          @mouseenter="handleMouseEnterArea"
          @mouseleave="handleMouseLeaveArea"
          class="relative min-h-[300px] bg-black bg-opacity-20 rounded-xl p-8 cursor-none overflow-hidden"
        >
          <!-- Follower -->
          <div 
            ref="followerRef"
            class="absolute w-5 h-5 bg-green-400 rounded-full pointer-events-none z-10"
            style="transform: scale(0); opacity: 0;"
          />
          
          <!-- Trail dots -->
          <div
            v-for="trail in trails"
            :key="trail.id"
            class="absolute w-1 h-1 bg-green-400 rounded-full pointer-events-none animate-ping"
            :style="{
              left: trail.x - 2 + 'px',
              top: trail.y - 2 + 'px',
            }"
          />
          
          <p class="text-white text-center mt-32 pointer-events-none">
            Move your mouse in this area
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Component-specific styles */
</style>
