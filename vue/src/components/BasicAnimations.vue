<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const tweenBoxesRef = ref<HTMLElement[]>([])
const timelineBoxesRef = ref<HTMLElement[]>([])
const textRef = ref<HTMLElement>()

let ctx: gsap.Context

const setTweenBoxRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    tweenBoxesRef.value[index] = el
  }
}

const setTimelineBoxRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    timelineBoxesRef.value[index] = el
  }
}

const playBasicTweens = () => {
  // Reset positions first
  gsap.set(tweenBoxesRef.value, {
    scale: 1,
    rotation: 0,
    x: 0,
    y: 0
  })

  // Scale animation
  if (tweenBoxesRef.value[0]) {
    gsap.to(tweenBoxesRef.value[0], {
      scale: 1.5,
      duration: 1,
      ease: 'bounce.out',
      yoyo: true,
      repeat: 1
    })
  }

  // Rotation animation
  if (tweenBoxesRef.value[1]) {
    gsap.to(tweenBoxesRef.value[1], {
      rotation: 360,
      duration: 1,
      ease: 'power2.inOut',
      delay: 0.2
    })
  }

  // Movement animation
  if (tweenBoxesRef.value[2]) {
    gsap.to(tweenBoxesRef.value[2], {
      x: 100,
      y: -50,
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
      delay: 0.4,
      yoyo: true,
      repeat: 1
    })
  }
}

const playTimeline = () => {
  const tl = gsap.timeline()

  // Reset positions
  gsap.set(timelineBoxesRef.value, {
    scale: 1,
    rotation: 0,
    y: 0,
    opacity: 1
  })

  tl.from(timelineBoxesRef.value[0], {
    scale: 0,
    rotation: 180,
    duration: 0.5,
    ease: 'back.out(1.7)'
  })
  .from(timelineBoxesRef.value[1], {
    y: -100,
    opacity: 0,
    duration: 0.5,
    ease: 'bounce.out'
  }, '-=0.3')
  .from(timelineBoxesRef.value[2], {
    scale: 0,
    rotation: -180,
    duration: 0.5,
    ease: 'back.out(1.7)'
  }, '-=0.3')
  .from(timelineBoxesRef.value[3], {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: 'bounce.out'
  }, '-=0.3')
  .to(timelineBoxesRef.value, {
    rotation: 360,
    duration: 1,
    ease: 'power2.inOut',
    stagger: 0.1
  }, '+=0.5')
}

const playTextAnimation = () => {
  if (textRef.value) {
    const text = textRef.value.textContent || ''
    const chars = text.split('')
    
    textRef.value.innerHTML = chars.map(char => 
      char === ' ' ? '&nbsp;' : `<span class="char">${char}</span>`
    ).join('')

    const charElements = textRef.value.querySelectorAll('.char')

    gsap.fromTo(charElements, {
      opacity: 0,
      y: 50,
      rotation: 180
    }, {
      opacity: 1,
      y: 0,
      rotation: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.05
    })

    // Color animation
    gsap.to(charElements, {
      color: '#10B981',
      duration: 0.3,
      stagger: 0.05,
      delay: 1,
      yoyo: true,
      repeat: 1
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
  <section id="basic" class="py-20 min-h-screen">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-white text-center mb-16">
        Basic Animations
      </h2>

      <!-- Simple Tweens -->
      <div class="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-6">Simple Tweens</h3>
        <div class="flex justify-center items-center gap-8 mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
          <div 
            v-for="(label, index) in ['Scale', 'Rotate', 'Move']"
            :key="index"
            :ref="(el) => setTweenBoxRef(el as HTMLElement, index)"
            class="w-20 h-20 bg-green-400 rounded-xl flex items-center justify-center text-black font-bold cursor-pointer"
          >
            {{ label }}
          </div>
        </div>
        <button
          @click="playBasicTweens"
          class="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
        >
          Play Animation
        </button>
      </div>

      <!-- Timeline Example -->
      <div class="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-6">Timeline Sequence</h3>
        <div class="flex justify-center items-center gap-8 mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
          <div 
            v-for="num in [1, 2, 3, 4]"
            :key="num"
            :ref="(el) => setTimelineBoxRef(el as HTMLElement, num - 1)"
            class="w-20 h-20 bg-red-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl cursor-pointer"
          >
            {{ num }}
          </div>
        </div>
        <button
          @click="playTimeline"
          class="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
        >
          Play Timeline
        </button>
      </div>

      <!-- Text Animation -->
      <div class="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-6">Text Animation</h3>
        <div class="flex justify-center items-center mb-8 min-h-[200px] bg-black bg-opacity-20 rounded-xl p-8">
          <h2 
            ref="textRef"
            class="text-4xl font-bold text-white"
          >
            Hello GSAP World!
          </h2>
        </div>
        <button
          @click="playTextAnimation"
          class="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
        >
          Animate Text
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.char {
  display: inline-block;
}
</style>
