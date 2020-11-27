/*
=====================================================
                    =    main scripts starts   =
=====================================================
*/
$(document).ready(function(){
    $('.menu-btn-js').click(function(){
        $('.menu-items-cover').addClass('transform00');
    })
    $('.menu-close-btn').click(function(){
        $('.menu-items-cover').removeClass('transform00');
    })

    if (window.matchMedia("(max-width: 767px)").matches) {
        $('.menu-item-submenu').click(function(){
            $(this).find('.menu-item-dropdown').slideToggle(400);
            $(this).prevAll('.menu-item-submenu').find('.menu-item-dropdown').slideUp(400);
            $(this).nextAll('.menu-item-submenu').find('.menu-item-dropdown').slideUp(400);
        })
    }

    new WOW().init();

    $('.home-slider-cover.owl-carousel').owlCarousel({
        margin: 0,
        dots: false,
        nav: false,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        loop: true,
        startPosition: 0,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        smartSpeed: 900,
        responsiveClass: true,
        autoWidth:false,
        animateOut: 'slideOutDown',
        mouseDrag:false
    })

     $('.about-slider-items').owlCarousel({
        margin: 0,
        dots: true,
        nav: false,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        loop: false,
        startPosition: 0,
        slideSpeed: 800,
        paginationSpeed: 800,
        smartSpeed: 800,
        responsiveClass: true,
        autoWidth:false
    })
    $('.company-logos-slider').owlCarousel({
        margin: 20,
        dots: false,
        nav: false,
        items: 4,
        lazyLoad: true,
        autoplay: true,
        loop: true,
        startPosition: 0,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        smartSpeed: 1000,
        responsiveClass: true,
        autoWidth:false,
        responsive: {
            0: {
                items: 2
            },
            767: {
                items:4
            }
        }
    })

    $('.slider-prev-next .slider-prev-js').click(function(){
        $('.home-slider-cover .owl-prev').click();
    })
    $('.slider-prev-next .slider-next-js').click(function(){
        $('.home-slider-cover .owl-next').click();
    })

    /* scroll top */
    var scrollTop = $('.scroll-top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
        scrollTop.addClass('show');
    } else {
        scrollTop.removeClass('show');
    }
    });
    scrollTop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '400');
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 120) {
            $('header').addClass('red-bg');
        } else {
            $('header').removeClass('red-bg');
        }
    })

      /* starts contact map */
      if ($('#map').length > 0) {
        function initMap(getId) {
        if (document.getElementById(getId)) {
            let lat = parseFloat(document.getElementById(getId).getAttribute("lat"));
            let lng = parseFloat(document.getElementById(getId).getAttribute("lng"));
            let markerIcon = $('.map-content .markerIcon').attr('src');
            console.log(markerIcon);
            var location = { lat, lng }
            map = new google.maps.Map(document.getElementById(getId), {
            zoom: 16,
            disableDefaultUI: true,
            center: location,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles:[{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
            });
            marker = new google.maps.Marker({
            map: map,
            position: location,
            animation: google.maps.Animation.DROP,
            icon: markerIcon
            });
            marker.addListener('click', function () {
            $('.contact_details').removeClass('dnonemobile');
            });
            marker.addListener('click', toggleBounce);
        }
        }
        function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
        }
        initMap("map");
        google.maps.event.addDomListener(window, "load", initMap);
    }
    /* ends contact map */

    $('.menu-item-submenu>a').click(function(e){
        e.preventDefault();
    })
    
});