//! Custom ScrollBar

// $(function() {  
//     $("body").niceScroll({ 
//         cursorcolor: "#ADD4A9",
//         cursorborder: ".5px solid box-shadow: 2px 4px 13px 2px rgba(34, 60, 80, 0.2);", 
//         zindex: 100000,
//     });
// });

//! -----------------------------------------------------------------------------



//! Header slider 


var indexHeaderSlider = new Swiper(".indexHeaderSlider", {
    navigation: {
        nextEl: ".ind-headers__slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-headers__slider .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});


//! ------------------------------------------------------------------------------


//! Header menu


// window.addEventListener('scroll', function() {
//     console.log(pageYOffset)
// });


//! ------------------------------------------------------------------------------



var indexBusinessSlider = new Swiper(".indexBusinessSlider", {
    navigation: {
        nextEl: ".ind-business__slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-business__slider .swiper-controls .swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetweenSlides: 0,
    keyboard: true,
    reakpoints: {
        0: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
    }
});


var indexBookSlider = new Swiper(".indexBookSlider", {
    navigation: {
        nextEl: ".ind-book__slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-book__slider .swiper-controls .swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetweenSlides: 30,
    keyboard: true,
    reakpoints: {
        0: {
            slidesPerView: 4,
            spaceBetweenSlides: 30
        },
    }
});

var indexPartnerSlider = new Swiper(".indexPartnerSlider", {
    navigation: {
        nextEl: ".ind-partner__slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-partner__slider .swiper-controls .swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetweenSlides: 30,
    keyboard: true,
    reakpoints: {
        0: {
            slidesPerView: 4,
            spaceBetweenSlides: 30
        },
    }
});


$('.basket-open').on('click', function() {
    $('.basket').toggleClass('display-n')
});
$('.basket-close').on('click', function() {
    $('.basket').toggleClass('display-n')
});