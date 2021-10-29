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
        950: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
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
        950: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },
        550: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        0: {
            slidesPerView: 1,
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
        950: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },
        600: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        0: {
            slidesPerView: 1,
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
        800: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        550: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
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
        650: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        },
    }
});


//! Menu 

$('#menu-open').on('click', function() {
    if(window.innerWidth <= 1000) {

    } else {
        $(this).addClass('display-n')
        $('#menu-close').removeClass('display-n')
        $('#menu').removeClass('display-n')
    }
});
$('#menu-close').on('click', function() {
    if(window.innerWidth <= 1000) {

    } else {
        $(this).addClass('display-n')
        $('#menu-open').removeClass('display-n')
        $('#menu').addClass('display-n')
    }
});


//! Custom selector header 

$(function() {
    $('#language').css('display', 'none')
    $('#language').after('<div class="language-select-item"><div class="language-select-placeholder">english</div><div id="languageSelectorHeader" class="language-select-wrapper display-n"></div></div>')
    let count = $('#language').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#language').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("language-select-element")
        newElementBlock.id = `language-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("languageSelectorHeader").appendChild(newElementBlock);
        $(`#language-select-element-${i}`).attr('value', `${arrows}`)
    }
    $('#language-select-element-0').css('display', 'none')
    $('.language-select-item').on('click', function() {
        $('.language-select-wrapper').toggleClass('display-n')
        $('.language-select-item').toggleClass('language-select-item-active')
    })
    $(".language-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.language-select-placeholder').html(valueElement)
        $('#language option:nth-child(1)').val(valueElement)
        $('#language option:nth-child(1)').html(valueElement)
    })
})
