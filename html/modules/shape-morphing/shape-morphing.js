// Shape Morphing Module JavaScript

// Module definition
window.ShapeMorphing = {
    name: 'Shape Morphing',
    
    init: function() {
        const morphShape = document.querySelector('#shape-morphing-demo .morph-shape');
        
        if (!morphShape) {
            console.warn('Shape Morphing: Required elements not found');
            return;
        }
        
        // Add animating class
        morphShape.classList.add('animating');
        
        const shapes = [
            "M100,50 L150,150 L50,150 Z", // Triangle
            "M50,100 Q100,50 150,100 Q100,150 50,100", // Diamond-like
            "M100,50 A50,50 0 1,1 100,150 A50,50 0 1,1 100,50", // Circle
            "M50,75 L150,75 L150,125 L50,125 Z", // Rectangle
            "M100,50 L150,150 L50,150 Z" // Back to triangle
        ];
        
        const colors = ["#00ff88", "#ff6b6b", "#4ecdc4", "#8B5CF6", "#00ff88"];
        
        const tl = gsap.timeline({
            onComplete: () => {
                morphShape.classList.remove('animating');
            }
        });
        
        shapes.forEach((shape, index) => {
            tl.to(morphShape, {
                attr: { d: shape },
                fill: colors[index],
                duration: 1,
                ease: "power2.inOut"
            }, index * 1.2);
        });
        
        console.log('Shape Morphing module loaded');
    },
    
    // Reset function
    reset: function() {
        const morphShape = document.querySelector('#shape-morphing-demo .morph-shape');
        
        if (morphShape) {
            gsap.killTweensOf(morphShape);
            gsap.set(morphShape, {
                attr: { d: "M100,50 L150,150 L50,150 Z" },
                fill: "#00ff88"
            });
            morphShape.classList.remove('animating');
        }
    }
};

// Auto-register module
if (typeof window.GSAPModules === 'undefined') {
    window.GSAPModules = {};
}
window.GSAPModules['shape-morphing'] = window.ShapeMorphing;
