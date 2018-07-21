export default class Carousel {

    constructor() {
        this.slideIndex = 0;
        this.showSlides(this.slideIndex);
    }

    showSlides(n) {
        const slides = document.getElementsByClassName('article-slides');
        
        if (n > slides.length) {
           this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = slides.length
        }

        for (let i = 0; i < slides.length; i++) {
            console.log(slides.length);
            console.log(slides[i]);
            slides[i].style.display = 'none';
        }
console.log('slides',slides);
console.log('slideindex',this.slideIndex);
        slides[this.slideIndex - 1].style.display = "block";
        // setTimeout(showSlides, 5000);
    }

    plusSlides(n) {
        console.log('n', n);
        console.log('clicked plus');
        this.showSlides(this.slideIndex += n);
    }

}
