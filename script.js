//Smooth scroll
import('https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/14.2.1/smooth-scroll.min.js')
    .then( () => {
        const scroll = new SmoothScroll('a[href*="#"]', {speed: 700});
    });

