// Module code examples for Vue components

interface ModuleCode {
  html: string
  css: string
  js: string
}

const moduleCodeMap: Record<string, ModuleCode> = {
  'basic-animations': {
    html: `<!-- Basic Animations Vue Component -->
<div class="flex gap-4 justify-center items-center">
  <div ref="scaleRef" class="tween-box" @click="runAnimation">Scale</div>
  <div ref="rotateRef" class="tween-box" @click="runAnimation">Rotate</div>
  <div ref="moveRef" class="tween-box" @click="runAnimation">Move</div>
</div>`,
    
    css: `/* Basic Animations CSS */
.tween-box {
  width: 80px;
  height: 80px;
  background: #00ff88;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s;
}

.tween-box:hover {
  background: #00e67a;
}`,
    
    js: `// Basic Animations Vue Component
<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits<{
  runDemo: []
}>()

const scaleRef = ref<HTMLDivElement>()
const rotateRef = ref<HTMLDivElement>()
const moveRef = ref<HTMLDivElement>()

const runAnimation = () => {
  // Reset all boxes
  gsap.set([scaleRef.value, rotateRef.value, moveRef.value], { 
    scale: 1, rotation: 0, x: 0, y: 0 
  })
  
  // Scale animation
  gsap.to(scaleRef.value, {
    scale: 1.5,
    duration: 1,
    ease: "bounce.out",
    yoyo: true,
    repeat: 1
  })
  
  // Rotation animation
  gsap.to(rotateRef.value, {
    rotation: 360,
    duration: 1,
    ease: "power2.inOut",
    delay: 0.2
  })
  
  // Movement animation
  gsap.to(moveRef.value, {
    x: 50,
    y: -30,
    duration: 1,
    ease: "elastic.out(1, 0.3)",
    delay: 0.4,
    yoyo: true,
    repeat: 1
  })
  
  emit('runDemo')
}
</script>

<template>
  <div class="flex gap-4 justify-center items-center">
    <div 
      ref="scaleRef"
      class="tween-box"
      @click="runAnimation"
    >
      Scale
    </div>
    <div 
      ref="rotateRef"
      class="tween-box"
      @click="runAnimation"
    >
      Rotate
    </div>
    <div 
      ref="moveRef"
      class="tween-box"
      @click="runAnimation"
    >
      Move
    </div>
  </div>
</template>`
  },

  'timeline-sequences': {
    html: `<!-- Timeline Sequences Vue Component -->
<div class="flex gap-4 justify-center items-center">
  <div v-for="num in [1, 2, 3, 4]" :key="num" class="timeline-box">{{ num }}</div>
</div>`,
    
    css: `/* Timeline Sequences CSS */
.timeline-box {
  width: 80px;
  height: 80px;
  background: #ff6b6b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.timeline-box:hover {
  background: #ff5252;
}`,
    
    js: `// Timeline Sequences Vue Component
<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits<{
  runDemo: []
}>()

const boxRefs = ref<HTMLDivElement[]>([])

const runAnimation = () => {
  const boxes = boxRefs.value
  const tl = gsap.timeline()
  
  // Reset positions
  gsap.set(boxes, { scale: 1, rotation: 0, y: 0, opacity: 1 })
  
  tl.from(boxes[0], {
    scale: 0,
    rotation: 180,
    duration: 0.5,
    ease: "back.out(1.7)"
  })
  .from(boxes[1], {
    y: -100,
    opacity: 0,
    duration: 0.5,
    ease: "bounce.out"
  }, "-=0.3")
  .from(boxes[2], {
    scale: 0,
    rotation: -180,
    duration: 0.5,
    ease: "back.out(1.7)"
  }, "-=0.3")
  .from(boxes[3], {
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "bounce.out"
  }, "-=0.3")
  .to(boxes, {
    rotation: 360,
    duration: 1,
    ease: "power2.inOut",
    stagger: 0.1
  }, "+=0.5")
  
  emit('runDemo')
}
</script>

<template>
  <div class="flex gap-4 justify-center items-center">
    <div
      v-for="(num, index) in [1, 2, 3, 4]"
      :key="num"
      :ref="el => boxRefs[index] = el as HTMLDivElement"
      class="timeline-box"
      @click="runAnimation"
    >
      {{ num }}
    </div>
  </div>
</template>`
  }
}

export function getModuleCode(moduleId: string): ModuleCode {
  return moduleCodeMap[moduleId] || {
    html: '<!-- Code not available -->',
    css: '/* Code not available */',
    js: '// Code not available'
  }
}
