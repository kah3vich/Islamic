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