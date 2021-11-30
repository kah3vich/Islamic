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
    if(window.innerWidth <= 1150) {
        $('#menuMedia').removeClass('display-n')
        $('body').css('overflow','hidden')
    } else {
        $(this).addClass('display-n')
        $('#menu-close').removeClass('display-n')
        $('#menu').removeClass('display-n')
    }
});
$('#menu-close').on('click', function() {
    if(window.innerWidth <= 1150) {
        $('#menuMedia').addClass('display-n')
    } else {
        $(this).addClass('display-n')
        $('#menu-open').removeClass('display-n')
        $('#menu').addClass('display-n')
    }
});
$('#menu-close-media').on('click', function() {
    $('#menuMedia').addClass('display-n')
    $('body').css('overflow','visible')
})


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


//! Login Client


$('#client-open').on('click', function() {
    $('.modelLogin').removeClass('display-n')
    $('.modelLogin__entry').removeClass('display-n')
    $('body').css('overflow','hidden')
})




$('.modelLogin__entry-btn').on('click', function() {
    if (($('.modelLogin__entry-email input').val()) == '') {
        $('.modelLogin__entry-email').css('border', '1px solid #FF0000')
    } else {
        $('.modelLogin__entry-email').css('border', '1px solid #ADD4A9')
    }
    if (($('.modelLogin__entry-password input').val()) == '') {
        $('.modelLogin__entry-password').css('border', '1px solid #FF0000')
    } else {
        $('.modelLogin__entry-password').css('border', '1px solid #ADD4A9')
    }
});

$('.modelLogin__reg-btn').on('click', function() {
    if (($('.modelLogin__reg-email input').val()) == '') {
        $('.modelLogin__reg-email').css('border', '1px solid #FF0000')
    } else {
        $('.modelLogin__reg-email').css('border', '1px solid #ADD4A9')
    }
    if (($('.modelLogin__reg-password input').val()) == '') {
        $('.modelLogin__reg-password').css('border', '1px solid #FF0000')
    } else {
        $('.modelLogin__reg-password').css('border', '1px solid #ADD4A9')
    }
    if (($('.modelLogin__reg-passwords input').val()) == '') {
        $('.modelLogin__reg-passwords').css('border', '1px solid #FF0000')
    } else {
        $('.modelLogin__reg-passwords').css('border', '1px solid #ADD4A9')
    }
    if (($('.modelLogin__reg-passwords input').val() != '') && ($('.modelLogin__reg-password input').val() != '') && ($('.modelLogin__reg-email input').val() != '')) {
        $('.modelLogin__regs').removeClass('display-n')
        $('.modelLogin__reg').addClass('display-n')
    }
});


$('.modelLogin__recovery-btn').on('click', function() {
    if (($('.modelLogin__recovery-email input').val()) == '') {
        $('.modelLogin__recovery-email').css('border', '1px solid #FF0000')
        $('.modelLogin__recovery-error').removeClass('display-n')
    } else {
        $('.modelLogin__recovery-email').css('border', '1px solid #ADD4A9')
        $('.modelLogin__recovery-error').addClass('display-n')
        $('.modelLogin__recoverys').removeClass('display-n')
        $('.modelLogin__recovery').addClass('display-n')
    }
});

$('.modelLogin__regs-close').on('click', function() {
    $('.modelLogin__entry').removeClass('display-n')
    $('.modelLogin__regs').addClass('display-n')
});


$('.modelLogin__entry-reg span').on('click', function() {
    $('.modelLogin__entry').addClass('display-n')
    $('.modelLogin__reg').removeClass('display-n')
});

$('.modelLogin__reg-reg span').on('click', function() {
    $('.modelLogin__reg').addClass('display-n')
    $('.modelLogin__entry').removeClass('display-n')
});

$('.modelLogin__reg-link').on('click', function() {
    $('.modelLogin__reg').addClass('display-n')
    $('.modelLogin__recovery').removeClass('display-n')
});
$('.modelLogin__entry-link').on('click', function() {
    $('.modelLogin__entry').addClass('display-n')
    $('.modelLogin__recovery').removeClass('display-n')
});


$('.modelLogin__recovery-close').on('click', function() {
    $('.modelLogin__entry').removeClass('display-n')
    $('.modelLogin__recovery').addClass('display-n')
});


$('.modelLogin__recoverys-close').on('click', function() {
    $('.modelLogin__entry').removeClass('display-n')
    $('.modelLogin__recoverys').addClass('display-n')
});


$('.modelLogin__reg-close').on('click', function() {
    $('.modelLogin__entry').addClass('display-n')
    $('.modelLogin__reg').addClass('display-n')
    $('.modelLogin').addClass('display-n')
    $('body').css('overflow','visible')
});
$('.modelLogin__entry-close').on('click', function() {
    $('.modelLogin__entry').addClass('display-n')
    $('.modelLogin__reg').addClass('display-n')
    $('.modelLogin').addClass('display-n')
    $('body').css('overflow','visible')
});

$('.modelLogin__recovery-reg span').on('click', function() {
    $('.modelLogin__entry').removeClass('display-n')
    $('.modelLogin__recovery').addClass('display-n')
});