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