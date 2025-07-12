// Parallax Effects Module JavaScript

// Module definition
window.ParallaxEffects = {
    name: 'Parallax Effects',
    scrollTriggerInstances: [],
    
    init: function() {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        const parallaxBg = document.querySelector('#parallax-effects-demo .parallax-bg');
        const parallaxContent = document.querySelector('#parallax-effects-demo .parallax-content');
        const parallaxContainer = document.querySelector('#parallax-effects-demo .parallax-container');
        
        if (!parallaxBg || !parallaxContent || !parallaxContainer) return;
        
        // Reset elements
        gsap.set(parallaxBg, { yPercent: 0 });
        gsap.set(parallaxContent, { y: 0, opacity: 1 });
        
        parallaxContainer.classList.add('animating');
        
        // Parallax background effect
        const bgAnimation = gsap.to(parallaxBg, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: parallaxContainer,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                refreshPriority: -1
            }
        });
        
        this.scrollTriggerInstances.push(bgAnimation);
        
        // Content reveal animation
        const contentAnimation = gsap.fromTo(parallaxContent, {
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
        
        this.scrollTriggerInstances.push(contentAnimation);
        
        // Add extra visual effects
        gsap.to(parallaxContainer, {
            boxShadow: "0 12px 35px rgba(0, 0, 0, 0.3)",
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: parallaxContainer,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
        
        console.log('Parallax Effects module loaded');
    },
    
    // Reset function
    reset: function() {
        const parallaxBg = document.querySelector('#parallax-effects-demo .parallax-bg');
        const parallaxContent = document.querySelector('#parallax-effects-demo .parallax-content');
        const parallaxContainer = document.querySelector('#parallax-effects-demo .parallax-container');
        
        // Kill all ScrollTrigger instances
        this.scrollTriggerInstances.forEach(instance => {
            if (instance && instance.kill) {
                instance.kill();
            }
        });
        this.scrollTriggerInstances = [];
        
        if (parallaxBg && parallaxContent && parallaxContainer) {
            // Reset elements
            gsap.set(parallaxBg, { yPercent: 0 });
            gsap.set(parallaxContent, { y: 0, opacity: 1 });
            gsap.set(parallaxContainer, { boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)" });
            
            parallaxContainer.classList.remove('animating');
        }
        
        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
    }
};

// Auto-register module
if (typeof window.GSAPModules === 'undefined') {
    window.GSAPModules = {};
}
window.GSAPModules['parallax-effects'] = window.ParallaxEffects;
