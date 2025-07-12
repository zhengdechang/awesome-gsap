<script setup lang="ts">
import { ref, provide, inject } from 'vue'

const emit = defineEmits<{
  runDemo: []
}>()

// Parent component data
const parentMessage = ref('Hello from Parent!')
const childMessages = ref<Array<{id: number, text: string, timestamp: string}>>([])
const selectedTheme = ref('light')
const counter = ref(0)

// Provide data for child components
provide('theme', selectedTheme)
provide('parentCounter', counter)

// Methods
const handleChildMessage = (message: string) => {
  childMessages.value.unshift({
    id: Date.now(),
    text: message,
    timestamp: new Date().toLocaleTimeString()
  })
  emit('runDemo')
}

const clearMessages = () => {
  childMessages.value = []
  emit('runDemo')
}

const incrementCounter = () => {
  counter.value++
  emit('runDemo')
}

const resetCounter = () => {
  counter.value = 0
  emit('runDemo')
}
</script>

<template>
  <div class="vue-demo-container">
    <h4 class="demo-title">Component Communication</h4>
    
    <!-- Parent Component Controls -->
    <div class="demo-section parent-section">
      <h5 class="section-label">Parent Component</h5>
      <div class="parent-controls">
        <input 
          v-model="parentMessage"
          class="vue-input"
          placeholder="Message to send to children"
        />
        <div class="parent-info">
          <span>Counter: {{ counter }}</span>
          <span>Theme: {{ selectedTheme }}</span>
          <span>Messages: {{ childMessages.length }}</span>
        </div>
      </div>
    </div>
    
    <!-- Child Components -->
    <div class="demo-section">
      <h5 class="section-label">Child Components</h5>
      <div class="components-grid">
        <!-- Message Display Child -->
        <MessageDisplay 
          :message="parentMessage"
          :theme="selectedTheme"
          @send-message="handleChildMessage"
        />
        
        <!-- Counter Display Child -->
        <CounterDisplay 
          :count="counter"
          :theme="selectedTheme"
          @increment="incrementCounter"
          @reset="resetCounter"
        />
        
        <!-- Theme Selector Child -->
        <ThemeSelector 
          :current-theme="selectedTheme"
          @theme-change="selectedTheme = $event"
        />
      </div>
    </div>
    
    <!-- Message Log -->
    <div class="demo-section" v-if="childMessages.length > 0">
      <h5 class="section-label">Messages from Children</h5>
      <div class="message-log">
        <div class="log-header">
          <span>Messages ({{ childMessages.length }})</span>
          <button @click="clearMessages" class="vue-button small">Clear</button>
        </div>
        <div class="messages">
          <div 
            v-for="msg in childMessages.slice(0, 5)" 
            :key="msg.id"
            class="message-item"
          >
            <span class="message-time">{{ msg.timestamp }}</span>
            <span class="message-text">{{ msg.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Child Components -->
<script lang="ts">
import { defineComponent, ref, inject } from 'vue'

// Message Display Child Component
const MessageDisplay = defineComponent({
  name: 'MessageDisplay',
  props: {
    message: String,
    theme: String
  },
  emits: ['send-message'],
  setup(props, { emit }) {
    const localMessage = ref('')
    
    const sendMessage = () => {
      if (localMessage.value.trim()) {
        emit('send-message', localMessage.value)
        localMessage.value = ''
      }
    }
    
    return {
      localMessage,
      sendMessage
    }
  },
  template: `
    <div class="child-component message-display" :class="theme">
      <h6>Message Display</h6>
      <div class="received-message">
        <strong>From Parent:</strong> {{ message }}
      </div>
      <div class="send-message">
        <input 
          v-model="localMessage"
          @keyup.enter="sendMessage"
          class="vue-input small"
          placeholder="Send to parent..."
        />
        <button @click="sendMessage" class="vue-button small">Send</button>
      </div>
    </div>
  `
})

// Counter Display Child Component
const CounterDisplay = defineComponent({
  name: 'CounterDisplay',
  props: {
    count: Number,
    theme: String
  },
  emits: ['increment', 'reset'],
  setup(props, { emit }) {
    const localCount = ref(0)
    const injectedCounter = inject('parentCounter', ref(0))
    
    const incrementLocal = () => {
      localCount.value++
    }
    
    const incrementParent = () => {
      emit('increment')
    }
    
    const resetBoth = () => {
      localCount.value = 0
      emit('reset')
    }
    
    return {
      localCount,
      injectedCounter,
      incrementLocal,
      incrementParent,
      resetBoth
    }
  },
  template: `
    <div class="child-component counter-display" :class="theme">
      <h6>Counter Component</h6>
      <div class="counter-info">
        <div class="counter-item">
          <span>Parent:</span>
          <span class="counter-value">{{ count }}</span>
        </div>
        <div class="counter-item">
          <span>Local:</span>
          <span class="counter-value">{{ localCount }}</span>
        </div>
        <div class="counter-item">
          <span>Injected:</span>
          <span class="counter-value">{{ injectedCounter }}</span>
        </div>
      </div>
      <div class="counter-controls">
        <button @click="incrementParent" class="vue-button small">+Parent</button>
        <button @click="incrementLocal" class="vue-button small">+Local</button>
        <button @click="resetBoth" class="vue-button small reset">Reset</button>
      </div>
    </div>
  `
})

// Theme Selector Child Component
const ThemeSelector = defineComponent({
  name: 'ThemeSelector',
  props: {
    currentTheme: String
  },
  emits: ['theme-change'],
  setup(props, { emit }) {
    const themes = ref([
      { value: 'light', label: 'Light', color: '#f8f9fa' },
      { value: 'dark', label: 'Dark', color: '#343a40' },
      { value: 'vue', label: 'Vue', color: '#42b883' },
      { value: 'purple', label: 'Purple', color: '#6f42c1' }
    ])
    
    const injectedTheme = inject('theme', ref('light'))
    
    const selectTheme = (theme: string) => {
      emit('theme-change', theme)
    }
    
    return {
      themes,
      injectedTheme,
      selectTheme
    }
  },
  template: `
    <div class="child-component theme-selector" :class="currentTheme">
      <h6>Theme Selector</h6>
      <div class="theme-info">
        <span>Current: {{ currentTheme }}</span>
        <span>Injected: {{ injectedTheme }}</span>
      </div>
      <div class="theme-options">
        <button 
          v-for="theme in themes"
          :key="theme.value"
          @click="selectTheme(theme.value)"
          class="theme-btn"
          :class="{ active: currentTheme === theme.value }"
          :style="{ backgroundColor: theme.color }"
        >
          {{ theme.label }}
        </button>
      </div>
    </div>
  `
})

export default {
  components: {
    MessageDisplay,
    CounterDisplay,
    ThemeSelector
  }
}
</script>

<style scoped>
.vue-demo-container {
  @apply w-full max-w-4xl mx-auto;
}

.demo-title {
  @apply text-lg font-bold text-white mb-4 text-center;
}

.demo-section {
  @apply mb-4 p-3 bg-white/5 rounded-lg border-l-4 border-emerald-400;
}

.parent-section {
  @apply bg-emerald-500/10 border-emerald-400;
}

.section-label {
  @apply text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wide;
}

.parent-controls {
  @apply flex flex-col gap-3;
}

.parent-info {
  @apply flex gap-3 flex-wrap;
}

.parent-info span {
  @apply bg-white/10 px-2 py-1 rounded text-sm font-semibold text-white;
}

.components-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-3;
}

.child-component {
  @apply bg-white/5 border border-white/20 rounded-lg p-3 transition-all;
  @apply hover:bg-white/10 hover:-translate-y-1;
}

.child-component h6 {
  @apply text-emerald-400 font-semibold text-sm mb-2 uppercase tracking-wide;
  @apply border-b border-emerald-400/30 pb-1;
}

.received-message {
  @apply bg-emerald-500/10 p-2 rounded mb-2 text-sm;
  @apply border-l-2 border-emerald-400;
}

.send-message {
  @apply flex gap-1;
}

.counter-info {
  @apply mb-2;
}

.counter-item {
  @apply flex justify-between items-center p-1 mb-1 bg-white/5 rounded text-sm;
}

.counter-value {
  @apply bg-emerald-500 text-white px-2 py-1 rounded-full font-bold min-w-8 text-center;
}

.counter-controls {
  @apply flex gap-1 flex-wrap;
}

.theme-info {
  @apply mb-2 text-xs text-white/70;
}

.theme-info span {
  @apply block;
}

.theme-options {
  @apply grid grid-cols-2 gap-1;
}

.theme-btn {
  @apply px-2 py-1 rounded text-white text-xs font-semibold;
  @apply transition-all opacity-70 hover:opacity-90;
}

.theme-btn.active {
  @apply opacity-100 scale-105 ring-2 ring-white;
}

.vue-input {
  @apply px-3 py-2 bg-white/10 border border-white/30 rounded-md;
  @apply text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400;
}

.vue-input.small {
  @apply px-2 py-1 text-sm flex-1;
}

.vue-button {
  @apply px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md;
  @apply font-medium transition-colors duration-200;
}

.vue-button.small {
  @apply px-2 py-1 text-xs;
}

.vue-button.reset {
  @apply bg-red-500 hover:bg-red-600;
}

.message-log {
  @apply bg-black/20 rounded-lg overflow-hidden;
}

.log-header {
  @apply bg-emerald-500/20 p-2 flex justify-between items-center;
  @apply text-emerald-400 font-semibold text-sm;
}

.messages {
  @apply max-h-32 overflow-y-auto;
}

.message-item {
  @apply flex gap-3 p-2 border-b border-white/10 text-sm;
  animation: slideInRight 0.3s ease-out;
}

.message-item:last-child {
  @apply border-b-0;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.message-time {
  @apply text-white/60 font-mono text-xs min-w-20;
}

.message-text {
  @apply text-white flex-1;
}
</style>
