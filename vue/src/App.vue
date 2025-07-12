<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import BasicAnimations from './components/BasicAnimations.vue'
import ScrollAnimations from './components/ScrollAnimations.vue'
import InteractiveAnimations from './components/InteractiveAnimations.vue'
import AdvancedAnimations from './components/AdvancedAnimations.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800">
    <Navigation />
    <Hero />
    <BasicAnimations />
    <ScrollAnimations />
    <InteractiveAnimations />
    <AdvancedAnimations />
    <Footer />
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
