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