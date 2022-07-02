$(function(){

    // Main Menu Collapse JavaScript Start
    $('#nav_menu_toggler').on('click', function(){
        $('.logo').toggleClass('active');
        $('.nav_item_contianer').toggleClass('active');
    })
    // //Main Menu Collapse JavaScript End

    // Slick Activation JavaScript Start
    $('.banner_item_wrapper').slick({
        prevArrow: $('#prev_arrow'),
        nextArrow: $('#next_arrow')
    });
    // //Slick Activation JavaScript End

    $('.service_item_container').slick({
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        responsive: [
           {
              breakpoint: 992,
              settings: {
                 slidesToShow: 2,
              }
           },
           {
              breakpoint: 600,
              settings: {
                 slidesToShow: 1,
                 arrows:true,
              }
           }
        ],
     }),
      // slick-blog js activation
    $('.blog_slick').slick({
        infinite: true,
        autoplay: false,
        arrows: true,
        nextArrow:$('.blogicon_left'),
        prevArrow:$('.blogicon_right'),
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    // slick-testimonial js activation
    $('.fdbck_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.client'
    });
    
    // client slick js activation
    $('.client').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.fdbck_main',
        dots: false,
        centerPadding: 0,
        arrows: true,
        nextArrow:$('.testomonial_arrow_right'),
        prevArrow:$('.testomonial_arrow_left'),
        centerMode: true,
        focusOnSelect: true
    });

    // slick-brand js activation
    $('.brand_slick').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        nextArrow:$('.brandicon_left'),
        prevArrow:$('.brandicon_right'),
        dots: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    
    // slick-counter js activation
    
     $('.counter_number').counterUp();

     
   // $('.blog_slider').slick({
   //    slidesToShow: 3,
   //    centerMode: true,
   //    centerPadding: '0px',
   // })
// testomonial
   $('.fdbck_main').slick({
    slidesToShow:3,
    arrows:true,
   });

   // variable for all selector
   var html_body = $('html, body');
   var $window = $(window);
   var $sOfset = 500;
   var totop = $('.totop');
  
   // for back to top button
   $('.totop').on('click', function () {
       html_body.animate({
           scrollTop: 0
       }, 500);
   });
       
   //scrolling function
   $window.on('scroll', function () {

       var $scrolling = $(this).scrollTop();

       if ($scrolling > $sOfset) {
           totop.fadeIn();
       } else {
           totop.fadeOut();
       }  
   });
//    $(window).on('load', function () {
//     // $('#main-preloader').delay(300).fadeOut(300)
       
//        // preloader 
//        var preloaderID = $('#main-preloader');
//        preloaderID.addClass('ani_1');
//        setTimeout(function () {

//            $('.main-navbar-top').addClass('main-navbar-top-active');
//            preloaderID.fadeOut(800);

//        }, 1000);
//    });


    // slick-team js activation
    $('.team_slick').slick({
        infinite: true,
        autoplay: false,
        dots: false,
        arrows:true,
        nextArrow:$(".abt_team_left"),
        prevArrow:$(".abt_team_right"),
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    

     
})

