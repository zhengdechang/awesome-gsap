<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits<{
  runDemo: []
}>()

// Reactive data
const firstName = ref('John')
const lastName = ref('Doe')
const items = ref([
  { name: 'Apple', price: 1.20, quantity: 3 },
  { name: 'Banana', price: 0.80, quantity: 5 },
  { name: 'Orange', price: 1.50, quantity: 2 }
])
const searchTerm = ref('')
const radius = ref(5)

// Computed properties
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

const totalPrice = computed(() => {
  return items.value.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0).toFixed(2)
})

const totalItems = computed(() => {
  return items.value.reduce((total, item) => {
    return total + item.quantity
  }, 0)
})

const filteredItems = computed(() => {
  if (!searchTerm.value) return items.value
  return items.value.filter(item => 
    item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

const circleArea = computed(() => {
  return (Math.PI * radius.value * radius.value).toFixed(2)
})

const circleCircumference = computed(() => {
  return (2 * Math.PI * radius.value).toFixed(2)
})

// Methods
const addItem = () => {
  const newItem = {
    name: `Item ${items.value.length + 1}`,
    price: Math.random() * 3 + 0.5,
    quantity: Math.floor(Math.random() * 5) + 1
  }
  newItem.price = parseFloat(newItem.price.toFixed(2))
  items.value.push(newItem)
  emit('runDemo')
}

const removeItem = (index: number) => {
  items.value.splice(index, 1)
  emit('runDemo')
}

const updateQuantity = (index: number, change: number) => {
  const newQuantity = items.value[index].quantity + change
  if (newQuantity >= 0) {
    items.value[index].quantity = newQuantity
    emit('runDemo')
  }
}
</script>

<template>
  <div class="vue-demo-container">
    <h4 class="demo-title">Computed Properties</h4>
    
    <!-- Name computation -->
    <div class="demo-section">
      <h5 class="section-label">Full Name Computation</h5>
      <div class="input-group">
        <input 
          v-model="firstName" 
          class="vue-input"
          placeholder="First Name"
        />
        <input 
          v-model="lastName" 
          class="vue-input"
          placeholder="Last Name"
        />
      </div>
      <p class="result-text"><strong>Full Name:</strong> {{ fullName }}</p>
    </div>
    
    <!-- Shopping cart computation -->
    <div class="demo-section">
      <h5 class="section-label">Shopping Cart Calculator</h5>
      <div class="cart-controls">
        <button @click="addItem" class="vue-button small">Add Random Item</button>
        <input 
          v-model="searchTerm" 
          class="vue-input small"
          placeholder="Search items..."
        />
      </div>
      
      <div class="cart-summary">
        <span><strong>Total Items:</strong> {{ totalItems }}</span>
        <span><strong>Total Price:</strong> ${{ totalPrice }}</span>
      </div>
      
      <div class="items-list">
        <div 
          v-for="(item, index) in filteredItems" 
          :key="index"
          class="cart-item"
        >
          <span class="item-name">{{ item.name }}</span>
          <span class="item-price">${{ item.price }}</span>
          <div class="quantity-controls">
            <button @click="updateQuantity(index, -1)" class="qty-btn">-</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button @click="updateQuantity(index, 1)" class="qty-btn">+</button>
          </div>
          <span class="item-total">${{ (item.price * item.quantity).toFixed(2) }}</span>
          <button @click="removeItem(index)" class="remove-btn">×</button>
        </div>
      </div>
    </div>
    
    <!-- Circle calculations -->
    <div class="demo-section">
      <h5 class="section-label">Circle Calculator</h5>
      <div class="circle-controls">
        <label class="range-label">Radius: {{ radius }}</label>
        <input 
          type="range" 
          v-model.number="radius" 
          min="1" 
          max="20" 
          class="range-input"
        />
      </div>
      <div class="circle-results">
        <span><strong>Area:</strong> {{ circleArea }} units²</span>
        <span><strong>Circumference:</strong> {{ circleCircumference }} units</span>
      </div>
      <div 
        class="circle-visual" 
        :style="{ 
          width: radius * 8 + 'px', 
          height: radius * 8 + 'px' 
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.vue-demo-container {
  @apply w-full max-w-3xl mx-auto;
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

.input-group {
  @apply flex gap-2 mb-2 flex-wrap;
}

.vue-input {
  @apply flex-1 min-w-32 px-3 py-2 bg-white/10 border border-white/30 rounded-md;
  @apply text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400;
}

.vue-input.small {
  @apply text-sm px-2 py-1;
}

.vue-button {
  @apply px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md;
  @apply font-medium transition-colors duration-200;
}

.vue-button.small {
  @apply px-3 py-1 text-sm;
}

.cart-controls {
  @apply flex gap-2 mb-3 items-center flex-wrap;
}

.cart-summary {
  @apply flex justify-between items-center p-2 bg-emerald-500/10 rounded-md mb-3;
  @apply text-emerald-400 font-semibold text-sm;
}

.items-list {
  @apply max-h-40 overflow-y-auto bg-black/20 rounded-md;
}

.cart-item {
  @apply flex items-center gap-2 p-2 border-b border-white/10 text-sm;
  @apply hover:bg-white/5 transition-colors;
}

.cart-item:last-child {
  @apply border-b-0;
}

.item-name {
  @apply flex-1 text-white font-medium min-w-20;
}

.item-price {
  @apply text-emerald-400 font-semibold min-w-12;
}

.quantity-controls {
  @apply flex items-center gap-1;
}

.qty-btn {
  @apply w-6 h-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full;
  @apply text-xs flex items-center justify-center transition-colors;
}

.quantity {
  @apply min-w-8 text-center font-semibold bg-white/10 px-2 py-1 rounded text-white;
}

.item-total {
  @apply text-emerald-400 font-semibold min-w-12 text-right;
}

.remove-btn {
  @apply w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full;
  @apply text-sm flex items-center justify-center transition-colors;
}

.circle-controls {
  @apply mb-3;
}

.range-label {
  @apply block mb-2 font-semibold text-emerald-400 text-sm;
}

.range-input {
  @apply w-full max-w-xs accent-emerald-500;
}

.circle-results {
  @apply flex gap-4 mb-3 text-sm flex-wrap;
}

.circle-results span {
  @apply bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded font-semibold;
}

.circle-visual {
  @apply bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mx-auto;
  @apply transition-all duration-300 shadow-lg;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
}

.result-text {
  @apply text-white/90 text-sm;
}
</style>
