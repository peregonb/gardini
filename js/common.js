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
                $('.header-menu').css("top", "60px");

                $(".header-menu>li").hover(function() {
                    $(this).css("border-bottom", "4px solid white");
                }, function() {
                    $(this).css("border-bottom", "4px solid transparent");
                });

                
            } else {
                $('header').removeClass('shrink');
                $('li').removeClass('white');
                $('.brand-text').removeClass('brand-text-e');
                $('.candibober-brand').css("display", "inherit");
                $('.header-lang-block-selected').css("border-bottom", "none");
                $('.hamburger .line').css("background-color", "black");
                $('.header-menu').css("top", "75px");

                $(".header-menu>li").hover(function() {
                    $(this).css("border-bottom", "4px solid black");
                }, function() {
                    $(this).css("border-bottom", "4px solid transparent");
                });

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
            $(".header-menu>li").hover(function() {
                $(this).css("border-bottom", "4px solid black");
            }, function() {
                $(this).css("border-bottom", "4px solid transparent");
            });

        } else if (winwidth < 992) {
            $(".header-menu").hide();
            $(".header-menu>li").hover(function() {
                $(this).css("border-left", "4px solid white");
                $(this).css("border-bottom", "4px solid transparent");
            }, function() {
                $(this).css("border-left", "4px solid transparent");
                $(this).css("border-bottom", "4px solid transparent");
            });
        }
    });


    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });
    $('.hamburger').click(function() {
        $('.header-menu').slideToggle({ top: 'toggle' });

    });

});

$(window).resize(function() {
    var winwidth = $(window).outerWidth();
    if (winwidth > 991) {
        $('.header-menu').css("display", "flex");
        $(".header-menu>li").hover(function() {
            $(this).css("border-bottom", "4px solid black");
        }, function() {
            $(this).css("border-bottom", "4px solid transparent");
        });
        $('.hamburger').removeClass('is-active');

    } else if (winwidth < 992) {
        $('.header-menu').css("display", "none");
        $(".header-menu>li").hover(function() {
                $(this).css("border-left", "4px solid white");
                $(this).css("border-bottom", "4px solid transparent");
        }, function() {
                $(this).css("border-left", "4px solid transparent");
                $(this).css("border-bottom", "4px solid transparent");
        });
        $('.hamburger').removeClass('is-active');
    }
});