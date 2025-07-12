<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import ModuleSection from './components/ModuleSection.vue'
import CodeModal from './components/CodeModal.vue'
import Footer from './components/Footer.vue'

// Import all animation modules
import BasicAnimationsModule from './modules/BasicAnimations.vue'
import TimelineSequencesModule from './modules/TimelineSequences.vue'
import TextAnimationsModule from './modules/TextAnimations.vue'
import ScrollTriggerModule from './modules/ScrollTrigger.vue'
import ParallaxEffectsModule from './modules/ParallaxEffects.vue'
import CardRevealsModule from './modules/CardReveals.vue'
import HoverInteractionsModule from './modules/HoverInteractions.vue'
import MouseFollowModule from './modules/MouseFollow.vue'
import SvgPathModule from './modules/SvgPath.vue'
import ShapeMorphingModule from './modules/ShapeMorphing.vue'
import LoadingAnimationsModule from './modules/LoadingAnimations.vue'

onMounted(() => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin)

  // GSAP configuration
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false
  })

  console.log('🎬 GSAP Vue Modular Examples Loaded!')
})

const basicModules = [
  { id: 'basic-animations', name: 'Basic Tweens', component: BasicAnimationsModule },
  { id: 'timeline-sequences', name: 'Timeline Sequences', component: TimelineSequencesModule },
  { id: 'text-animations', name: 'Text Animations', component: TextAnimationsModule }
]

const scrollModules = [
  { id: 'scroll-trigger', name: 'ScrollTrigger', component: ScrollTriggerModule },
  { id: 'parallax-effects', name: 'Parallax Effects', component: ParallaxEffectsModule },
  { id: 'card-reveals', name: 'Card Reveals', component: CardRevealsModule }
]

const interactiveModules = [
  { id: 'hover-interactions', name: 'Hover Interactions', component: HoverInteractionsModule },
  { id: 'mouse-follow', name: 'Mouse Follow', component: MouseFollowModule }
]

const advancedModules = [
  { id: 'svg-path', name: 'SVG Path Animation', component: SvgPathModule },
  { id: 'shape-morphing', name: 'Shape Morphing', component: ShapeMorphingModule },
  { id: 'loading-animations', name: 'Loading Animations', component: LoadingAnimationsModule }
]
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <Navigation />
    <Hero />

    <ModuleSection
      id="basic"
      title="Basic Animations"
      :modules="basicModules"
    />

    <ModuleSection
      id="scroll"
      title="Scroll-Based Animations"
      :modules="scrollModules"
    />

    <ModuleSection
      id="interactive"
      title="Interactive Animations"
      :modules="interactiveModules"
    />

    <ModuleSection
      id="advanced"
      title="Advanced Animations"
      :modules="advancedModules"
    />

    <Footer />
    <CodeModal />
  </main>
</template>

<style scoped>
/* Vue specific styles can be added here if needed */
</style>
