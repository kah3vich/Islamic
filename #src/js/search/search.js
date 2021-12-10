

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