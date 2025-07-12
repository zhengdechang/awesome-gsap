# GSAP Examples - Vue 3

This directory contains comprehensive GSAP animation examples implemented using Vue 3 with Composition API, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
vue/
├── src/
│   ├── App.vue               # Main application component
│   ├── main.ts               # Application entry point
│   ├── assets/
│   │   └── main.css          # Global styles with Tailwind and GSAP customizations
│   ├── components/
│   │   ├── Navigation.vue    # Navigation with smooth scrolling
│   │   ├── Hero.vue          # Hero section with floating animations
│   │   ├── BasicAnimations.vue # Basic GSAP animation examples
│   │   ├── ScrollAnimations.vue # ScrollTrigger examples
│   │   ├── InteractiveAnimations.vue # Interactive hover/click effects
│   │   ├── AdvancedAnimations.vue # Advanced SVG and morphing animations
│   │   └── Footer.vue        # Footer component
│   ├── router/               # Vue Router configuration
│   └── stores/               # Pinia stores
├── public/                   # Static assets
├── package.json
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🎨 Animation Examples

### Basic Animations (`BasicAnimations.vue`)

- **Simple Tweens**: Scale, rotate, and move animations with Vue refs
- **Timeline Sequences**: Coordinated multi-element animations
- **Text Animations**: Character-by-character text effects with DOM manipulation

### ScrollTrigger Animations (`ScrollAnimations.vue`)

- **Scroll-triggered Animations**: Elements animate as they enter viewport
- **Parallax Effects**: Background elements move at different speeds
- **Card Reveals**: Staggered card animations on scroll
- **Section Transitions**: Smooth section-to-section animations

### Interactive Animations (`InteractiveAnimations.vue`)

- **Hover Effects**: Mouse enter/leave animations with Vue event handlers
- **Click Animations**: Button and element click responses
- **Mouse Follower**: Cursor following effects with reactive state
- **Trail Effects**: Dynamic trail creation and cleanup

### Advanced Animations (`AdvancedAnimations.vue`)

- **SVG Path Animations**: Elements following SVG paths
- **Morphing Animations**: Shape transformations
- **Loading Animations**: Creative loading indicators with reactive state
- **Complex Sequences**: Multi-element choreographed animations
