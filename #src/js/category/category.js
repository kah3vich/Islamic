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
