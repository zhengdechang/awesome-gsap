// ScrollTrigger Module JavaScript

// Module definition
window.ScrollTriggerModule = {
    name: 'ScrollTrigger',
    scrollTriggerInstance: null,
    
    init: function() {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        const scrollBox = document.querySelector('#scroll-trigger-demo .scroll-box');
        if (!scrollBox) return;
        
        // Reset the box
        gsap.set(scrollBox, {
            scale: 0.5,
            rotation: 0,
            backgroundColor: "#ff6b6b"
        });
        
        scrollBox.classList.remove('triggered');
        
        // Create ScrollTrigger animation
        this.scrollTriggerInstance = gsap.fromTo(scrollBox, {
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
                toggleActions: "play none none reverse",
                onEnter: () => {
                    scrollBox.classList.add('triggered');
                },
                onLeave: () => {
                    scrollBox.classList.remove('triggered');
                },
                onEnterBack: () => {
                    scrollBox.classList.add('triggered');
                },
                onLeaveBack: () => {
                    scrollBox.classList.remove('triggered');
                },
                // Add markers for debugging (remove in production)
                // markers: true
            }
        });
        
        console.log('ScrollTrigger module loaded');
    },
    
    // Reset function
    reset: function() {
        const scrollBox = document.querySelector('#scroll-trigger-demo .scroll-box');
        if (!scrollBox) return;
        
        // Kill existing ScrollTrigger
        if (this.scrollTriggerInstance) {
            this.scrollTriggerInstance.kill();
            this.scrollTriggerInstance = null;
        }
        
        // Reset the box
        gsap.set(scrollBox, {
            scale: 1,
            rotation: 0,
            backgroundColor: "#ff6b6b"
        });
        
        scrollBox.classList.remove('triggered');
        
        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
    }
};

// Auto-register module
if (typeof window.GSAPModules === 'undefined') {
    window.GSAPModules = {};
}
window.GSAPModules['scroll-trigger'] = window.ScrollTriggerModule;
