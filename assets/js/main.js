$(document).ready(function () {
    $("body").append("<span class='sidebar-open-overlay'></span>");
    $(".topbar .submenu-link").click(function (e) {
        e.preventDefault();
        if ($(window).width() < 1140) {
            $(this).siblings().slideToggle().parent().siblings().children(".sub-menu").slideUp();
        }
    });
    $(".menu-toggler-btn").click(function (e) {
        e.preventDefault();
        if ($(window).width() < 1140) {
            $(".main-menu .menu").addClass("active");
            $(".sidebar-open-overlay").addClass("active");
        }
    });
    $(".navigation .close-btn,.sidebar-open-overlay").click(function (e) {
        e.preventDefault();
        $(".main-menu .menu").removeClass("active");
        $(".sidebar-open-overlay").removeClass("active");
    });
    $(".cart-toggler-btn").click(function (e) {
        e.preventDefault();
        $(".shopping-bag").addClass("active");
        $(".sidebar-open-overlay").addClass("active");
    });
    $(".shopping-bag .close-btn,.sidebar-open-overlay").click(function (e) {
        e.preventDefault();
        $(".shopping-bag").removeClass("active");
        $(".sidebar-open-overlay").removeClass("active");
    });
    $(".cuppon .head a").click(function (e) {
        e.preventDefault();
        $(".cuppon .body").slideToggle();
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".main-menu").addClass("scroll");
        } else {
            $(".main-menu").removeClass("scroll");
        }
    });
    $('input[name="payment-system"]').on("change", function () {
        var value = $('input[name="payment-system"]:checked').val();
        $('input[value="' + value + '"]:checked').parent().siblings().slideDown().parent().siblings().children("p").slideUp();
    });

    $(".banner-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        lazyLoad: true,
    });
    $(".topCategories-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        lazyLoad: true,
        navText: [
      "<i class='icon-angle-left'></i>",
      "<i class='icon-angle-right'></i>",
    ],
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 6,
            },
        },
    });

    var tstime = 0;
    $(".single-product").each(function () {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
            $(this).addClass("fadeIn");
            $(this).css("transition-delay", tstime + "s");
            tstime += 0.2;
        }
    });
    $(window).scroll(function () {
        var tstime = 0;
        $(".single-product").each(function () {
            if (!$(this).hasClass("fadeIn")) {
                if (
                    $(this).offset().top <
                    $(window).scrollTop() + $(window).height() - 70
                ) {
                    $(this).addClass("fadeIn");
                    $(this).css("transition-delay", tstime + "s");
                    tstime += 0.2;
                }
            }
        });
    });

    $(".filter .advance-toggler").click(function () {
        $(this).toggleClass("open");
        $(".advance-filter").slideToggle();
    });
    $(".filter .short").click(function () {
        $(this).toggleClass("open");
    });
    $(".filter .search-btn").click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("open");
    });
    $(".lightgallery-open").click(function (e) {
        e.preventDefault();
        $('.gallery-main .swiper-slide-active').click();
    });
    $("img.lazy").lazyload({
        effect: "fadeIn",
    });
    $(".zoom").zoom();

    var galleryThumbs = new Swiper(".gallery-thumbs", {
        slidesPerView: 5,
        direction: "vertical",
    });

    var galleryMain = new Swiper(".gallery-main", {
        preventInteractionOnTransition: true,
        spaceBetween: 15,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    galleryMain.on("slideChangeTransitionStart", function () {
        galleryThumbs.slideTo(galleryMain.activeIndex);
    });

    galleryThumbs.on("transitionStart", function () {
        galleryMain.slideTo(galleryThumbs.activeIndex);
    });
    var gallery_recent = new Swiper(".gallery-recent", {
        preventInteractionOnTransition: true,
        spaceBetween: 30,
        slidesPerView: 5,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            400: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1140: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        }
    });
    $('#lightgallery').lightGallery();
    $('#video-gallery').lightGallery();
    $('video, audio').mediaelementplayer();
    $('.review .head-buttons a').click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('.review .body>div').eq($(this).index()).fadeIn().siblings().fadeOut();
    })
});
