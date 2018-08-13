"use strict";
jQuery(document).ready(function ($) {

//for Preloader

    $(window).load(function () {
        $("#loading").fadeOut(500);
        $("#landing").css("display", "block");
        rocketFunction();
        setTimeout(function() {
            $('.loading-hide').css("display", "block");
          }, 3500);
    });


    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-menu').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 80)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * WOW  
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

// magnificPopup

    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.video-link').magnificPopup({
        type: 'iframe'
    });




//    featured slider
    var swiper = new Swiper('.swiper-container', {
//        pagination: '.swiper-pagination',
        loop: true,
        slidesPerView: 'auto',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        coverflow: {
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false
        }
    });



//---------------------------------------------
// Scroll Up 
//---------------------------------------------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



    //End

});


// scrool Down

$('.scrooldown a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});



var rocketFunction = function() {

    var tl = new TimelineMax({});
      tl.addLabel('start', 0)
        //.add(TweenMax.from(".takeoff", 0.5, {scaleY:0, y: -200, ease:Expo.easeInOut, delay:3}))
        .add(TweenMax.to("#rocket", 0.25 ,{className:"+=shake", delay:-1}))
        .add(TweenMax.to(".fire", 0.25 ,{border: "5px solid red", height: "50px", width: "50px", className: "-=shake"}))
        .add(TweenMax.to(".smoke", 0.5,{y: -50, delay: 0}))
        //.add(TweenMax.to(".fire", 1, {border: 5px, solid red}))
        .add(TweenMax.to("#rocket", 0.5 ,{className: "-=shake"}))
        .add(TweenMax.to(".fire", 0.5 ,{border: "5px solid red", className: "-=shake"}))
        .add(TweenMax.to(["#rocket", ".fire"],2, {y: -1500,  delay:0 }))
        //.add(TweenMax.to(".fire", 0.5 , {y: -200,  delay:-1}))      //.add(TweenMax.to(".takeoff",1, {y: -300, delay:-1}))
        .add(TweenMax.to(".smoke", 2,{scale: 1, y: -20, delay: -2, opacity : 0.8}))
        //.add(TweenMax.to("#rocket",1, {y: -10, rotate: 40, delay: -3}))
        //.add(TweenMax.to(".takeoff",0.2, {opacity: 0, delay: -3}))
        .add(TweenMax.to(".smoke", 0.25,{opacity: 0, delay: -1}))
  }








