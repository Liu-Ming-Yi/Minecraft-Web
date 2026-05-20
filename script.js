document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const slideUpElements = document.querySelectorAll('.slide-up');

    // Handle Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations (Slide Up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger CSS transition
                entry.target.classList.add('visible');
                
                // Set transition delay if specified via inline style custom property
                const delay = entry.target.style.getPropertyValue('--delay');
                if (delay) {
                    entry.target.style.transitionDelay = delay;
                }

                // Stop observing once it has become visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    slideUpElements.forEach(el => {
        observer.observe(el);
    });
});
