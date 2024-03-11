document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const downArrow = document.getElementById('downArrow');
    const horizontalScrollContainer = document.getElementById('galleryLinksContainer');
    horizontalScrollContainer.removeAttribute('style');

    gsap.to(downArrow, {
        y: 25,
        ease: 'power2.inOut',
        yoyo: true,
        duration: 1,
        repeat: -1
    })

    let horizontalTween = gsap.to(horizontalScrollContainer, {
        x: () => -(horizontalScrollContainer.scrollWidth - window.innerWidth) + 'px',
        ease: 'none',
        scrollTrigger: {
            trigger: horizontalScrollContainer,
            pin: true,
            scrub: 1,
            end: () => '+=' + (horizontalScrollContainer.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true
        }
    })

})