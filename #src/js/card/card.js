var cardElementSlider = new Swiper(".cardElementSlider", {
    navigation: {
        nextEl: ".card-headers__add-slider .swiper-controls .swiper-button-next",
        prevEl: ".card-headers__add-slider .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
    slidesPerView: 4,
    spaceBetweenSlides: 40,
});