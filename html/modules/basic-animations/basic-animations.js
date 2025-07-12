// Basic Animations Module JavaScript

// Module definition
window.BasicAnimations = {
    name: 'Basic Animations',
    
    init: function() {
        const boxes = document.querySelectorAll('#basic-animations-demo .tween-box');
        
        // Reset all boxes
        gsap.set(boxes, { 
            scale: 1, 
            rotation: 0, 
            x: 0, 
            y: 0,
            backgroundColor: '#00ff88'
        });
        
        // Add animating class to prevent interaction during animation
        boxes.forEach(box => box.classList.add('animating'));
        
        // Scale animation
        if (boxes[0]) {
            gsap.to(boxes[0], {
                scale: 1.5,
                duration: 1,
                ease: "bounce.out",
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    boxes[0].classList.remove('animating');
                }
            });
        }
        
        // Rotation animation
        if (boxes[1]) {
            gsap.to(boxes[1], {
                rotation: 360,
                duration: 1,
                ease: "power2.inOut",
                delay: 0.2,
                onComplete: () => {
                    boxes[1].classList.remove('animating');
                }
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
                repeat: 1,
                onComplete: () => {
                    boxes[2].classList.remove('animating');
                }
            });
        }
        
        console.log('Basic Animations module loaded');
    },
    
    // Reset function
    reset: function() {
        const boxes = document.querySelectorAll('#basic-animations-demo .tween-box');
        gsap.killTweensOf(boxes);
        gsap.set(boxes, { 
            scale: 1, 
            rotation: 0, 
            x: 0, 
            y: 0,
            backgroundColor: '#00ff88'
        });
        boxes.forEach(box => box.classList.remove('animating'));
    }
};

// Auto-register module
if (typeof window.GSAPModules === 'undefined') {
    window.GSAPModules = {};
}
window.GSAPModules['basic-animations'] = window.BasicAnimations;
