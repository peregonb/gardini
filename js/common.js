$(document).ready(function() {
    $('.services-carousel').slick({
        arrows: false,
        dots: true
    });
    $("#top").click(function() {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });




function scrollbarWidth() {
    var block = $('<div>').css({ 'height': '50px', 'width': '50px' }),
        indicator = $('<div>').css({ 'height': '200px' });

    $('body').append(block.append(indicator));
    var w1 = $('div', block).innerWidth();
    block.css('overflow-y', 'scroll');
    var w2 = $('div', block).innerWidth();
    $(block).remove();
    return (w1 - w2);
}



$(window).resize(function() {
    var winwidth = $(window).outerWidth();
    if (winwidth > 991 - scrollbarWidth()) {
        $('.header-menu').css("display", "flex");
        $('.header-menu').css("display", "-webkit-flex");
        $('.hamburger').removeClass('is-active');

    } else if (winwidth < 992 - scrollbarWidth()) {
        $('.header-menu').css("display", "none");
        $('.hamburger').removeClass('is-active');
    }
});










    $(function() {
        var shrinkHeader = 1;
        $(window).scroll(function() {

            // 
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('header').addClass('shrink');
                $('li').addClass('white');
                $('.brand-text').addClass('brand-text-e');
                $('.header-lang-block-selected').css("border-bottom", "4px solid white");
                $('.hamburger .line').css("background-color", "white");
                $('.header-menu').css("top", "60px");

            } else {
                $('header').removeClass('shrink');
                $('li').removeClass('white');
                $('.brand-text').removeClass('brand-text-e');
                $('.header-lang-block-selected').css("border-bottom", "none");
                $('.hamburger .line').css("background-color", "black");
                $('.header-menu').css("top", "75px");
            }




        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });









    $(window).ready(function() {
        var winwidth = $(window).outerWidth();
        if (winwidth > 991) {
            $('.header-menu').css("display", "inherit");

        } else if (winwidth < 992) {
            $(".header-menu").hide();
        }
    });






    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });
    $('.hamburger').click(function() {
        $('.header-menu').slideToggle({ top: 'toggle' });

    });

});



