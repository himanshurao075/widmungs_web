

(function ($) {

	"use strict";

	/*===========================================

	                Header Sticky

	=============================================*/

	// Header Sticky
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 120) {
			$('.navbar-area').addClass("is-sticky");
		} else {
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Others Option Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function () {
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});



	/*===========================================

	                     Wow    

	=============================================*/
	new WOW().init();



	/*===========================================

	                    Preloader

	=============================================*/

	$(window).on("load", function () {
		$("#status").fadeOut();
		$("#preloader").delay(550).fadeOut("slow");
		$("body").delay(550).css({
			overflow: "visible",
		});
	});

	/*===========================================

	                pricing page   

	=============================================*/


	jQuery(function (dnxte_contenttoggle) {
		dnxte_contenttoggle(".dnxte-toggle-btn .dnxte-input").each(function () {
			var n = dnxte_contenttoggle(".dnxte-content-toggle-body").parents(".dnxte-content-toggle").find(".dnxte-content-toggle-back"),
				e = dnxte_contenttoggle(".dnxte-content-toggle-body").parents(".dnxte-content-toggle").find(".dnxte-content-toggle-front");
			this.checked ? (e.hide(), n.show()) : (n.hide(), e.show()), dnxte_contenttoggle(this).on("change", function () {
				this.checked ? (e.hide(), n.show()) : (n.hide(), e.show())
			})
		})
	});




	/*===========================================

	            Cart Plus Minus Button

	=============================================*/

	var CartPlusMinus = $('.cart-plus-minus');
	CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
	CartPlusMinus.append('<div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() === "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		$button.parent().find("input").val(newVal);
	});


	/*===========================================

	                   FAQ

	=============================================*/

	// Tabs
	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function (g) {
			var tab = $(this).closest('.tab'),
				index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
			tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);

	// FAQ Accordion
	$(function () {
		$('.accordion').find('.accordion-title').on('click', function () {
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');
		});
	});

	/*===========================================

	                  Team Hover

	=============================================*/

	// Team Hover Active
	$('.team-btn-active').on('click', function () {
		var teamHoveractive = $(".team-btn-active");
		$(this).addClass('active');
	});

	$('.team-btn-close').on('click', function () {
		var teamHoverclose = $(".team-btn-active");
		teamHoverclose.removeClass('active');
	});


	/*===========================================

	                   Testimonial

	=============================================*/


	$('.testimonial-active').slick({
		infinite: false,
		arrows: false,
		autoplay: true,
		dots: true,
		autoplaySpeed: 3000,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="lni lni-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="lni lni-chevron-right"></i></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		}, ]
	});

	
	$('.testimonial-active-02').slick({
		infinite: false,
		arrows: false,
		autoplay: true,
		dots: true,
		arrows: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="lni lni-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="lni lni-chevron-right"></i></button>',
		responsive: [{
				breakpoint: 1600,
				settings: {
					arrows: true,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1401,
				settings: {
					arrows: false,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});

	$('.testimonial-active-03').slick({
		infinite: false,
		arrows: false,
		autoplay: true,
		dots: true,
		arrows: false,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="lni lni-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="lni lni-chevron-right"></i></button>',
		responsive: [{
				breakpoint: 1600,
				settings: {
					arrows: false,
				}
			},
			{
				breakpoint: 1301,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});


	$('.testimonial-active-04').slick({
		infinite: false,
		arrows: false,
		autoplay: true,
		dots: true,
		arrows: false,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="lni lni-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="lni lni-chevron-right"></i></button>',
		responsive: [{
				breakpoint: 1600,
				settings: {
					arrows: false,
				}
			},
			{
				breakpoint: 1301,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});



	/*===========================================

	                 Portfolio

	=============================================*/

	$('.related_slide').slick({
		infinite: false,
		arrows: false,
		autoplay: true,
		dots: true,
		arrows: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="lni lni-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="lni lni-chevron-right"></i></button>',
		responsive: [{
				breakpoint: 1600,
				settings: {
					arrows: true,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1401,
				settings: {
					arrows: false,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
		]
	});


	/*===========================================

	                Back to top

	=============================================*/

	// Scroll Event
	$(window).on('scroll', function () {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});

	// Click Event
	$('.go-top').on('click', function () {
		$("html, body").animate({
			scrollTop: "0"
		}, 1200);
	});

	/*===========================================

	                Range Slider

	=============================================*/


	$(".price-range").ionRangeSlider({
		skin: "Azod",
		hide_min_max: true,
		type: 'double',
		prefix: "$",
	});


	/*===========================================

	        			Selectric

	=============================================*/

	$('.selectric').selectric({
		arrowButtonMarkup: '<span class="arrow"><i class="lni lni-chevron-down"></i></span>',
		disableOnMobile: false,
	});
	$('.sort-by').selectric({
		arrowButtonMarkup: '<span class="arrow"><i class="lni lni-chevron-down"></i></span>',
		labelBuilder: '<i class="lni lni-text-align-left"></i> Sort By: <span>{text}</span>',
		disableOnMobile: false,
	});
	/*===========================================

	        		Isotpe

	=============================================*/

	var $isotopeGrid = $('.isotope-grid');
	var $isotopeFilter = $('.isotope-filter');
	$isotopeGrid.imagesLoaded(function () {
		$isotopeGrid.isotope({
			itemSelector: '.grid-item',
			masonry: {
				columnWidth: '.grid-sizer'
			}
		});
	});
	$isotopeFilter.on('click', 'button', function () {
		var $this = $(this),
			$filterValue = $this.attr('data-filter'),
			$targetIsotop = $this.parent().data('target');
		$this.addClass('active').siblings().removeClass('active');
		$($targetIsotop).isotope({
			filter: $filterValue
		});
	});


	/*===========================================

	                   Countdown
	                   
	=============================================*/

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown_time">%D</span><span class="single-countdown_text">Days</span></div><div class="single-countdown"><span class="single-countdown_time">%H</span><span class="single-countdown_text">Hours</span></div><div class="single-countdown"><span class="single-countdown_time">%M</span><span class="single-countdown_text">Min</span></div><div class="single-countdown"><span class="single-countdown_time">%S</span><span class="single-countdown_text">Sec</span></div>'));
		});
	});
	if ($('.coming-soon-inner').length !== 0) {
		const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;
		let countDown = new Date('Jan 12, 2022 00:00:00').getTime(),
			x = setInterval(function () {
				let now = new Date().getTime(),
					distance = countDown - now;
				document.getElementById('days').innerText = Math.floor(distance / (day)),
					document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
					document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
					document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
				//do something later when date is reached
				//if (distance < 0) {
				//  clearInterval(x);
				//  'IT'S MY BIRTHDAY!;
				//}
			}, second)
	};

	/*===========================================

        checkout one click toggle function

    =============================================*/

	var checked = $('.sin-payment input:checked')
	if (checked) {
		$(checked).siblings('.payment-box').slideDown(900);
	};
	$('.sin-payment input').on('change', function () {
		$('.payment-box').slideUp(900);
		$(this).siblings('.payment-box').slideToggle(900);
	});


	/*--- checkout toggle function ----*/
	$('.checkout-click1').on('click', function (e) {
		e.preventDefault();
		$('.checkout-login-info').slideToggle(900);
	});


	/*--- checkout toggle function ----*/
	$('.checkout-click3').on('click', function (e) {
		e.preventDefault();
		$('.checkout-login-info3').slideToggle(1000);
	});


})(jQuery);



