// Simple Code Viewer for GSAP Modules

// Static code examples
const moduleCode = {
  "basic-animations": {
    html: `<!-- Basic Animations HTML -->
<div class="module-demo">
    <div class="tween-box">Scale</div>
    <div class="tween-box">Rotate</div>
    <div class="tween-box">Move</div>
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
}`,

    js: `// Basic Animations JavaScript
window.BasicAnimations = {
    name: 'Basic Animations',
    
    init: function() {
        const boxes = document.querySelectorAll('#basic-animations-demo .tween-box');
        
        // Reset all boxes
        gsap.set(boxes, { scale: 1, rotation: 0, x: 0, y: 0 });
        
        // Scale animation
        if (boxes[0]) {
            gsap.to(boxes[0], {
                scale: 1.5,
                duration: 1,
                ease: "bounce.out",
                yoyo: true,
                repeat: 1
            });
        }
        
        // Rotation animation
        if (boxes[1]) {
            gsap.to(boxes[1], {
                rotation: 360,
                duration: 1,
                ease: "power2.inOut",
                delay: 0.2
            });
        }
        
        // Movement animation
        if (boxes[2]) {
            gsap.to(boxes[2], {
                x: 50,
                y: -30,
                duration: 1,
                ease: "elastic.out(1, 0.3)",
                delay: 0.4,
                yoyo: true,
                repeat: 1
            });
        }
    }
};`,
  },

  "timeline-sequences": {
    html: `<!-- Timeline Sequences HTML -->
<div class="module-demo">
    <div class="timeline-box">1</div>
    <div class="timeline-box">2</div>
    <div class="timeline-box">3</div>
    <div class="timeline-box">4</div>
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
}`,

    js: `// Timeline Sequences JavaScript
window.TimelineSequences = {
    name: 'Timeline Sequences',
    
    init: function() {
        const boxes = document.querySelectorAll('#timeline-sequences-demo .timeline-box');
        const tl = gsap.timeline();
        
        // Reset positions
        gsap.set(boxes, { scale: 1, rotation: 0, y: 0, opacity: 1 });
        
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
        }, "-=0.3");
    }
};`,
  },

  "text-animations": {
    html: `<!-- Text Animations HTML -->
<div class="module-demo">
    <h2 class="animated-text">Hello GSAP World!</h2>
</div>`,

    css: `/* Text Animations CSS */
.animated-text {
    font-size: 2.5rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    margin: 0;
    font-weight: bold;
}

.char {
    display: inline-block;
}`,

    js: `// Text Animations JavaScript
window.TextAnimations = {
    name: 'Text Animations',
    
    init: function() {
        const textElement = document.querySelector('#text-animations-demo .animated-text');
        const text = textElement.textContent;
        const chars = text.split('');
        
        textElement.innerHTML = chars.map(char => 
            char === ' ' ? '&nbsp;' : \`<span class="char">\${char}</span>\`
        ).join('');
        
        const charElements = textElement.querySelectorAll('.char');
        
        gsap.fromTo(charElements, {
            opacity: 0,
            y: 50,
            rotation: 180
        }, {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.05
        });
    }
};`,
  },

  "scroll-trigger": {
    html: `<!-- ScrollTrigger HTML -->
<div class="module-demo">
    <div class="scroll-box">Scroll to animate</div>
</div>`,

    css: `/* ScrollTrigger CSS */
.scroll-box {
    width: 150px;
    height: 150px;
    background: #ff6b6b;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    text-align: center;
}`,

    js: `// ScrollTrigger JavaScript
window.ScrollTrigger = {
    name: 'ScrollTrigger',

    init: function() {
        gsap.registerPlugin(ScrollTrigger);

        const scrollBox = document.querySelector('#scroll-trigger-demo .scroll-box');
        if (!scrollBox) return;

        gsap.fromTo(scrollBox, {
            scale: 0.5,
            rotation: 0,
            backgroundColor: "#ff6b6b"
        }, {
            scale: 1.2,
            rotation: 360,
            backgroundColor: "#00ff88",
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: scrollBox,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
                toggleActions: "play none none reverse"
            }
        });
    }
};`,
  },

  "parallax-effects": {
    html: `<!-- Parallax Effects HTML -->
<div class="parallax-container">
    <div class="parallax-bg"></div>
    <div class="parallax-content">
        <h4>Parallax Effect</h4>
        <p>Background moves differently</p>
    </div>
</div>`,

    css: `/* Parallax Effects CSS */
.parallax-container {
    position: relative;
    height: 150px;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
}

.parallax-bg {
    position: absolute;
    top: -20%;
    left: 0;
    width: 100%;
    height: 120%;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    opacity: 0.7;
}

.parallax-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}`,

    js: `// Parallax Effects JavaScript
window.ParallaxEffects = {
    name: 'Parallax Effects',

    init: function() {
        gsap.registerPlugin(ScrollTrigger);

        const parallaxBg = document.querySelector('#parallax-effects-demo .parallax-bg');
        const parallaxContent = document.querySelector('#parallax-effects-demo .parallax-content');

        if (parallaxBg) {
            gsap.to(parallaxBg, {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: parallaxBg.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }

        if (parallaxContent) {
            gsap.fromTo(parallaxContent, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: parallaxContent,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            });
        }
    }
};`,
  },

  "card-reveals": {
    html: `<!-- Card Reveals HTML -->
<div class="reveal-cards">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
</div>`,

    css: `/* Card Reveals CSS */
.reveal-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
}

.card {
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    backdrop-filter: blur(5px);
}`,

    js: `// Card Reveals JavaScript
window.CardReveals = {
    name: 'Card Reveals',

    init: function() {
        gsap.registerPlugin(ScrollTrigger);

        const cards = document.querySelectorAll('#card-reveals-demo .card');

        gsap.fromTo(cards, {
            y: 50,
            opacity: 0,
            scale: 0.8
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2,
            scrollTrigger: {
                trigger: cards[0],
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    }
};`,
  },

  "hover-interactions": {
    html: `<!-- Hover Interactions HTML -->
<div class="module-demo">
    <div class="hover-box">Hover Me</div>
    <div class="hover-box">Click Me</div>
</div>`,

    css: `/* Hover Interactions CSS */
.hover-box {
    width: 100px;
    height: 100px;
    background: #4ecdc4;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;
    box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
}`,

    js: `// Hover Interactions JavaScript
window.HoverInteractions = {
    name: 'Hover Interactions',

    init: function() {
        const hoverBoxes = document.querySelectorAll('#hover-interactions-demo .hover-box');

        hoverBoxes.forEach((box, index) => {
            if (index === 0) {
                // First box: Hover effects
                box.addEventListener('mouseenter', () => {
                    gsap.to(box, {
                        scale: 1.2,
                        rotation: 15,
                        backgroundColor: "#ff6b6b",
                        duration: 0.3,
                        ease: "back.out(1.7)"
                    });
                });

                box.addEventListener('mouseleave', () => {
                    gsap.to(box, {
                        scale: 1,
                        rotation: 0,
                        backgroundColor: "#4ecdc4",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            } else {
                // Second box: Click effects
                box.addEventListener('click', () => {
                    gsap.to(box, {
                        scale: 0.8,
                        duration: 0.1,
                        yoyo: true,
                        repeat: 1,
                        ease: "power2.out",
                        onComplete: () => {
                            gsap.to(box, {
                                rotation: 360,
                                duration: 0.6,
                                ease: "power2.out"
                            });
                        }
                    });
                });
            }
        });
    }
};`,
  },

  "mouse-follow": {
    html: `<!-- Mouse Follow HTML -->
<div class="mouse-follow-area">
    <div class="follower"></div>
    <p>Move your mouse here</p>
</div>`,

    css: `/* Mouse Follow CSS */
.mouse-follow-area {
    position: relative;
    cursor: none;
    min-height: 150px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.follower {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #00ff88;
    border-radius: 50%;
    pointer-events: none;
    z-index: 10;
    opacity: 0;
    transform: scale(0);
}`,

    js: `// Mouse Follow JavaScript
window.MouseFollow = {
    name: 'Mouse Follow',

    init: function() {
        const mouseArea = document.querySelector('#mouse-follow-demo .mouse-follow-area');
        const follower = document.querySelector('#mouse-follow-demo .follower');

        if (!mouseArea || !follower) return;

        mouseArea.addEventListener('mousemove', (e) => {
            const rect = mouseArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(follower, {
                x: x - 10,
                y: y - 10,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        mouseArea.addEventListener('mouseenter', () => {
            gsap.to(follower, {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        mouseArea.addEventListener('mouseleave', () => {
            gsap.to(follower, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }
};`,
  },

  "svg-path": {
    html: `<!-- SVG Path Animation HTML -->
<svg width="300" height="200" viewBox="0 0 300 200">
    <path class="motion-path" d="M50,100 Q150,50 250,100"
          stroke="#00ff88" stroke-width="2" fill="none"/>
    <circle class="path-follower" r="8" fill="#ff6b6b"/>
</svg>`,

    css: `/* SVG Path Animation CSS */
.motion-path {
    stroke: #00ff88;
    stroke-width: 2;
    fill: none;
}

.path-follower {
    fill: #ff6b6b;
}`,

    js: `// SVG Path Animation JavaScript
window.SvgPath = {
    name: 'SVG Path Animation',

    init: function() {
        gsap.registerPlugin(MotionPathPlugin);

        const pathFollower = document.querySelector('#svg-path-demo .path-follower');
        const motionPath = document.querySelector('#svg-path-demo .motion-path');

        if (!pathFollower || !motionPath) return;

        // Reset position
        gsap.set(pathFollower, {
            motionPath: { path: motionPath, start: 0 }
        });

        // Animate along path
        gsap.to(pathFollower, {
            motionPath: {
                path: motionPath,
                align: motionPath,
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            },
            duration: 3,
            ease: "power2.inOut",
            repeat: 1,
            yoyo: true
        });
    }
};`,
  },

  "shape-morphing": {
    html: `<!-- Shape Morphing HTML -->
<svg width="200" height="200" viewBox="0 0 200 200">
    <path class="morph-shape" d="M100,50 L150,150 L50,150 Z" fill="#00ff88"/>
</svg>`,

    css: `/* Shape Morphing CSS */
.morph-shape {
    fill: #00ff88;
    transition: fill 0.3s ease;
}`,

    js: `// Shape Morphing JavaScript
window.ShapeMorphing = {
    name: 'Shape Morphing',

    init: function() {
        const morphShape = document.querySelector('#shape-morphing-demo .morph-shape');
        if (!morphShape) return;

        const shapes = [
            "M100,50 L150,150 L50,150 Z", // Triangle
            "M50,100 Q100,50 150,100 Q100,150 50,100", // Diamond
            "M100,50 A50,50 0 1,1 100,150 A50,50 0 1,1 100,50", // Circle
            "M50,75 L150,75 L150,125 L50,125 Z", // Rectangle
            "M100,50 L150,150 L50,150 Z" // Back to triangle
        ];

        const colors = ["#00ff88", "#ff6b6b", "#4ecdc4", "#8B5CF6", "#00ff88"];

        const tl = gsap.timeline();

        shapes.forEach((shape, index) => {
            tl.to(morphShape, {
                attr: { d: shape },
                fill: colors[index],
                duration: 1,
                ease: "power2.inOut"
            }, index * 1.2);
        });
    }
};`,
  },

  "loading-animations": {
    html: `<!-- Loading Animations HTML -->
<div class="loader">
    <div class="loader-dot"></div>
    <div class="loader-dot"></div>
    <div class="loader-dot"></div>
</div>`,

    css: `/* Loading Animations CSS */
.loader {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

.loader-dot {
    width: 20px;
    height: 20px;
    background: #00ff88;
    border-radius: 50%;
}`,

    js: `// Loading Animations JavaScript
window.LoadingAnimations = {
    name: 'Loading Animations',

    init: function() {
        const loaderDots = document.querySelectorAll('#loading-animations-demo .loader-dot');

        // Pulsing animation
        gsap.to(loaderDots, {
            scale: 1.5,
            backgroundColor: "#ff6b6b",
            duration: 0.6,
            ease: "power2.inOut",
            stagger: 0.2,
            repeat: 3,
            yoyo: true,
            onComplete: () => {
                gsap.set(loaderDots, {
                    scale: 1,
                    backgroundColor: "#00ff88"
                });
            }
        });
    }
};`,
  },
};

// Show code modal
function showCode(moduleName) {
  const modal = document.getElementById("code-modal");
  const modalTitle = document.getElementById("modal-title");
  const htmlCode = document.getElementById("html-code").querySelector("code");
  const cssCode = document.getElementById("css-code").querySelector("code");
  const jsCode = document.getElementById("js-code").querySelector("code");

  const code = moduleCode[moduleName];
  if (!code) {
    console.warn(`Code not found for module: ${moduleName}`);
    return;
  }

  // Set modal title
  modalTitle.textContent = `${moduleName
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())} - Code`;

  // Set code content
  htmlCode.textContent = code.html;
  cssCode.textContent = code.css;
  jsCode.textContent = code.js;

  // Show modal
  modal.style.display = "block";

  // Show HTML tab by default
  showTab("html");
}

// Close code modal
function closeCodeModal() {
  const modal = document.getElementById("code-modal");
  modal.style.display = "none";
}

// Show specific tab
function showTab(tabName) {
  // Hide all code blocks
  document.querySelectorAll(".code-block").forEach((block) => {
    block.classList.remove("active");
  });

  // Remove active class from all tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected code block
  const codeBlock = document.getElementById(`${tabName}-code`);
  if (codeBlock) {
    codeBlock.classList.add("active");
  }

  // Add active class to selected tab
  const tabBtn = document.querySelector(`[onclick="showTab('${tabName}')"]`);
  if (tabBtn) {
    tabBtn.classList.add("active");
  }
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  const modal = document.getElementById("code-modal");
  if (e.target === modal) {
    closeCodeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCodeModal();
  }
});

console.log("✅ Simple Code Viewer loaded successfully!");
