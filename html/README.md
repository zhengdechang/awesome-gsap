# GSAP Examples - HTML/Vanilla JavaScript

This directory contains comprehensive GSAP animation examples implemented using vanilla HTML, CSS, and JavaScript.

## 🚀 Quick Start

### Option 1: Simple File Opening

1. Open `index.html` directly in your web browser
2. All examples will work immediately (uses GSAP CDN)

### Option 2: Local Server (Recommended)

```bash
# Using Python 3
python3 -m http.server 8080

# Using Python 2
python -m http.server 8080

# Using Node.js (if you have http-server installed)
npx http-server -p 8080

# Using PHP
php -S localhost:8080
```

Then open `http://localhost:8080` in your browser.

## 📁 File Structure

```
html/
├── index.html              # Main HTML file with all examples
├── styles/
│   └── main.css           # All CSS styles and animations
├── js/
│   ├── main.js            # Main JavaScript and initialization
│   ├── animations.js      # Basic GSAP animations
│   ├── scroll-animations.js # ScrollTrigger examples
│   ├── interactive.js     # Interactive and hover effects
│   └── advanced.js        # Advanced animations and effects
└── README.md              # This file
```

## 🎨 Animation Examples

### Basic Animations

- **Simple Tweens**: Scale, rotate, and move animations
- **Timeline Sequences**: Coordinated multi-element animations
- **Text Animations**: Character-by-character text effects
- **Easing Functions**: Various timing and easing demonstrations

### ScrollTrigger Animations

- **Scroll-triggered Animations**: Elements animate as they enter viewport
- **Parallax Effects**: Background elements move at different speeds
- **Card Reveals**: Staggered card animations on scroll
- **Progress Indicator**: Visual scroll progress bar
- **Pin Animations**: Elements that stick during scroll

### Interactive Animations

- **Hover Effects**: Mouse enter/leave animations
- **Click Animations**: Button and element click responses
- **Mouse Follower**: Cursor following effects with trails
- **Magnetic Effects**: Elements that follow mouse movement
- **Custom Cursor**: Enhanced cursor with blend modes
- **Ripple Effects**: Click ripple animations

### Advanced Animations

- **SVG Path Animations**: Elements following SVG paths
- **Morphing Animations**: Shape transformations
- **Loading Animations**: Creative loading indicators
- **Physics Simulations**: Gravity and bounce effects
- **Liquid Effects**: Organic morphing shapes
- **Text Scramble**: Matrix-style text effects

## 🎹 Keyboard Shortcuts

- **1** - Play Basic Tweens
- **2** - Play Timeline Animation
- **3** - Play Text Animation
- **4** - Play Path Animation
- **5** - Play Morph Animation
- **L** - Toggle Loader Animation
- **R** - Reset All Animations
- **ESC** - Kill All Animations
- **Ctrl+D** - Toggle Debug Panel (localhost only)

## 🛠️ GSAP Plugins Used

### Free Plugins (CDN)

- **GSAP Core** - Basic tweening functionality
- **ScrollTrigger** - Scroll-based animations
- **TextPlugin** - Text animation effects
- **MotionPathPlugin** - Path-following animations

### Premium Plugins (Require GSAP Membership)

- **MorphSVG** - Advanced SVG morphing
- **Physics2D** - Realistic physics simulations
- **SplitText** - Advanced text splitting and animation

## 🎯 Key Features

### Performance Optimized

- Efficient animation loops using `gsap.ticker`
- Proper cleanup of animations and event listeners
- FPS monitoring and performance warnings
- Responsive design with mobile optimizations

### Developer Friendly

- Comprehensive error handling
- Debug panel for development
- Console logging for animation states
- Modular code structure for easy maintenance

### Accessibility Considerations

- Respects `prefers-reduced-motion` settings
- Keyboard navigation support
- Screen reader friendly markup
- High contrast mode compatibility

## 🔧 Customization

### Adding New Animations

1. Create your animation function in the appropriate JS file
2. Add HTML elements with proper classes/IDs
3. Style elements in `main.css`
4. Initialize in `main.js` if needed

### Modifying Existing Animations

- Animation parameters are clearly commented
- Easy to adjust timing, easing, and effects
- Modular structure allows isolated changes

### Styling Customization

- CSS custom properties for easy theming
- Responsive breakpoints clearly defined
- Animation states separated from layout styles

## 📱 Browser Support

- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Mobile**: iOS Safari 12+, Chrome Mobile 60+
- **GSAP Compatibility**: Supports all GSAP 3.x features

## 🐛 Debugging

### Debug Panel (Ctrl+D on localhost)

- Active animation count
- ScrollTrigger instances
- Viewport dimensions
- Current scroll position

### Console Commands

```javascript
// Access global functions
window.gsapExamples.resetAllAnimations();
window.gsapExamples.killAllAnimations();

// GSAP debugging
gsap.globalTimeline.getChildren(); // Get all active animations
ScrollTrigger.getAll(); // Get all ScrollTrigger instances
```

## 🚨 Common Issues

### Animations Not Working

1. Check browser console for errors
2. Ensure GSAP CDN is loading properly
3. Verify element selectors exist in DOM
4. Check for JavaScript conflicts

### Performance Issues

1. Monitor FPS in debug panel
2. Reduce number of simultaneous animations
3. Use `will-change` CSS property sparingly
4. Optimize images and assets

### ScrollTrigger Issues

1. Call `ScrollTrigger.refresh()` after DOM changes
2. Ensure proper start/end trigger points
3. Check for conflicting CSS transforms

## 📚 Learning Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Guide](https://greensock.com/scrolltrigger/)
- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer/)
- [GSAP Forums](https://greensock.com/forums/)

## 🤝 Contributing

Feel free to add new animation examples or improve existing ones:

1. Follow the existing code structure
2. Add proper comments and documentation
3. Test across different browsers
4. Update this README if adding new features

---

**Happy Animating! 🎬✨**
