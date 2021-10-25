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