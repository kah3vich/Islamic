var cardElementSlider = new Swiper(".cardElementSlider", {
    navigation: {
        nextEl: ".card-headers__add-slider .swiper-controls .swiper-button-next",
        prevEl: ".card-headers__add-slider .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
    slidesPerView: 4,
    spaceBetweenSlides: 40,
    breakpoints: {
        1390: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        965: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        600: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});