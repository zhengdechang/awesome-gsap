// Main Modular JavaScript for GSAP Examples

// Initialize hero animations
function initHeroAnimation() {
    const floatingBoxes = document.querySelectorAll('.floating-box');
    
    floatingBoxes.forEach((box, index) => {
        gsap.to(box, {
            y: "random(-50, 50)",
            x: "random(-30, 30)",
            rotation: "random(-15, 15)",
            duration: "random(3, 5)",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.3
        });
        
        gsap.to(box, {
            y: "+=20",
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: Math.random() * 2
        });
    });
}

// Initialize navigation animations
function initNavbarAnimation() {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        const navbar = document.querySelector('.navbar');
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            gsap.to(navbar, {
                y: -100,
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            // Scrolling up
            gsap.to(navbar, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }
        
        lastScrollY = currentScrollY;
    });
}

// Initialize smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 80
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });
}

// Initialize page load animations
function initPageLoadAnimations() {
    const tl = gsap.timeline();
    
    // Navbar animation
    tl.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    })
    .from('.nav-title', {
        scale: 0,
        rotation: 180,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.5")
    .from('.nav-link', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=0.3");
    
    // Hero animations
    tl.from('.hero-title', {
        scale: 0,
        rotation: 180,
        duration: 1,
        ease: "back.out(1.7)"
    }, "-=0.5")
    .from('.hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5")
    .from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.3");
}

// Initialize section title animations
function initSectionTitleAnimations() {
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// Initialize module card animations
function initModuleCardAnimations() {
    gsap.utils.toArray('.module-card').forEach((card, index) => {
        gsap.fromTo(card, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            delay: index * 0.1
        });
    });
}

// Initialize button hover effects
function initButtonEffects() {
    document.querySelectorAll('.demo-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        btn.addEventListener('mousedown', () => {
            gsap.to(btn, {
                scale: 0.95,
                duration: 0.1,
                ease: "power2.out"
            });
        });

        btn.addEventListener('mouseup', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.1,
                ease: "power2.out"
            });
        });
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('🚨 JavaScript Error:', e.error);
});

// GSAP configuration
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 GSAP Modular Examples Loaded!');
    
    // Register ScrollToPlugin if available
    if (typeof ScrollToPlugin !== 'undefined') {
        gsap.registerPlugin(ScrollToPlugin);
    }
    
    // Initialize all animations
    initPageLoadAnimations();
    initHeroAnimation();
    initNavbarAnimation();
    initSmoothScrolling();
    initSectionTitleAnimations();
    initModuleCardAnimations();
    initButtonEffects();
});

console.log('✅ GSAP Modular Examples initialized successfully!');
