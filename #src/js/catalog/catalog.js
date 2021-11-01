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