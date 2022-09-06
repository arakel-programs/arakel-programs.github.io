/*
	Construction Script
*/
(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
	Sticky Header
=========================================================================*/ 
	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 10;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
				header.addClass("fixed-top");
			} else {
				header.removeClass("fixed-top");
			}

		});
	});

/*=========================================================================
	Slick Nav Active
=========================================================================*/
	var menuSelector = $('.mainmenu ul');
	menuSelector.slicknav({
        prependTo: '.navbar-header',
        label: ''
    });
/*=========================================================================
    Main Slider
=========================================================================*/
    var owlSlider = $('.main-slider, .main-slider-2, .main-slider-3');
    owlSlider.owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 500,
        autoplayTimeout: 3500,
        autoplay: false,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']
    });
    // Slider animation
    $('.main-slider').on('translate.owl.carousel', function () {
        $('.slider-content h1, .slider-content p, .slider-content a.b-btn').removeClass('fadeInUp animated').hide();
    });

    $('.main-slider').on('translated.owl.carousel', function () {
        $('.slider-content h1, .slider-content p, .slider-content a.b-btn').addClass('fadeInUp animated').show();
    });
    // Slider 2 animation
    $('.main-slider-2').on('translate.owl.carousel', function () {
        $('.slider-content h1').removeClass('zoomIn animated').hide();
        $('.slider-content p, .slider-content a.b-btn').removeClass('fadeInUp animated').hide();
    });

    $('.main-slider-2').on('translated.owl.carousel', function () {
        $('.slider-content h1').addClass('zoomIn animated').show();
        $('.slider-content p, .slider-content a.b-btn').addClass('fadeInUp animated').show();
    });

    // Slider 3 animation
    $('.main-slider-3').on('translate.owl.carousel', function () {
        $('.slider-content h1').removeClass('fadeInRight animated').hide();
        $('.slider-content p, .slider-content a.b-btn').removeClass('fadeInRight animated').hide();
    });

    $('.main-slider-3').on('translated.owl.carousel', function () {
        $('.slider-content h1').addClass('fadeInRight animated').show();
        $('.slider-content p, .slider-content a.b-btn').addClass('fadeInRight animated').show();
    });

/*=========================================================================
	Testimonial Carousel
=========================================================================*/
	var testiCarousel = $('.testi-carousel');
	testiCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        smartSpeed: 800,
        dots: false,
        nav:true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1
		    },
		    // breakpoint from 480 up
		    480 : {
		       items: 2
		    },
		    // breakpoint from 768 up
		    768 : {
		       items: 3
		    }
		}
    });
	var testiCarousel2 = $('.testi-carousel-2');
	testiCarousel2.owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        items: 1,
        dots: false,
        nav:true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']
    });

	

/*=========================================================================
	Project Carousel
=========================================================================*/
	var projectCarousel = $('.project');
	projectCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        smartSpeed: 800,
        dots: false,
        nav:true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 1
		    },
		    // breakpoint from 480 up
		    480 : {
		       items: 2
		    },
		    // breakpoint from 768 up
		    768 : {
		       items: 3
		    }
		}
    });

/*=========================================================================
	Counter Up Active
=========================================================================*/
	var counterSelector = $('.counter');
	counterSelector.counterUp({
		delay: 10,
		time: 2000
	});


/*=========================================================================
	Brand Carousel
=========================================================================*/
	var brandCarousel = $('.brand-carousel');
	brandCarousel.owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 60,
        dots: false,
        responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items: 2
		    },
		    // breakpoint from 480 up
		    480 : {
		       items: 3
		    },
		    // breakpoint from 768 up
		    768 : {
		       items: 6
		    }
		}
    });

/*=========================================================================
	Isotope FitRows
=========================================================================*/
	var filterSelector = $('.filter-items');
	filterSelector.imagesLoaded( function() {

		 // Add isotope click function
		$('.filter-menu li').on('click', function(){
	        $(".filter-menu li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        filterSelector.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    filterSelector.isotope({
	        itemSelector: '.single-item',
	        layoutMode: 'fitRows',
	    });
	});

/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});
/*=========================================================================
	Swipebox active
=========================================================================*/
	var lightbox = $( '.lightbox' );
	lightbox.swipebox();

/*=========================================================================
	NiceScroll Active
=========================================================================*/
	$("html").niceScroll({
		background: "#111",
		cursorcolor:"#FAB702",
		cursorwidth:"16px",
        scrollspeed: 40,
        mousescrollstep: 60,
		cursorborder:"0px solid #eaeaea",
		cursorborderradius: "0px",
		autohidemode: false,
		zindex: "999"
	});
	

/*=========================================================================
	Hoverdir Active
=========================================================================*/
	$('.portfolio-items .portfolio-box ').each( function() { 
		$(this).hoverdir(); 
	});
    
/*=========================================================================
    wow Settings
=========================================================================*/
    var wow = new WOW( {
        mobile: false,
        offset: 0
    });
    wow.init();


/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });

})(jQuery);
