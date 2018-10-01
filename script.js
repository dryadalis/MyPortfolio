//Smooth scroll
import('https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/14.2.1/smooth-scroll.min.js')
    .then( () => {
        const scroll = new SmoothScroll('a[href*="#"]', {speed: 700});
    });

//slides
let slideIndex = 1;

const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("slideShow--slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " activeDot";

}

const currentSlide = (n) => {
        showSlides(slideIndex = n)
}

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}


document.getElementById("dot1").addEventListener("click", () => {
    currentSlide(1)
});
document.getElementById("dot2").addEventListener("click", () => {
    currentSlide(2)
});
document.getElementById("dot3").addEventListener("click", () => {
    currentSlide(3)
});

document.getElementById("prev").addEventListener("click", () => {
    plusSlides(-1);
})
document.getElementById("next").addEventListener("click", () => {
    plusSlides(1);
})
showSlides(slideIndex);