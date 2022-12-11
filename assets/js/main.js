(function() {
    // gsap animations
    gsap.registerPlugin(ScrollTrigger);


    // Animation Slide Up
    const animationUp = document.querySelectorAll('.animate-up');
    if (animationUp) {
        ScrollTrigger.batch(".animate-up", {
            onEnter: elements => {
                gsap.to(elements, {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.12
                });
            },
            once: false
        });
    }

})();