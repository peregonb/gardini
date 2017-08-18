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
            } else {
                $('header').removeClass('shrink');
                $('li').removeClass('white');
                $('.brand-text').removeClass('brand-text-e');
                $('.candibober-brand').css("display", "inherit");
                $('.header-lang-block-selected').css("border-bottom", "none");
            }
        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });
});