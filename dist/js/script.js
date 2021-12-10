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
    changeSlide(0)
})
$('#categoryContentButton-2').on('click', function() {
    changeSlide(1)
})
$('#categoryContentButton-3').on('click', function() {
    changeSlide(2)
})
$('#categoryContentButton-4').on('click', function() {
    changeSlide(3)
})



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
    if(id == 0) {
        activeContentIndex = 0
        $('#categoryContentElement-1').removeClass('display-n')
        $('#categoryContentElement-2').addClass('display-n')
        $('#categoryContentElement-3').addClass('display-n')
        $('#categoryContentElement-4').addClass('display-n')
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
    if(id == 1) {
        activeContentIndex = 1
        $('#categoryContentElement-2').removeClass('display-n')
        $('#categoryContentElement-1').addClass('display-n')
        $('#categoryContentElement-3').addClass('display-n')
        $('#categoryContentElement-4').addClass('display-n')
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
    if(id == 2) {
        activeContentIndex = 2
        $('#categoryContentElement-3').removeClass('display-n')
        $('#categoryContentElement-2').addClass('display-n')
        $('#categoryContentElement-1').addClass('display-n')
        $('#categoryContentElement-4').addClass('display-n')
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
    if(id == 3) {
        activeContentIndex = 3
        $('#categoryContentElement-4').removeClass('display-n')
        $('#categoryContentElement-2').addClass('display-n')
        $('#categoryContentElement-3').addClass('display-n')
        $('#categoryContentElement-1').addClass('display-n')
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


//! Открытие фильтра 

$('.catl-headers__nav-text-filter-block').on('click', function() {
    $('.catl-headers__nav-text-filter-wrapper').toggleClass('display-n');
});


//! -------------------------------------------------------------------------------


//! Передача значение из input range

$('#marchRange-1').on('input',function () {
    $('.catl-headers__nav-text-filter-range-value-1').empty().append($(this).val());
});
$('#marchRange-2').on('input',function () {
    $('.catl-headers__nav-text-filter-range-value-2').empty().append($(this).val());
});

//! -------------------------------------------------------------------------------


//! Сброс всех input в фильтре 

const marchRange_1 = 1680;
const marchRange_2 = 16090;
$('.catl-headers__nav-text-filter-discard').on('click', function() {
    $('#checkbox_1').prop('checked', false);
    $('#checkbox_2').prop('checked', false);
    $('#checkbox_3').prop('checked', false);
    $('#checkbox_4').prop('checked', false);
    $('#checkbox_5').prop('checked', false);
    $('#checkbox_6').prop('checked', true);
    $('#marchRange-1').val(marchRange_1);
    $('.catl-headers__nav-text-filter-range-value-1').empty().append($('#marchRange-1').val());
    $('#marchRange-2').val(marchRange_2);
    $('.catl-headers__nav-text-filter-range-value-2').empty().append($('#marchRange-2').val());
});
$('#detailAddTabsButton-1').on('click', function() {
    $(this).addClass('det-content__add-tabs-item-active')
    $('#detailAddTabsButton-2').removeClass('det-content__add-tabs-item-active')
    $('#detailAddTabsButton-3').removeClass('det-content__add-tabs-item-active')
});
$('#detailAddTabsButton-2').on('click', function() {
    $(this).addClass('det-content__add-tabs-item-active')
    $('#detailAddTabsButton-1').removeClass('det-content__add-tabs-item-active')
    $('#detailAddTabsButton-3').removeClass('det-content__add-tabs-item-active')
});
$('#detailAddTabsButton-3').on('click', function() {
    $(this).addClass('det-content__add-tabs-item-active')
    $('#detailAddTabsButton-2').removeClass('det-content__add-tabs-item-active')
    $('#detailAddTabsButton-1').removeClass('det-content__add-tabs-item-active')
});


$('.det-message__block-btn').on('click', function() {
    if ($('.det-message__block-textarea').val() == '') {
        $('.det-message__block-textarea').css('border', '1px solid #FF0000')
    } else {
        $('.det-message__block-textarea').css('border', '1px solid #e1e1e1')
    }
});
$('#payMethodItems-1').on('click', function() {
    $(this).addClass('pay__block-info-method-items-active')
    $('#payMethodItems-2').removeClass('pay__block-info-method-items-active')
    $('#payMethodItems-1 .pay__block-info-method-items-circle').addClass('pay__block-info-method-items-circle-active')
    $('#payMethodItems-2 .pay__block-info-method-items-circle').removeClass('pay__block-info-method-items-circle-active')
});

$('#payMethodItems-2').on('click', function() {
    $(this).addClass('pay__block-info-method-items-active')
    $('#payMethodItems-1').removeClass('pay__block-info-method-items-active')
    $('#payMethodItems-2 .pay__block-info-method-items-circle').addClass('pay__block-info-method-items-circle-active')
    $('#payMethodItems-1 .pay__block-info-method-items-circle').removeClass('pay__block-info-method-items-circle-active')
});


$('.search-header__block-input-btn').on('click', function() {
    if ( $('.search-header__block-input-items input').val() == '' ) {
        $('.search-header__block-error').removeClass('display-n')
        $('.search-header__block-count').addClass('display-n')
    } else {
        $('.search-header__block-error').addClass('display-n')
        $('.search-header__block-count').removeClass('display-n')
        $('.search-news').removeClass('display-n')
    }
});


$('#searchContentButton-1').on('click', function() {
    changeSlide(0)
})
$('#searchContentButton-2').on('click', function() {
    changeSlide(1)
})
$('#searchContentButton-3').on('click', function() {
    changeSlide(2)
})
$('#searchContentButton-4').on('click', function() {
    changeSlide(3)
})

let activeContentSearch = 0
let elementContentCountSearch = 4

$('#searchButtonNext').on('click', function() {
    changeSlide('next')
})

$('#searchButtonPrev').on('click', function() {
    changeSlide('prev')
})

function changeSlide(id) { 
    if(id === 'next') {
        activeContentSearch++
        if (activeContentSearch === elementContentCountSearch) {
            activeContentSearch = 0
        } 
    } else if (id === 'prev') {
        activeContentSearch--
        if (activeContentSearch < 0) {
            activeContentSearch = elementContentCountSearch - 1
        }
    }
    if(activeContentSearch == 0) {
        $('#searchContentButton-1').addClass('cat-content__block-count-item-active')
        $('#searchContentButton-1').removeClass('opacity-5')
        $('#searchContentButton-3').addClass('opacity-5')
        $('#searchContentButton-4').addClass('opacity-5')
        $('#searchContentButton-2').addClass('opacity-5')
        $('#searchContentButton-2').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-3').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-4').removeClass('cat-content__block-count-item-active')
        $('#searchContentElement-1').removeClass('display-n')
        $('#searchContentElement-2').addClass('display-n')
        $('#searchContentElement-3').addClass('display-n')
        $('#searchContentElement-4').addClass('display-n')
        $('#searchButtonPrev').addClass('blocking')
        $('#searchButtonNext').removeClass('blocking')
    }
    if(activeContentSearch == 1) {
        $('#searchContentButton-2').addClass('cat-content__block-count-item-active')
        $('#searchContentButton-2').removeClass('opacity-5')
        $('#searchContentButton-1').addClass('opacity-5')
        $('#searchContentButton-3').addClass('opacity-5')
        $('#searchContentButton-4').addClass('opacity-5')
        $('#searchContentButton-1').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-3').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-4').removeClass('cat-content__block-count-item-active')
        $('#searchContentElement-2').removeClass('display-n')
        $('#searchContentElement-1').addClass('display-n')
        $('#searchContentElement-3').addClass('display-n')
        $('#searchContentElement-4').addClass('display-n')
        $('#searchButtonPrev').removeClass('blocking')
        $('#searchButtonNext').removeClass('blocking')
    }
    if(activeContentSearch == 2) {
        $('#searchContentButton-3').addClass('cat-content__block-count-item-active')
        $('#searchContentButton-3').removeClass('opacity-5')
        $('#searchContentButton-2').addClass('opacity-5')
        $('#searchContentButton-1').addClass('opacity-5')
        $('#searchContentButton-4').addClass('opacity-5')
        $('#searchContentButton-2').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-1').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-4').removeClass('cat-content__block-count-item-active')
        $('#searchContentElement-3').removeClass('display-n')
        $('#searchContentElement-2').addClass('display-n')
        $('#searchContentElement-1').addClass('display-n')
        $('#searchContentElement-4').addClass('display-n')
        $('#searchButtonPrev').removeClass('blocking')
        $('#searchButtonNext').removeClass('blocking')
    }
    if(activeContentSearch == 3) {
        $('#searchContentButton-4').addClass('cat-content__block-count-item-active')
        $('#searchContentButton-4').removeClass('opacity-5')
        $('#searchContentButton-2').addClass('opacity-5')
        $('#searchContentButton-3').addClass('opacity-5')
        $('#searchContentButton-1').addClass('opacity-5')
        $('#searchContentButton-2').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-3').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-1').removeClass('cat-content__block-count-item-active')
        $('#searchContentElement-4').removeClass('display-n')
        $('#searchContentElement-2').addClass('display-n')
        $('#searchContentElement-3').addClass('display-n')
        $('#searchContentElement-1').addClass('display-n')
        $('#searchButtonNext').addClass('blocking')
        $('#searchButtonPrev').removeClass('blocking')
    }
    if(id == 0) {
        activeContentSearch = 0
        $('#searchContentElement-1').removeClass('display-n')
        $('#searchContentElement-2').addClass('display-n')
        $('#searchContentElement-3').addClass('display-n')
        $('#searchContentElement-4').addClass('display-n')
        $('#searchContentButton-1').addClass('cat-content__block-count-item-active')
        $('#searchContentButton-1').removeClass('opacity-5')
        $('#searchContentButton-3').addClass('opacity-5')
        $('#searchContentButton-4').addClass('opacity-5')
        $('#searchContentButton-2').addClass('opacity-5')
        $('#searchContentButton-2').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-3').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-4').removeClass('cat-content__block-count-item-active')
        $('#searchContentElement-1').removeClass('display-n')
        $('#searchContentElement-2').addClass('display-n')
        $('#searchContentElement-3').addClass('display-n')
        $('#searchContentElement-4').addClass('display-n')
        $('#searchButtonPrev').addClass('blocking')
        $('#searchButtonNext').removeClass('blocking')
    }
    if(id == 1) {
        activeContentSearch = 1
        $('#searchContentElement-2').removeClass('display-n')
        $('#searchContentElement-1').addClass('display-n')
        $('#searchContentElement-3').addClass('display-n')
        $('#searchContentElement-4').addClass('display-n')
        $('#searchContentButton-2').addClass('cat-content__block-count-item-active')
        $('#searchContentButton-2').removeClass('opacity-5')
        $('#searchContentButton-1').addClass('opacity-5')
        $('#searchContentButton-3').addClass('opacity-5')
        $('#searchContentButton-4').addClass('opacity-5')
        $('#searchContentButton-1').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-3').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-4').removeClass('cat-content__block-count-item-active')
        $('#searchContentElement-2').removeClass('display-n')
        $('#searchContentElement-1').addClass('display-n')
        $('#searchContentElement-3').addClass('display-n')
        $('#searchContentElement-4').addClass('display-n')
        $('#searchButtonPrev').removeClass('blocking')
        $('#searchButtonNext').removeClass('blocking')
    }
    if(id == 2) {
        activeContentSearch = 2
        $('#searchContentElement-3').removeClass('display-n')
        $('#searchContentElement-2').addClass('display-n')
        $('#searchContentElement-1').addClass('display-n')
        $('#searchContentElement-4').addClass('display-n')
        $('#searchContentButton-3').addClass('cat-content__block-count-item-active')
        $('#searchContentButton-3').removeClass('opacity-5')
        $('#searchContentButton-2').addClass('opacity-5')
        $('#searchContentButton-1').addClass('opacity-5')
        $('#searchContentButton-4').addClass('opacity-5')
        $('#searchContentButton-2').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-1').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-4').removeClass('cat-content__block-count-item-active')
        $('#searchContentElement-3').removeClass('display-n')
        $('#searchContentElement-2').addClass('display-n')
        $('#searchContentElement-1').addClass('display-n')
        $('#searchContentElement-4').addClass('display-n')
        $('#searchButtonPrev').removeClass('blocking')
        $('#searchButtonNext').removeClass('blocking')
    }
    if(id == 3) {
        activeContentSearch = 3
        $('#searchContentElement-4').removeClass('display-n')
        $('#searchContentElement-2').addClass('display-n')
        $('#searchContentElement-3').addClass('display-n')
        $('#searchContentElement-1').addClass('display-n')
        $('#searchContentButton-4').addClass('cat-content__block-count-item-active')
        $('#searchContentButton-4').removeClass('opacity-5')
        $('#searchContentButton-2').addClass('opacity-5')
        $('#searchContentButton-3').addClass('opacity-5')
        $('#searchContentButton-1').addClass('opacity-5')
        $('#searchContentButton-2').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-3').removeClass('cat-content__block-count-item-active')
        $('#searchContentButton-1').removeClass('cat-content__block-count-item-active')
        $('#searchContentElement-4').removeClass('display-n')
        $('#searchContentElement-2').addClass('display-n')
        $('#searchContentElement-3').addClass('display-n')
        $('#searchContentElement-1').addClass('display-n')
        $('#searchButtonNext').addClass('blocking')
        $('#searchButtonPrev').removeClass('blocking')
    }
}