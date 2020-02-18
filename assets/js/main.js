
(function ($) {
	"use strict";

   $(document).ready(function($){

      // *** Start Owl-carousel *** //
      $('.case-study-carousel, .case-study-carousel.theme-2').owlCarousel({
         items: 3,
         loop: true,
         dots: true,
         thumbs: false,
         nav: false,
         autoplay: true,
         autoplayTimeout:3000,
         autoplayHoverPause:true,
         margin: 30,
         responsive: {
            0:{
                items:1
            },
            767:{
                items: 2
            },
            992:{
                items: 3
            },
            1200:{
               items: 3
            }
        },
      });
      $('.case-study-carousel-3').owlCarousel({
         items: 5,
         loop: true,
         dots: true,
         thumbs: false,
         nav: false,
         autoplay: true,
         autoplayTimeout:3000,
         autoplayHoverPause:true,
         margin: 20,
         responsive: {
            0:{
                items:1
            },
            767:{
                items: 2
            },
            992:{
                items: 4
            },
            1200:{
               items: 5
            }
        },
      });
      $('.testimonial-carousel, .testimonial-carousel.theme-2').owlCarousel({
         items: 1,
         loop: true,
         dots: true,
         thumbs: false,
         nav: false,
         autoplay: true,
         autoplayTimeout:3000,
         autoplayHoverPause:true,
         margin: 0,
         responsive: {
            0:{
                items:1
            },
            767:{
                items: 1
            },
            992:{
                items: 1
            },
        },
      });
      
      $('.brands-carousel').owlCarousel({
         items: 6,
         loop: true,
         dots: false,
         thumbs: false,
         nav: false,
         autoplay: true,
         autoplayTimeout:3000,
         autoplayHoverPause:true,
         margin: 30,
         responsive: {
            0:{
                items: 2
            },
            767:{
                items: 4
            },
            992:{
                items: 6
            },
        },
      });
      $('.homepage-slides').owlCarousel({
         items: 1,
         loop: true,
         dots: false,
         thumbs: false,
         nav: true,
         navText:["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
         autoplay: true,
         autoplayTimeout:3000,
         autoplayHoverPause:true,
      });
      // *** End Owl-carousel *** //

    

      // *** Start Isotope *** //
      // data filter
      $('.portfolio-tab button').on('click', function () {
         var filterData = $(this).attr('data-filter');

         $('.portfolio-list').isotope({
            filter: filterData,
         });

      // // Tab Color
      //    $('.portfolio-tab button').removeClass('active');
      //    $(this).addClass('active');
      });

      // initial isotope
      $('.portfolio-list').isotope({
         itemSelector: '.single-portfolio-item',
         percentPosition: true,
            masonry: {
               columnWidth: '.single-portfolio-item',
               horizontalOrder: true,
            },
      });

      //for menu active class
      $('.portfolio-tab button').on('click', function(event) {
         $(this).siblings('.active').removeClass('active');
         $(this).addClass('active');
         event.preventDefault();
      });
      // *** End Isotope *** //

      // off canvas menu
      $('.menu-trigger').on('click', function(){
         $('.off-canvas-menu').addClass('show-off-canvas-menu');
         $('.off-canvas-overlay').addClass('active');
      });
      $('.close-trigger, .off-canvas-overlay').on('click', function(){
         $('.off-canvas-menu').removeClass('show-off-canvas-menu');
         $('.off-canvas-overlay').removeClass('active');
      });
      // End off canvas

      // Start Search Popup
      $('.search-trigger').on('click', function(){
         $('.search-popup').addClass('active');
         $('.off-canvas-overlay').addClass('active');
      });
      $('.search-close, .off-canvas-overlay').on('click', function(){
         $('.search-popup').removeClass('active');
         $('.off-canvas-overlay').removeClass('active');
      });
      // End Search Popup

      // Testimonial 
      $('.single-testimonial-item').hover(function(){
         $('.single-testimonial-item').removeClass('active');
         $(this).addClass('active');
      })


      $('#mobile-menu').slicknav({
         prependTo: '.show-mobile-menu',
         allowParentLinks: true
      });
      


      // Color Nip
      $('.boxed-layout').on('click', function(){
         $('body').addClass('boxed-layout').removeClass('wide-layout');
         $('.layout-changer span').removeClass('active');
         $(this).addClass('active');
      });

      $('.wide-layout').on('click', function(){
         $('body').addClass('wide-layout').removeClass('boxed-layout');
         $('.layout-changer span').removeClass('active');
         $(this).addClass('active');
      });


   });

})(jQuery);	

