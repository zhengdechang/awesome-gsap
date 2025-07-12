// Mouse Follow Module JavaScript

// Module definition
window.MouseFollow = {
    name: 'Mouse Follow',
    
    init: function() {
        const mouseArea = document.querySelector('#mouse-follow-demo .mouse-follow-area');
        const follower = document.querySelector('#mouse-follow-demo .follower');
        
        if (!mouseArea || !follower) {
            console.warn('Mouse Follow: Required elements not found');
            return;
        }
        
        // Reset follower
        gsap.set(follower, {
            x: 0,
            y: 0,
            scale: 0,
            opacity: 0
        });
        
        // Mouse move handler
        const handleMouseMove = (e) => {
            const rect = mouseArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            gsap.to(follower, {
                x: x - 10,
                y: y - 10,
                duration: 0.3,
                ease: "power2.out"
            });
        };
        
        // Mouse enter handler
        const handleMouseEnter = () => {
            gsap.to(follower, {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        };
        
        // Mouse leave handler
        const handleMouseLeave = () => {
            gsap.to(follower, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        };
        
        // Add event listeners
        mouseArea.addEventListener('mousemove', handleMouseMove);
        mouseArea.addEventListener('mouseenter', handleMouseEnter);
        mouseArea.addEventListener('mouseleave', handleMouseLeave);
        
        console.log('Mouse Follow module loaded');
    },
    
    // Reset function
    reset: function() {
        const mouseArea = document.querySelector('#mouse-follow-demo .mouse-follow-area');
        const follower = document.querySelector('#mouse-follow-demo .follower');
        
        if (mouseArea && follower) {
            // Remove event listeners
            mouseArea.removeEventListener('mousemove', this.handleMouseMove);
            mouseArea.removeEventListener('mouseenter', this.handleMouseEnter);
            mouseArea.removeEventListener('mouseleave', this.handleMouseLeave);
            
            // Reset follower
            gsap.killTweensOf(follower);
            gsap.set(follower, {
                x: 0,
                y: 0,
                scale: 0,
                opacity: 0
            });
        }
    }
};

// Auto-register module
if (typeof window.GSAPModules === 'undefined') {
    window.GSAPModules = {};
}
window.GSAPModules['mouse-follow'] = window.MouseFollow;
