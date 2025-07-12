// Text Animations Module JavaScript

// Module definition
window.TextAnimations = {
    name: 'Text Animations',
    originalText: 'Hello GSAP World!',
    
    init: function() {
        const textElement = document.querySelector('#text-animations-demo .animated-text');
        if (!textElement) return;
        
        // Store original text if not already stored
        if (!this.originalText) {
            this.originalText = textElement.textContent;
        }
        
        const text = this.originalText;
        const chars = text.split('');
        
        // Split text into spans
        textElement.innerHTML = chars.map(char => 
            char === ' ' ? '&nbsp;' : `<span class="char">${char}</span>`
        ).join('');
        
        const charElements = textElement.querySelectorAll('.char');
        
        // Add animating class
        textElement.classList.add('animating');
        
        // Animate characters entrance
        gsap.fromTo(charElements, {
            opacity: 0,
            y: 50,
            rotation: 180,
            scale: 0
        }, {
            opacity: 1,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.05,
            onComplete: () => {
                // Color wave animation
                gsap.to(charElements, {
                    color: "#00ff88",
                    duration: 0.3,
                    stagger: 0.05,
                    yoyo: true,
                    repeat: 1,
                    onComplete: () => {
                        // Bounce effect
                        gsap.to(charElements, {
                            y: -10,
                            duration: 0.2,
                            stagger: 0.03,
                            yoyo: true,
                            repeat: 1,
                            ease: "power2.out",
                            onComplete: () => {
                                textElement.classList.remove('animating');
                            }
                        });
                    }
                });
            }
        });
        
        console.log('Text Animations module loaded');
    },
    
    // Reset function
    reset: function() {
        const textElement = document.querySelector('#text-animations-demo .animated-text');
        if (!textElement) return;
        
        gsap.killTweensOf(textElement.querySelectorAll('.char'));
        textElement.textContent = this.originalText;
        textElement.classList.remove('animating');
    }
};

// Auto-register module
if (typeof window.GSAPModules === 'undefined') {
    window.GSAPModules = {};
}
window.GSAPModules['text-animations'] = window.TextAnimations;
