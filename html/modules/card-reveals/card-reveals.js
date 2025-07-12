// Card Reveals Module JavaScript

// Module definition
window.CardReveals = {
    name: 'Card Reveals',
    scrollTriggerInstance: null,
    
    init: function() {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        const cards = document.querySelectorAll('#card-reveals-demo .card');
        if (!cards.length) return;
        
        // Reset cards
        gsap.set(cards, {
            y: 50,
            opacity: 0,
            scale: 0.8
        });
        
        cards.forEach(card => {
            card.classList.remove('revealed', 'animating');
        });
        
        // Create reveal animation
        this.scrollTriggerInstance = gsap.to(cards, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2,
            scrollTrigger: {
                trigger: cards[0],
                start: "top 80%",
                toggleActions: "play none none reverse",
                onEnter: () => {
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('revealed');
                        }, index * 200);
                    });
                },
                onLeave: () => {
                    cards.forEach(card => {
                        card.classList.remove('revealed');
                    });
                },
                onEnterBack: () => {
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('revealed');
                        }, index * 200);
                    });
                },
                onLeaveBack: () => {
                    cards.forEach(card => {
                        card.classList.remove('revealed');
                    });
                }
            },
            onStart: () => {
                cards.forEach(card => card.classList.add('animating'));
            },
            onComplete: () => {
                cards.forEach(card => card.classList.remove('animating'));
            }
        });
        
        // Add individual hover effects
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (!card.classList.contains('animating')) {
                    gsap.to(card, {
                        scale: 0.95,
                        duration: 0.1,
                        yoyo: true,
                        repeat: 1,
                        ease: "power2.out",
                        onComplete: () => {
                            gsap.to(card, {
                                rotation: 360,
                                duration: 0.6,
                                ease: "power2.out"
                            });
                        }
                    });
                }
            });
        });
        
        console.log('Card Reveals module loaded');
    },
    
    // Reset function
    reset: function() {
        const cards = document.querySelectorAll('#card-reveals-demo .card');
        
        // Kill ScrollTrigger instance
        if (this.scrollTriggerInstance) {
            this.scrollTriggerInstance.kill();
            this.scrollTriggerInstance = null;
        }
        
        // Reset cards
        gsap.killTweensOf(cards);
        gsap.set(cards, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0
        });
        
        cards.forEach(card => {
            card.classList.remove('revealed', 'animating');
        });
        
        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
    }
};

// Auto-register module
if (typeof window.GSAPModules === 'undefined') {
    window.GSAPModules = {};
}
window.GSAPModules['card-reveals'] = window.CardReveals;
