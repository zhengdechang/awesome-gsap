<script setup lang="ts">
import { ref, reactive } from 'vue'

const emit = defineEmits<{
  runDemo: []
}>()

// Reactive primitive values using ref
const message = ref('Hello Vue.js!')
const count = ref(0)
const isVisible = ref(true)

// Reactive object using reactive
const user = reactive({
  name: 'Vue Developer',
  email: 'dev@vue.js',
  age: 25
})

// Methods
const increment = () => {
  count.value++
  emit('runDemo')
}

const decrement = () => {
  count.value--
  emit('runDemo')
}

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
  emit('runDemo')
}

const updateMessage = (event: Event) => {
  const target = event.target as HTMLInputElement
  message.value = target.value
  emit('runDemo')
}

const updateUserName = (event: Event) => {
  const target = event.target as HTMLInputElement
  user.name = target.value
  emit('runDemo')
}

const resetAll = () => {
  message.value = 'Hello Vue.js!'
  count.value = 0
  isVisible.value = true
  user.name = 'Vue Developer'
  user.email = 'dev@vue.js'
  user.age = 25
  emit('runDemo')
}
</script>

<template>
  <div class="vue-demo-container">
    <h4 class="demo-title">Reactive Data Binding</h4>
    
    <!-- Message binding -->
    <div class="demo-section">
      <h5 class="section-label">Text Binding (ref)</h5>
      <input 
        type="text" 
        :value="message" 
        @input="updateMessage"
        class="vue-input"
        placeholder="Type to update message"
      />
      <p class="result-text"><strong>Message:</strong> {{ message }}</p>
    </div>
    
    <!-- Counter -->
    <div class="demo-section">
      <h5 class="section-label">Counter (ref)</h5>
      <div class="counter-controls">
        <button @click="decrement" class="vue-button small">-</button>
        <span class="counter-display">{{ count }}</span>
        <button @click="increment" class="vue-button small">+</button>
      </div>
    </div>
    
    <!-- Conditional rendering -->
    <div class="demo-section">
      <h5 class="section-label">Conditional Rendering</h5>
      <button @click="toggleVisibility" class="vue-button">
        {{ isVisible ? 'Hide' : 'Show' }} Content
      </button>
      <Transition name="fade">
        <p v-if="isVisible" class="conditional-content">
          ✅ This content is conditionally rendered!
        </p>
      </Transition>
    </div>
    
    <!-- Object binding -->
    <div class="demo-section">
      <h5 class="section-label">Object Binding (reactive)</h5>
      <input 
        type="text" 
        :value="user.name" 
        @input="updateUserName"
        class="vue-input"
        placeholder="Update user name"
      />
      <div class="user-info">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Age:</strong> {{ user.age }}</p>
      </div>
    </div>
    
    <!-- Reset button -->
    <div class="demo-section">
      <button @click="resetAll" class="vue-button reset">
        Reset All
      </button>
    </div>
  </div>
</template>

<style scoped>
.vue-demo-container {
  @apply w-full max-w-2xl mx-auto;
}

.demo-title {
  @apply text-lg font-bold text-white mb-4 text-center;
}

.demo-section {
  @apply mb-4 p-3 bg-white/5 rounded-lg border-l-4 border-emerald-400;
}

.section-label {
  @apply text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wide;
}

.vue-input {
  @apply w-full max-w-xs px-3 py-2 bg-white/10 border border-white/30 rounded-md;
  @apply text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400;
  @apply mb-2;
}

.vue-button {
  @apply px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md;
  @apply font-medium transition-colors duration-200 mr-2;
}

.vue-button.small {
  @apply px-3 py-1 text-sm;
}

.vue-button.reset {
  @apply bg-red-500 hover:bg-red-600;
}

.counter-controls {
  @apply flex items-center gap-3;
}

.counter-display {
  @apply inline-block min-w-12 text-center font-bold text-lg;
  @apply bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-md;
}

.result-text {
  @apply text-white/90 text-sm;
}

.conditional-content {
  @apply text-emerald-400 mt-2 p-2 bg-emerald-500/10 rounded-md;
  @apply border border-emerald-500/30;
}

.user-info {
  @apply mt-2 space-y-1;
}

.user-info p {
  @apply text-white/90 text-sm bg-white/5 px-2 py-1 rounded;
}

/* Transition animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
