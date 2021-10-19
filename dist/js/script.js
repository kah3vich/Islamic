//! Custom ScrollBar

$(function() {  
    $("body").niceScroll({ 
        cursorcolor: "#ADD4A9",
        cursorborder: ".5px solid box-shadow: 2px 4px 13px 2px rgba(34, 60, 80, 0.2);", 
        zindex: 100000,
    });
});

//! -----------------------------------------------------------------------------



//! Header slider 


var swiper = new Swiper(".mySwiper", {
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


