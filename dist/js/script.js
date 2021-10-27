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
    breakpoints: {
        1270: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 2,
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
    breakpoints: {
        1320: {
            slidesPerView: 4,
            spaceBetweenSlides: 30
        },
        0: {
            slidesPerView: 3,
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
    breakpoints: {
        1270: {
            slidesPerView: 4,
            spaceBetweenSlides: 30
        },
        0: {
            slidesPerView: 3,
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



var indexNewsSlider = new Swiper(".indexNewsSlider", {
    navigation: {
        nextEl: ".ind-news__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-news__block-slider .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
    breakpoints: {
        1270: {
            slidesPerView: 4,
            spaceBetweenSlides: 15
        },
        0: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
    }
});

var indexFairBannerSlider = new Swiper(".indexFairBannerSlider", {
    navigation: {
        nextEl: ".ind-news__banner-list .swiper-controls .swiper-button-next",
        prevEl: ".ind-news__banner-list .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
    }
});


//! Menu 

$('#menu-open').on('click', function() {
    $(this).addClass('display-n')
    $('#menu-close').removeClass('display-n')
    $('#menu').removeClass('display-n')
});
$('#menu-close').on('click', function() {
    $(this).addClass('display-n')
    $('#menu-open').removeClass('display-n')
    $('#menu').addClass('display-n')
});
var cardElementSlider = new Swiper(".cardElementSlider", {
    navigation: {
        nextEl: ".card-headers__add-slider .swiper-controls .swiper-button-next",
        prevEl: ".card-headers__add-slider .swiper-controls .swiper-button-prev",
    },
    keyboard: true,
    slidesPerView: 4,
    spaceBetweenSlides: 40,
});
//! Tabs 

$('#categoryTabsButton-1').on('click', function() {
    $(this).addClass('cat-content__add-tabs-item-active')
    $('#categoryTabsButton-2').removeClass('cat-content__add-tabs-item-active')
    $('#categoryTabsButton-3').removeClass('cat-content__add-tabs-item-active')
    $('#categoryTabsElement-1').removeClass('display-n')
    $('#categoryTabsElement-2').addClass('display-n')
    $('#categoryTabsElement-3').addClass('display-n')
})
$('#categoryTabsButton-2').on('click', function() {
    $(this).addClass('cat-content__add-tabs-item-active')
    $('#categoryTabsButton-1').removeClass('cat-content__add-tabs-item-active')
    $('#categoryTabsButton-3').removeClass('cat-content__add-tabs-item-active')
    $('#categoryTabsElement-2').removeClass('display-n')
    $('#categoryTabsElement-1').addClass('display-n')
    $('#categoryTabsElement-3').addClass('display-n')
})
$('#categoryTabsButton-3').on('click', function() {
    $(this).addClass('cat-content__add-tabs-item-active')
    $('#categoryTabsButton-2').removeClass('cat-content__add-tabs-item-active')
    $('#categoryTabsButton-1').removeClass('cat-content__add-tabs-item-active')
    $('#categoryTabsElement-3').removeClass('display-n')
    $('#categoryTabsElement-2').addClass('display-n')
    $('#categoryTabsElement-1').addClass('display-n')
})


//! Content 



$('#categoryContentButton-1').on('click', function() {
    $(this).addClass('cat-content__block-count-item-active')
    $(this).removeClass('opacity-5')
    $('#categoryContentButton-3').addClass('opacity-5')
    $('#categoryContentButton-4').addClass('opacity-5')
    $('#categoryContentButton-2').addClass('opacity-5')
    $('#categoryContentButton-2').removeClass('cat-content__block-count-item-active')
    $('#categoryContentButton-3').removeClass('cat-content__block-count-item-active')
    $('#categoryContentButton-4').removeClass('cat-content__block-count-item-active')
    $('#categoryContentElement-1').removeClass('display-n')
    $('#categoryContentElement-2').addClass('display-n')
    $('#categoryContentElement-3').addClass('display-n')
    $('#categoryContentElement-4').addClass('display-n')
    $('#categoryButtonPrev').addClass('blocking')
    $('#categoryButtonNext').removeClass('blocking')
})
$('#categoryContentButton-2').on('click', function() {
    $(this).addClass('cat-content__block-count-item-active')
    $(this).removeClass('opacity-5')
    $('#categoryContentButton-1').addClass('opacity-5')
    $('#categoryContentButton-3').addClass('opacity-5')
    $('#categoryContentButton-4').addClass('opacity-5')
    $('#categoryContentButton-1').removeClass('cat-content__block-count-item-active')
    $('#categoryContentButton-3').removeClass('cat-content__block-count-item-active')
    $('#categoryContentButton-4').removeClass('cat-content__block-count-item-active')
    $('#categoryContentElement-2').removeClass('display-n')
    $('#categoryContentElement-1').addClass('display-n')
    $('#categoryContentElement-3').addClass('display-n')
    $('#categoryContentElement-4').addClass('display-n')
    $('#categoryButtonPrev').removeClass('blocking')
    $('#categoryButtonNext').removeClass('blocking')
})
$('#categoryContentButton-3').on('click', function() {
    $(this).addClass('cat-content__block-count-item-active')
    $(this).removeClass('opacity-5')
    $('#categoryContentButton-2').addClass('opacity-5')
    $('#categoryContentButton-1').addClass('opacity-5')
    $('#categoryContentButton-4').addClass('opacity-5')
    $('#categoryContentButton-2').removeClass('cat-content__block-count-item-active')
    $('#categoryContentButton-1').removeClass('cat-content__block-count-item-active')
    $('#categoryContentButton-4').removeClass('cat-content__block-count-item-active')
    $('#categoryContentElement-3').removeClass('display-n')
    $('#categoryContentElement-2').addClass('display-n')
    $('#categoryContentElement-1').addClass('display-n')
    $('#categoryContentElement-4').addClass('display-n')
    $('#categoryButtonPrev').removeClass('blocking')
    $('#categoryButtonNext').removeClass('blocking')
})
$('#categoryContentButton-4').on('click', function() {
    $(this).addClass('cat-content__block-count-item-active')
    $(this).removeClass('opacity-5')
    $('#categoryContentButton-2').addClass('opacity-5')
    $('#categoryContentButton-3').addClass('opacity-5')
    $('#categoryContentButton-1').addClass('opacity-5')
    $('#categoryContentButton-2').removeClass('cat-content__block-count-item-active')
    $('#categoryContentButton-3').removeClass('cat-content__block-count-item-active')
    $('#categoryContentButton-1').removeClass('cat-content__block-count-item-active')
    $('#categoryContentElement-4').removeClass('display-n')
    $('#categoryContentElement-2').addClass('display-n')
    $('#categoryContentElement-3').addClass('display-n')
    $('#categoryContentElement-1').addClass('display-n')
    $('#categoryButtonNext').addClass('blocking')
    $('#categoryButtonPrev').removeClass('blocking')
})

// $('#categoryButtonNext').on('click', function() {
//     if($('#categoryContentButton-1').has('cat-content__block-count-item-active')) {
//         $('#categoryContentButton-2').addClass('cat-content__block-count-item-active')
//         $('#categoryContentButton-2').removeClass('opacity-5')
//         $('#categoryContentButton-1').addClass('opacity-5')
//         $('#categoryContentButton-3').addClass('opacity-5')
//         $('#categoryContentButton-4').addClass('opacity-5')
//         $('#categoryContentButton-1').removeClass('cat-content__block-count-item-active')
//         $('#categoryContentButton-3').removeClass('cat-content__block-count-item-active')
//         $('#categoryContentButton-4').removeClass('cat-content__block-count-item-active')
//         $('#categoryContentElement-2').removeClass('display-n')
//         $('#categoryContentElement-1').addClass('display-n')
//         $('#categoryContentElement-3').addClass('display-n')
//         $('#categoryContentElement-4').addClass('display-n')
//         $('#categoryButtonPrev').removeClass('blocking')
//         $('#categoryButtonNext').removeClass('blocking')
//     } else if ($('#categoryContentButton-2').has('cat-content__block-count-item-active')) {
//         $('#categoryContentButton-3').addClass('cat-content__block-count-item-active')
//         $('#categoryContentButton-3').removeClass('opacity-5')
//         $('#categoryContentButton-2').addClass('opacity-5')
//         $('#categoryContentButton-1').addClass('opacity-5')
//         $('#categoryContentButton-4').addClass('opacity-5')
//         $('#categoryContentButton-2').removeClass('cat-content__block-count-item-active')
//         $('#categoryContentButton-1').removeClass('cat-content__block-count-item-active')
//         $('#categoryContentButton-4').removeClass('cat-content__block-count-item-active')
//         $('#categoryContentElement-3').removeClass('display-n')
//         $('#categoryContentElement-2').addClass('display-n')
//         $('#categoryContentElement-1').addClass('display-n')
//         $('#categoryContentElement-4').addClass('display-n')
//         $('#categoryButtonPrev').removeClass('blocking')
//         $('#categoryButtonNext').removeClass('blocking')
//     }
// });



let activeContentIndex = 0
let elementContentCount = 4

$('#categoryButtonNext').on('click', function() {
    changeSlide('next')
})

$('#categoryButtonPrev').on('click', function() {
    changeSlide('prev')
})

function changeSlide(id) { 
    if(id === 'next') {
        activeContentIndex++
        if (activeContentIndex === elementContentCount) {
            activeContentIndex = 0
        } 
    } else if (id === 'prev') {
        activeContentIndex--
        if (activeContentIndex < 0) {
            activeContentIndex = elementContentCount - 1
        }
    }
    if(activeContentIndex == 0) {
        $('#categoryContentButton-1').addClass('cat-content__block-count-item-active')
        $('#categoryContentButton-1').removeClass('opacity-5')
        $('#categoryContentButton-3').addClass('opacity-5')
        $('#categoryContentButton-4').addClass('opacity-5')
        $('#categoryContentButton-2').addClass('opacity-5')
        $('#categoryContentButton-2').removeClass('cat-content__block-count-item-active')
        $('#categoryContentButton-3').removeClass('cat-content__block-count-item-active')
        $('#categoryContentButton-4').removeClass('cat-content__block-count-item-active')
        $('#categoryContentElement-1').removeClass('display-n')
        $('#categoryContentElement-2').addClass('display-n')
        $('#categoryContentElement-3').addClass('display-n')
        $('#categoryContentElement-4').addClass('display-n')
        $('#categoryButtonPrev').addClass('blocking')
        $('#categoryButtonNext').removeClass('blocking')
    }
    if(activeContentIndex == 1) {
        $('#categoryContentButton-2').addClass('cat-content__block-count-item-active')
        $('#categoryContentButton-2').removeClass('opacity-5')
        $('#categoryContentButton-1').addClass('opacity-5')
        $('#categoryContentButton-3').addClass('opacity-5')
        $('#categoryContentButton-4').addClass('opacity-5')
        $('#categoryContentButton-1').removeClass('cat-content__block-count-item-active')
        $('#categoryContentButton-3').removeClass('cat-content__block-count-item-active')
        $('#categoryContentButton-4').removeClass('cat-content__block-count-item-active')
        $('#categoryContentElement-2').removeClass('display-n')
        $('#categoryContentElement-1').addClass('display-n')
        $('#categoryContentElement-3').addClass('display-n')
        $('#categoryContentElement-4').addClass('display-n')
        $('#categoryButtonPrev').removeClass('blocking')
        $('#categoryButtonNext').removeClass('blocking')
    }
    if(activeContentIndex == 2) {
        $('#categoryContentButton-3').addClass('cat-content__block-count-item-active')
        $('#categoryContentButton-3').removeClass('opacity-5')
        $('#categoryContentButton-2').addClass('opacity-5')
        $('#categoryContentButton-1').addClass('opacity-5')
        $('#categoryContentButton-4').addClass('opacity-5')
        $('#categoryContentButton-2').removeClass('cat-content__block-count-item-active')
        $('#categoryContentButton-1').removeClass('cat-content__block-count-item-active')
        $('#categoryContentButton-4').removeClass('cat-content__block-count-item-active')
        $('#categoryContentElement-3').removeClass('display-n')
        $('#categoryContentElement-2').addClass('display-n')
        $('#categoryContentElement-1').addClass('display-n')
        $('#categoryContentElement-4').addClass('display-n')
        $('#categoryButtonPrev').removeClass('blocking')
        $('#categoryButtonNext').removeClass('blocking')
    }
    if(activeContentIndex == 3) {
        $('#categoryContentButton-4').addClass('cat-content__block-count-item-active')
        $('#categoryContentButton-4').removeClass('opacity-5')
        $('#categoryContentButton-2').addClass('opacity-5')
        $('#categoryContentButton-3').addClass('opacity-5')
        $('#categoryContentButton-1').addClass('opacity-5')
        $('#categoryContentButton-2').removeClass('cat-content__block-count-item-active')
        $('#categoryContentButton-3').removeClass('cat-content__block-count-item-active')
        $('#categoryContentButton-1').removeClass('cat-content__block-count-item-active')
        $('#categoryContentElement-4').removeClass('display-n')
        $('#categoryContentElement-2').addClass('display-n')
        $('#categoryContentElement-3').addClass('display-n')
        $('#categoryContentElement-1').addClass('display-n')
        $('#categoryButtonNext').addClass('blocking')
        $('#categoryButtonPrev').removeClass('blocking')
    }
}

$('#catalogButtonAdd').on('click', function() {
    $(this).addClass('display-n')
    $('#catalogContentAdd').removeClass('display-n')
    $('#catalogButtonClose').removeClass('display-n')
});
$('#catalogButtonClose').on('click', function() {
    $(this).addClass('display-n')
    $('#catalogContentAdd').addClass('display-n')
    $('#catalogButtonAdd').removeClass('display-n')
});