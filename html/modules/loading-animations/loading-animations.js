// Loading Animations Module JavaScript

// Module definition
window.LoadingAnimations = {
    name: 'Loading Animations',
    
    init: function() {
        const loaderDots = document.querySelectorAll('#loading-animations-demo .loader-dot');
        
        if (!loaderDots.length) {
            console.warn('Loading Animations: Required elements not found');
            return;
        }
        
        // Reset dots
        gsap.set(loaderDots, {
            scale: 1,
            backgroundColor: "#00ff88"
        });
        
        // Add animating class
        loaderDots.forEach(dot => dot.classList.add('animating'));
        
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
                
                // Remove animating class
                loaderDots.forEach(dot => dot.classList.remove('animating'));
            }
        });
        
        console.log('Loading Animations module loaded');
    },
    
    // Reset function
    reset: function() {
        const loaderDots = document.querySelectorAll('#loading-animations-demo .loader-dot');
        
        gsap.killTweensOf(loaderDots);
        gsap.set(loaderDots, {
            scale: 1,
            backgroundColor: "#00ff88"
        });
        
        loaderDots.forEach(dot => dot.classList.remove('animating'));
    }
};

// Auto-register module
if (typeof window.GSAPModules === 'undefined') {
    window.GSAPModules = {};
}
window.GSAPModules['loading-animations'] = window.LoadingAnimations;
