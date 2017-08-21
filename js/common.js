$(document).ready(function() {
    $("#top").click(function() {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(function() {
        var shrinkHeader = 1;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('header').addClass('shrink');
                $('li').addClass('white');
                $('.brand-text').addClass('brand-text-e');
                $('.candibober-brand').css("display", "none");
                $('.header-lang-block-selected').css("border-bottom", "4px solid white");
                $('.hamburger .line').css("background-color", "white");
                $('nav.header-menu').css("top", "60px");
            } else {
                $('header').removeClass('shrink');
                $('li').removeClass('white');
                $('.brand-text').removeClass('brand-text-e');
                $('.candibober-brand').css("display", "inherit");
                $('.header-lang-block-selected').css("border-bottom", "none");
                $('.hamburger .line').css("background-color", "black");
                $('nav.header-menu').css("top", "75px");
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });
    $('.hamburger').click(function() {
    $('nav').slideToggle({ top: 'toggle' });
});

});

$(window).resize(function() {
    var winwidth = $(window).outerWidth();
    if (winwidth > 991 - scrollbarWidth()) {

    } else if (winwidth < 992 - scrollbarWidth()) {

    }
});