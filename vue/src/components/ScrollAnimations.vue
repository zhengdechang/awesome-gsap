<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement>()
const scrollBoxRef = ref<HTMLElement>()
const parallaxBgRef = ref<HTMLElement>()
const parallaxContentRef = ref<HTMLElement>()
const cardsRef = ref<HTMLElement[]>([])

let ctx: gsap.Context

const setCardRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    cardsRef.value[index] = el
  }
}

onMounted(() => {
  ctx = gsap.context(() => {
    // Scroll-triggered box animation
    if (scrollBoxRef.value) {
      gsap.fromTo(scrollBoxRef.value, {
        scale: 0.5,
        rotation: 0,
        backgroundColor: '#EF4444'
      }, {
        scale: 1.2,
        rotation: 360,
        backgroundColor: '#10B981',
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: scrollBoxRef.value,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      })
    }

    // Parallax background animation
    if (parallaxBgRef.value) {
      gsap.to(parallaxBgRef.value, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxBgRef.value.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }

    // Parallax content animation
    if (parallaxContentRef.value) {
      gsap.fromTo(parallaxContentRef.value, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: parallaxContentRef.value,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      })
    }

    // Card reveal animations
    cardsRef.value.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, {
          y: 100,
          opacity: 0,
          scale: 0.8
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.2
        })
      }
    })

    // Section title animation
    const sectionTitle = sectionRef.value?.querySelector('h2')
    if (sectionTitle) {
      gsap.fromTo(sectionTitle, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionTitle,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    }
  }, sectionRef.value)
})

onUnmounted(() => {
  if (ctx) {
    ctx.revert()
  }
})
</script>

<template>
  <section 
    id="scroll" 
    ref="sectionRef"
    class="py-20 min-h-screen bg-gradient-to-br from-purple-800 via-blue-800 to-purple-600"
  >
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-white text-center mb-16">
        ScrollTrigger Animations
      </h2>

      <!-- Scroll-triggered box -->
      <div class="mb-16 bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
        <h3 class="text-2xl font-semibold text-white mb-6">Scroll to Animate</h3>
        <div class="flex justify-center items-center min-h-[400px] bg-black bg-opacity-20 rounded-xl p-8">
          <div 
            ref="scrollBoxRef"
            class="w-48 h-48 rounded-2xl flex items-center justify-center font-bold text-white text-xl"
            style="background-color: #EF4444"
          >
            Scroll to animate
          </div>
        </div>
      </div>

      <!-- Parallax container -->
      <div class="mb-16 relative h-96 overflow-hidden rounded-2xl">
        <div 
          ref="parallaxBgRef"
          class="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-30"
          style="height: 120%; top: -10%"
        />
        <div 
          ref="parallaxContentRef"
          class="relative z-10 h-full flex flex-col items-center justify-center text-center text-white"
        >
          <h3 class="text-3xl font-bold mb-4">Parallax Effect</h3>
          <p class="text-lg">This background moves at a different speed</p>
        </div>
      </div>

      <!-- Reveal cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="num in [1, 2, 3, 4]"
          :key="num"
          :ref="(el) => setCardRef(el as HTMLElement, num - 1)"
          class="h-48 bg-white bg-opacity-10 rounded-2xl flex items-center justify-center text-white text-2xl font-bold backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer"
        >
          Card {{ num }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Component-specific styles */
</style>
