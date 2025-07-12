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

// Import Vue.js feature modules
import ReactiveDataModule from './modules/ReactiveData.vue'
import ComputedPropertiesModule from './modules/ComputedProperties.vue'
import ComponentCommunicationModule from './modules/ComponentCommunication.vue'
import FormHandlingModule from './modules/FormHandling.vue'

// Import GSAP animation modules
import BasicAnimationsModule from './modules/BasicAnimations.vue'
import TimelineSequencesModule from './modules/TimelineSequences.vue'
import TextAnimationsModule from './modules/TextAnimations.vue'
import ScrollTriggerModule from './modules/ScrollTrigger.vue'
import ParallaxEffectsModule from './modules/ParallaxEffects.vue'
import CardRevealsModule from './modules/CardReveals.vue'
import HoverInteractionsModule from './modules/HoverInteractions.vue'
import MouseFollowModule from './modules/MouseFollow.vue'

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
  { id: 'reactive-data', name: 'Reactive Data', component: ReactiveDataModule },
  { id: 'computed-properties', name: 'Computed Properties', component: ComputedPropertiesModule },
  { id: 'basic-animations', name: 'Basic Tweens', component: BasicAnimationsModule }
]

const scrollModules = [
  { id: 'component-communication', name: 'Component Communication', component: ComponentCommunicationModule },
  { id: 'scroll-trigger', name: 'ScrollTrigger', component: ScrollTriggerModule },
  { id: 'parallax-effects', name: 'Parallax Effects', component: ParallaxEffectsModule }
]

const interactiveModules = [
  { id: 'timeline-sequences', name: 'Timeline Sequences', component: TimelineSequencesModule },
  { id: 'hover-interactions', name: 'Hover Interactions', component: HoverInteractionsModule },
  { id: 'mouse-follow', name: 'Mouse Follow', component: MouseFollowModule }
]

const advancedModules = [
  { id: 'form-handling', name: 'Form Handling', component: FormHandlingModule },
  { id: 'text-animations', name: 'Text Animations', component: TextAnimationsModule },
  { id: 'card-reveals', name: 'Card Reveals', component: CardRevealsModule }
]
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
    <Navigation />
    <Hero />

    <ModuleSection
      id="basic"
      title="Basic Vue.js Features"
      :modules="basicModules"
    />

    <ModuleSection
      id="scroll"
      title="Component Features"
      :modules="scrollModules"
    />

    <ModuleSection
      id="interactive"
      title="Advanced Features"
      :modules="interactiveModules"
    />

    <ModuleSection
      id="advanced"
      title="Forms & Interactions"
      :modules="advancedModules"
    />

    <Footer />
    <CodeModal />
  </main>
</template>

<style scoped>
/* Vue specific styles can be added here if needed */
</style>
