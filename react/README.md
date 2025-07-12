# GSAP Examples - React + Next.js

This directory contains comprehensive GSAP animation examples implemented using React and Next.js with TypeScript and Tailwind CSS.

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

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
react/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles with GSAP customizations
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Main page component
│   ├── components/
│   │   ├── Navigation.tsx     # Navigation with smooth scrolling
│   │   ├── Hero.tsx           # Hero section with floating animations
│   │   ├── BasicAnimations.tsx # Basic GSAP animation examples
│   │   ├── ScrollAnimations.tsx # ScrollTrigger examples
│   │   ├── InteractiveAnimations.tsx # Interactive hover/click effects
│   │   ├── AdvancedAnimations.tsx # Advanced SVG and morphing animations
│   │   └── Footer.tsx         # Footer component
│   ├── hooks/                 # Custom React hooks (future use)
│   └── utils/                 # Utility functions (future use)
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🎨 Animation Examples

### Basic Animations (`BasicAnimations.tsx`)

- **Simple Tweens**: Scale, rotate, and move animations with React refs
- **Timeline Sequences**: Coordinated multi-element animations
- **Text Animations**: Character-by-character text effects with DOM manipulation

### ScrollTrigger Animations (`ScrollAnimations.tsx`)

- **Scroll-triggered Animations**: Elements animate as they enter viewport
- **Parallax Effects**: Background elements move at different speeds
- **Card Reveals**: Staggered card animations on scroll
- **Section Transitions**: Smooth section-to-section animations

### Interactive Animations (`InteractiveAnimations.tsx`)

- **Hover Effects**: Mouse enter/leave animations with React event handlers
- **Click Animations**: Button and element click responses
- **Mouse Follower**: Cursor following effects with React state
- **Trail Effects**: Dynamic trail creation and cleanup

### Advanced Animations (`AdvancedAnimations.tsx`)

- **SVG Path Animations**: Elements following SVG paths
- **Morphing Animations**: Shape transformations
- **Loading Animations**: Creative loading indicators with state management
- **Complex Sequences**: Multi-element choreographed animations
