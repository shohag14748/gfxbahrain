$(document).ready(function () {
    $('body').append("<span class='sidebar-open-overlay'></span>");
    $('.topbar .submenu-link').click(function (e) {
        e.preventDefault();
        if ($(window).width() < 1140) {
            $(this).siblings().slideToggle().parent().siblings().children('.sub-menu').slideUp();
        }
    })
    $('.menu-toggler-btn').click(function (e) {
        e.preventDefault();
        if ($(window).width() < 1140) {
            $('.main-menu .menu').addClass('active');
            $('.sidebar-open-overlay').addClass('active');
        }
    })
    $('.navigation .close-btn,.sidebar-open-overlay').click(function (e) {
        e.preventDefault();
        $('.main-menu .menu').removeClass('active');
        $('.sidebar-open-overlay').removeClass('active');
    })
    $('.cart-toggler-btn').click(function (e) {
        e.preventDefault();
        $('.shopping-bag').addClass('active');
        $('.sidebar-open-overlay').addClass('active');
    })
    $('.shopping-bag .close-btn,.sidebar-open-overlay').click(function (e) {
        e.preventDefault();
        $('.shopping-bag').removeClass('active');
        $('.sidebar-open-overlay').removeClass('active');
    })
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.main-menu').addClass('scroll');
        }else{
            $('.main-menu').removeClass('scroll');
        }
    })

    $('.banner-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots:false,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:1000,
        lazyLoad:true,
    })
    $('.topCategories-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplaySpeed:1000,
        lazyLoad:true,
        navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"],
        responsive:{
            0:{
                items:2
            },
            768:{
                items:6
            }
        }
    })
});
