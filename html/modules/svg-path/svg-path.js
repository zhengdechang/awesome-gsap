// SVG Path Animation Module JavaScript

// Module definition
window.SvgPath = {
    name: 'SVG Path Animation',
    
    init: function() {
        // Check if MotionPathPlugin is available
        if (typeof MotionPathPlugin === 'undefined') {
            console.warn('SVG Path: MotionPathPlugin not available, using fallback animation');
            this.initFallback();
            return;
        }
        
        gsap.registerPlugin(MotionPathPlugin);
        
        const pathFollower = document.querySelector('#svg-path-demo .path-follower');
        const motionPath = document.querySelector('#svg-path-demo .motion-path');
        
        if (!pathFollower || !motionPath) {
            console.warn('SVG Path: Required elements not found');
            return;
        }
        
        // Add animating class
        pathFollower.classList.add('animating');
        
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
            yoyo: true,
            onComplete: () => {
                pathFollower.classList.remove('animating');
            }
        });
        
        // Add scale animation
        gsap.to(pathFollower, {
            scale: 1.5,
            duration: 1.5,
            ease: "sine.inOut",
            repeat: 1,
            yoyo: true
        });
        
        console.log('SVG Path module loaded');
    },
    
    // Fallback animation without MotionPathPlugin
    initFallback: function() {
        const pathFollower = document.querySelector('#svg-path-demo .path-follower');
        
        if (!pathFollower) return;
        
        // Simple circular motion as fallback
        gsap.to(pathFollower, {
            rotation: 360,
            transformOrigin: "150px 100px",
            duration: 3,
            ease: "power2.inOut",
            repeat: 1,
            yoyo: true
        });
        
        gsap.to(pathFollower, {
            scale: 1.5,
            duration: 1.5,
            ease: "sine.inOut",
            repeat: 1,
            yoyo: true
        });
    },
    
    // Reset function
    reset: function() {
        const pathFollower = document.querySelector('#svg-path-demo .path-follower');
        
        if (pathFollower) {
            gsap.killTweensOf(pathFollower);
            gsap.set(pathFollower, {
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1
            });
            pathFollower.classList.remove('animating');
        }
    }
};

// Auto-register module
if (typeof window.GSAPModules === 'undefined') {
    window.GSAPModules = {};
}
window.GSAPModules['svg-path'] = window.SvgPath;
