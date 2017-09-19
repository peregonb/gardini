$(document).ready(function() {
$('.slider2').find('.slick-list').find('.slick-track').children('.slick-active').eq(1).addClass('center');
    $('.services-carousel').slick({
        arrows: true,
        dots: true
    }); 
       $('.slider2').slick({
        arrows: true,
        dots: false,
        infinite: true,
  slidesToShow: 3,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });
    $("#top").click(function() {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

$('.index-bg').css("height", "100vh");
$('.index-content').css("height", "100vh");
$('.index-button').css("margin-top", "10vh");
$('.down-button').css("bottom", "3vh");

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
                // $('.header-lang-block-selected').css("border-bottom", "4px solid white");
                // $('.header-lang-block-selected').css("background-color", "transparent");
                $('.hamburger .line').css("background-color", "white");
                $('.header-menu').css("top", "60px");

            } else {
                $('header').removeClass('shrink');
                $('li').removeClass('white');
                $('.brand-text').removeClass('brand-text-e');
                // $('.header-lang-block-selected').css("border-bottom", "transparent solid 4px");
                // $('.header-lang-block-selected').css("background-color", "#ff4202");
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

function initMap() {
        var uluru = { lat: 50.402335, lng: 30.624691 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            icon: {
                url: "img/mark.svg",
                scaledSize: new google.maps.Size(29, 35)
            }
        });
    }

$('a[href^="#"]').click(function() {
$('html,body').animate({ scrollTop: $(this.hash).offset().top-60});
return false;
e.preventDefault();
});


    $('.header-lang-block-1').on('click', function(e) {
      $('.header-lang-block-1').addClass("header-lang-block-selected"); //you can list several class names 
      $('.header-lang-block-2').removeClass("header-lang-block-selected");
    });

    $('.header-lang-block-2').on('click', function(e) {
      $('.header-lang-block-2').addClass("header-lang-block-selected"); //you can list several class names
      $('.header-lang-block-1').removeClass("header-lang-block-selected"); 
    });


document.getElementById('feedback-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nМы Вам перезвоним в течении N часов.\nБлагодарю за сотрудничество!');    
      f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.messageFF.value='';
    }
  }
  http.onerror = function() {
    alert('Ваше сообщение не получено. \nПопробуйте позже.');
  }
}, false);