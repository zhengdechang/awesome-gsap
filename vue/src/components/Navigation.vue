<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin)

const navRef = ref<HTMLElement>()
const isScrolled = ref(false)

const handleScroll = () => {
  const scrolled = window.scrollY > 100
  isScrolled.value = scrolled
  
  if (navRef.value) {
    if (scrolled) {
      gsap.to(navRef.value, {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        duration: 0.3,
        ease: 'power2.out'
      })
    } else {
      gsap.to(navRef.value, {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: element,
        offsetY: 80
      },
      ease: 'power2.inOut'
    })
  }
}

const navItems = [
  { id: 'basic', label: 'Basic' },
  { id: 'scroll', label: 'ScrollTrigger' },
  { id: 'interactive', label: 'Interactive' },
  { id: 'advanced', label: 'Advanced' }
]

onMounted(() => {
  // Initial animation
  if (navRef.value) {
    gsap.fromTo(navRef.value, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
    )
  }
  
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    ref="navRef"
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :style="{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(5px)'
    }"
  >
    <div class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <h1 
          class="text-2xl font-bold text-white cursor-pointer"
          @click="scrollToSection('hero')"
        >
          GSAP Examples
        </h1>
        
        <ul class="hidden md:flex space-x-8">
          <li v-for="item in navItems" :key="item.id">
            <button
              @click="scrollToSection(item.id)"
              class="text-white hover:text-green-400 transition-colors duration-300 font-medium"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>

        <!-- Mobile menu button -->
        <button class="md:hidden text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Component-specific styles */
</style>
