<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const emit = defineEmits<{
  runDemo: []
}>()

// Form data
const form = reactive({
  name: '',
  email: '',
  age: '',
  gender: '',
  interests: [] as string[],
  newsletter: false,
  message: ''
})

const errors = ref<Record<string, string>>({})
const submitted = ref(false)

// Computed validation
const isFormValid = computed(() => {
  return Object.keys(errors.value).length === 0 && 
         form.name.trim() && 
         form.email.trim() && 
         form.age
})

// Validation methods
const validateForm = () => {
  const newErrors: Record<string, string> = {}
  
  if (!form.name.trim()) {
    newErrors.name = 'Name is required'
  }
  
  if (!form.email.trim()) {
    newErrors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = 'Email is invalid'
  }
  
  if (!form.age) {
    newErrors.age = 'Age is required'
  } else if (parseInt(form.age) < 18) {
    newErrors.age = 'Must be 18 or older'
  }
  
  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

const validateField = (field: string) => {
  const newErrors = { ...errors.value }
  
  switch (field) {
    case 'name':
      if (!form.name.trim()) {
        newErrors.name = 'Name is required'
      } else {
        delete newErrors.name
      }
      break
    case 'email':
      if (!form.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        newErrors.email = 'Email is invalid'
      } else {
        delete newErrors.email
      }
      break
    case 'age':
      if (!form.age) {
        newErrors.age = 'Age is required'
      } else if (parseInt(form.age) < 18) {
        newErrors.age = 'Must be 18 or older'
      } else {
        delete newErrors.age
      }
      break
  }
  
  errors.value = newErrors
}

const submitForm = () => {
  if (validateForm()) {
    submitted.value = true
    console.log('Form submitted:', form)
    emit('runDemo')
  }
}

const resetForm = () => {
  Object.assign(form, {
    name: '',
    email: '',
    age: '',
    gender: '',
    interests: [],
    newsletter: false,
    message: ''
  })
  errors.value = {}
  submitted.value = false
  emit('runDemo')
}
</script>

<template>
  <div class="vue-demo-container">
    <h4 class="demo-title">Form Handling & Validation</h4>
    
    <div v-if="!submitted" class="form-container">
      <form @submit.prevent="submitForm" class="demo-form">
        <!-- Name Field -->
        <div class="form-group">
          <label class="form-label">Name *</label>
          <input 
            v-model="form.name" 
            @blur="validateField('name')"
            class="vue-input" 
            :class="{ error: errors.name }" 
            placeholder="Enter your name"
          />
          <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
        </div>
        
        <!-- Email Field -->
        <div class="form-group">
          <label class="form-label">Email *</label>
          <input 
            v-model="form.email" 
            @blur="validateField('email')"
            type="email" 
            class="vue-input" 
            :class="{ error: errors.email }" 
            placeholder="Enter your email"
          />
          <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
        </div>
        
        <!-- Age Field -->
        <div class="form-group">
          <label class="form-label">Age *</label>
          <input 
            v-model.number="form.age" 
            @blur="validateField('age')"
            type="number" 
            class="vue-input" 
            :class="{ error: errors.age }" 
            placeholder="Enter your age"
          />
          <span v-if="errors.age" class="error-text">{{ errors.age }}</span>
        </div>
        
        <!-- Gender Radio -->
        <div class="form-group">
          <label class="form-label">Gender</label>
          <div class="radio-group">
            <label class="radio-label">
              <input v-model="form.gender" type="radio" value="male" />
              <span>Male</span>
            </label>
            <label class="radio-label">
              <input v-model="form.gender" type="radio" value="female" />
              <span>Female</span>
            </label>
            <label class="radio-label">
              <input v-model="form.gender" type="radio" value="other" />
              <span>Other</span>
            </label>
          </div>
        </div>
        
        <!-- Interests Checkboxes -->
        <div class="form-group">
          <label class="form-label">Interests</label>
          <div class="checkbox-group">
            <label class="checkbox-label">
              <input v-model="form.interests" type="checkbox" value="coding" />
              <span>Coding</span>
            </label>
            <label class="checkbox-label">
              <input v-model="form.interests" type="checkbox" value="design" />
              <span>Design</span>
            </label>
            <label class="checkbox-label">
              <input v-model="form.interests" type="checkbox" value="music" />
              <span>Music</span>
            </label>
            <label class="checkbox-label">
              <input v-model="form.interests" type="checkbox" value="sports" />
              <span>Sports</span>
            </label>
          </div>
        </div>
        
        <!-- Newsletter Checkbox -->
        <div class="form-group">
          <label class="checkbox-label newsletter">
            <input v-model="form.newsletter" type="checkbox" />
            <span>Subscribe to newsletter</span>
          </label>
        </div>
        
        <!-- Message Textarea -->
        <div class="form-group">
          <label class="form-label">Message</label>
          <textarea 
            v-model="form.message" 
            class="vue-input textarea" 
            rows="3"
            placeholder="Optional message..."
          ></textarea>
        </div>
        
        <!-- Form Actions -->
        <div class="form-actions">
          <button 
            type="submit" 
            class="vue-button primary"
            :disabled="!isFormValid"
            :class="{ disabled: !isFormValid }"
          >
            Submit Form
          </button>
          <button 
            type="button" 
            @click="resetForm" 
            class="vue-button secondary"
          >
            Reset
          </button>
        </div>
        
        <!-- Form Preview -->
        <div class="form-preview">
          <h6>Live Preview:</h6>
          <div class="preview-content">
            <p><strong>Name:</strong> {{ form.name || 'Not entered' }}</p>
            <p><strong>Email:</strong> {{ form.email || 'Not entered' }}</p>
            <p><strong>Age:</strong> {{ form.age || 'Not entered' }}</p>
            <p><strong>Gender:</strong> {{ form.gender || 'Not selected' }}</p>
            <p><strong>Interests:</strong> {{ form.interests.length ? form.interests.join(', ') : 'None selected' }}</p>
            <p><strong>Newsletter:</strong> {{ form.newsletter ? 'Yes' : 'No' }}</p>
            <p><strong>Valid:</strong> 
              <span :class="isFormValid ? 'text-emerald-400' : 'text-red-400'">
                {{ isFormValid ? '✅ Valid' : '❌ Invalid' }}
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
    
    <!-- Success Message -->
    <div v-else class="success-message">
      <h5>✅ Form Submitted Successfully!</h5>
      <div class="submitted-data">
        <h6>Submitted Data:</h6>
        <pre>{{ JSON.stringify(form, null, 2) }}</pre>
      </div>
      <button @click="resetForm" class="vue-button primary">
        Submit Another Form
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

.form-container {
  @apply bg-white/5 rounded-lg p-4;
}

.demo-form {
  @apply space-y-4;
}

.form-group {
  @apply space-y-2;
}

.form-label {
  @apply block text-sm font-semibold text-emerald-400 uppercase tracking-wide;
}

.vue-input {
  @apply w-full px-3 py-2 bg-white/10 border border-white/30 rounded-md;
  @apply text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400;
  @apply transition-all duration-200;
}

.vue-input.error {
  @apply border-red-400 ring-2 ring-red-400/20;
}

.vue-input.textarea {
  @apply resize-none;
}

.error-text {
  @apply text-red-400 text-xs font-medium;
}

.radio-group, .checkbox-group {
  @apply flex flex-wrap gap-3;
}

.radio-label, .checkbox-label {
  @apply flex items-center gap-2 cursor-pointer text-white/90 text-sm;
  @apply hover:text-white transition-colors;
}

.checkbox-label.newsletter {
  @apply text-base;
}

.radio-label input, .checkbox-label input {
  @apply accent-emerald-500;
}

.form-actions {
  @apply flex gap-3 pt-4;
}

.vue-button {
  @apply px-6 py-2 rounded-md font-semibold transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.vue-button.primary {
  @apply bg-emerald-500 hover:bg-emerald-600 text-white;
  @apply focus:ring-emerald-400;
}

.vue-button.primary.disabled {
  @apply bg-gray-500 cursor-not-allowed opacity-50;
  @apply hover:bg-gray-500;
}

.vue-button.secondary {
  @apply bg-gray-600 hover:bg-gray-700 text-white;
  @apply focus:ring-gray-400;
}

.form-preview {
  @apply mt-6 p-4 bg-black/20 rounded-lg border border-white/10;
}

.form-preview h6 {
  @apply text-emerald-400 font-semibold mb-3 text-sm uppercase tracking-wide;
}

.preview-content {
  @apply space-y-1 text-sm;
}

.preview-content p {
  @apply text-white/90;
}

.success-message {
  @apply text-center bg-emerald-500/10 border-2 border-emerald-400 rounded-lg p-6;
}

.success-message h5 {
  @apply text-emerald-400 text-xl font-bold mb-4;
}

.submitted-data {
  @apply mb-4;
}

.submitted-data h6 {
  @apply text-emerald-400 font-semibold mb-2;
}

.submitted-data pre {
  @apply bg-black/30 p-3 rounded text-left text-xs text-white/90;
  @apply overflow-x-auto font-mono;
}
</style>
