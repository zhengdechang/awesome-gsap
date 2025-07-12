// Hover Interactions Module JavaScript

// Module definition
window.HoverInteractions = {
    name: 'Hover Interactions',
    
    init: function() {
        const hoverBoxes = document.querySelectorAll('#hover-interactions-demo .hover-box');
        if (!hoverBoxes.length) return;
        
        // Reset boxes
        gsap.set(hoverBoxes, {
            scale: 1,
            rotation: 0,
            backgroundColor: "#4ecdc4"
        });
        
        hoverBoxes.forEach(box => {
            box.classList.remove('animating');
        });
        
        // Setup hover effects for each box
        hoverBoxes.forEach((box, index) => {
            if (index === 0) {
                // First box: Hover effects
                box.addEventListener('mouseenter', () => {
                    if (!box.classList.contains('animating')) {
                        gsap.to(box, {
                            scale: 1.2,
                            rotation: 15,
                            backgroundColor: "#ff6b6b",
                            duration: 0.3,
                            ease: "back.out(1.7)"
                        });
                    }
                });
                
                box.addEventListener('mouseleave', () => {
                    if (!box.classList.contains('animating')) {
                        gsap.to(box, {
                            scale: 1,
                            rotation: 0,
                            backgroundColor: "#4ecdc4",
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                });
            } else {
                // Second box: Click effects
                box.addEventListener('click', () => {
                    if (!box.classList.contains('animating')) {
                        box.classList.add('animating');
                        
                        gsap.to(box, {
                            scale: 0.8,
                            duration: 0.1,
                            ease: "power2.out",
                            yoyo: true,
                            repeat: 1,
                            onComplete: () => {
                                gsap.to(box, {
                                    rotation: "+=360",
                                    backgroundColor: "#00ff88",
                                    duration: 0.5,
                                    ease: "power2.out",
                                    onComplete: () => {
                                        gsap.to(box, {
                                            backgroundColor: "#4ecdc4",
                                            duration: 0.3,
                                            delay: 0.2,
                                            onComplete: () => {
                                                box.classList.remove('animating');
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
                
                // Hover effect for click box
                box.addEventListener('mouseenter', () => {
                    if (!box.classList.contains('animating')) {
                        gsap.to(box, {
                            scale: 1.1,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                });
                
                box.addEventListener('mouseleave', () => {
                    if (!box.classList.contains('animating')) {
                        gsap.to(box, {
                            scale: 1,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                });
            }
        });
        
        console.log('Hover Interactions module loaded');
    },
    
    // Reset function
    reset: function() {
        const hoverBoxes = document.querySelectorAll('#hover-interactions-demo .hover-box');
        
        gsap.killTweensOf(hoverBoxes);
        gsap.set(hoverBoxes, {
            scale: 1,
            rotation: 0,
            backgroundColor: "#4ecdc4"
        });
        
        hoverBoxes.forEach(box => {
            box.classList.remove('animating');
        });
    }
};

// Auto-register module
if (typeof window.GSAPModules === 'undefined') {
    window.GSAPModules = {};
}
window.GSAPModules['hover-interactions'] = window.HoverInteractions;
