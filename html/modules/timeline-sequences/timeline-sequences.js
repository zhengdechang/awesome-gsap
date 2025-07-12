// Timeline Sequences Module JavaScript

// Module definition
window.TimelineSequences = {
    name: 'Timeline Sequences',
    
    init: function() {
        const boxes = document.querySelectorAll('#timeline-sequences-demo .timeline-box');
        const tl = gsap.timeline({
            onComplete: () => {
                boxes.forEach(box => box.classList.remove('animating'));
            }
        });
        
        // Reset positions
        gsap.set(boxes, { 
            scale: 1, 
            rotation: 0, 
            y: 0, 
            opacity: 1,
            backgroundColor: '#ff6b6b'
        });
        
        // Add animating class
        boxes.forEach(box => box.classList.add('animating'));
        
        // Create timeline sequence
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
        }, "-=0.3")
        .from(boxes[2], {
            scale: 0,
            rotation: -180,
            duration: 0.5,
            ease: "back.out(1.7)"
        }, "-=0.3")
        .from(boxes[3], {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "bounce.out"
        }, "-=0.3")
        .to(boxes, {
            rotation: 360,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.1
        }, "+=0.5")
        .to(boxes, {
            backgroundColor: "#00ff88",
            duration: 0.5,
            stagger: 0.1
        }, "-=0.5")
        .to(boxes, {
            backgroundColor: "#ff6b6b",
            duration: 0.5,
            stagger: 0.1
        });
        
        console.log('Timeline Sequences module loaded');
    },
    
    // Reset function
    reset: function() {
        const boxes = document.querySelectorAll('#timeline-sequences-demo .timeline-box');
        gsap.killTweensOf(boxes);
        gsap.set(boxes, { 
            scale: 1, 
            rotation: 0, 
            y: 0, 
            opacity: 1,
            backgroundColor: '#ff6b6b'
        });
        boxes.forEach(box => box.classList.remove('animating'));
    }
};

// Auto-register module
if (typeof window.GSAPModules === 'undefined') {
    window.GSAPModules = {};
}
window.GSAPModules['timeline-sequences'] = window.TimelineSequences;
