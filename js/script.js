function initSlider(slideSelector, interval){
    var slides = document.querySelectorAll(slideSelector);
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, interval);

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
    }
}
initSlider('#slides .slide', 4000);
initSlider('#top-slides .slide', 10000);

