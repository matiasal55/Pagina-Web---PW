$(document).ready(function(){

    var resizeTimer;
    $(window).on('resize', function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if ($(window).width() > 600) {
                $('.menu').show();
            } else {
                $('.menu').hide();
            }
        }, 250);
    });



    $('#iconoMenu').on('click', function () {
        $('.menu').toggle();
    });



});
