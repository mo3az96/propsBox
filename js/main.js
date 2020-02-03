$(function () {
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});
$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");


    });
});
$(document).ready(function () {
    $('body,html').scrollTop(0)
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        autoplay: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                autoplay: false,
            },
            768: {
                items: 1,
                dots: true,
                nav: true
            },
        }
    });

    /////////Products Slider/////////
    $('.Product-slider').owlCarousel({
        items: 5,
        autoplay: false,
        margin: 10,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,

        nav: true,
        dots: false,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 2,
                autoplay: true,
                dots: true,
                nav: false,
            },
            500: {
                items: 3,
                dots: true,
                nav: false,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });

    /////////Brands Slider/////////
    $('.brand-slider').owlCarousel({
        items: 7,
        stagePadding: 1,
        margin: 31,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        dots: false,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 2,
                autoplay: true,
                dots: true,
                nav: false,
            },
            500: {
                items: 4,
                dots: true,
                nav: false,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 7
            }
        }
    });

    if ($(window).width() > 767) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 1) {
                $("header").addClass("fixed-header");
            } else {
                $("header").removeClass("fixed-header");
            }
        });
    }

    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
        $('.search-input').focus();
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
        $(".search-cont").removeClass("search-in");
        $('.search-input').focusOut();
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
        $(".mega-head").addClass("mo-accordion");
        $(".mega-ul").addClass("mo-panel");
        $(".megamenu-div").wrap("<div class='megaslide'></div>");

        $('.mo-menu-icon').click(function () {
            $(".navbar-cont").fadeIn(400);
            $(".mo-navbar").addClass("nav-in");
            $("body").toggleClass("overflow");
        });

        $('.navbar-cont').click(function () {
            $(".navbar-cont").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $(".navbar-cont").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });

        $('.mo-accordion').click(function () {
            var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
            $(".mo-accordion").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('max-height') == '0px') {
                $(this).siblings().css('max-height', x);
                $(this).siblings().css('padding-top', "15px");
            } else {
                $(this).siblings().css('max-height', '0');
                $(this).siblings().css('padding-top', "0");
            }

            $(".mo-accordion").not(this).siblings().css('max-height', '0');
            $(".mo-accordion").not(this).siblings().css('padding-top', "0");
        })

        $('.brop-link .nav-anchor').click(function () {
            $(this).siblings().slideToggle(500);

        })
        $(".gallery .col-md-4").unwrap();
        $(".gallery .gallery-img").unwrap();
        $(".gallery .gallery-img").wrap("<div class='item'></div>");

        $(".gallery").addClass("owl-carousel");

        $('.gallery').owlCarousel({
            items: 1,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            rewind: true,
            autoplay: false,
            nav: false,
            dots: true,
        });
    }
});