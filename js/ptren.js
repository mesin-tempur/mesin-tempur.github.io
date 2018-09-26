
$(document).foundation();


// CUSTOM SLIDE MENU
$(function() {
	var wrp 	= $('.page-container'),
		btn 	= wrp.find('.js-menu-button'),
		menu 	= wrp.find('.js-slide-menu'),
		off 	= wrp.find('.js-slide-off'),
		cont 	= $('body');

	function toggleSlide() {
		btn.on('click tap', function() {
			off.removeClass('hidden');
			cont.addClass('slide-open');
			menu.addClass('is-open');
			// if(btn.hasClass('js-menu-left')){
			// 	cont.addClass('from-left');
			// }
			// if(btn.hasClass('js-menu-right')){
			// 	cont.addClass('from-right');
			// }
		});
		off.on('click tap', function() {
			off.addClass('hidden');
			menu.removeClass('is-open');
			cont.removeClass('slide-open');
		});
	}
	toggleSlide();
	function closeSlide() {
		off.on('click tap', function() {
			menu.removeClass('is-open');
		});
	}
	setTimeout(closeSlide, 2000);
});

// function headerSticky() {
// 	$(window).scroll(function() {
// 	    if ($(this).scrollTop() > 80) { 
// 	        $('header').addClass('header-sticky');
// 	        $('.category-wrapper').addClass('fxd-cat');

// 	    }
// 	    else {
// 	    	$('header').removeClass('header-sticky');
// 	    	$('.category-wrapper').removeClass('fxd-cat');
// 	    }
// 	});
// }
// headerSticky()

// function headerSticky() {
// 	$(window).scroll(function() {
// 	    if ($(this).scrollTop() > 30) { 
// 	        $('.header-container').addClass('navbar-hidden');
// 	    }
// 	    if ($(this).scrollTop() < 3) { 
// 	        $('.header-container').removeClass('navbar-hidden');
// 	    }
// 	});
// }
// headerSticky()


// Hide NAV on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('.header-container').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop){
        // Scroll Down
        $('.header-container').removeClass('navbar-sticky');
    } 
    else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.header-container').removeClass('.navbar-hidden').addClass('navbar-sticky');
        }
    }
    if ($(this).scrollTop() > 30) { 
        $('.header-container').addClass('navbar-hidden');
    }
    if ($(this).scrollTop() < 3) { 
        $('.header-container').removeClass('navbar-hidden');
    }
    if ($(window).scrollTop() == ($(document).height() - $(window).height())) {
    	$('.header-container').removeClass('navbar-sticky');
    }
    if ($(window).scrollTop() < 3 ) {
    	$('.header-container').removeClass('navbar-sticky');
    }
    
    lastScrollTop = st;
}

// TOGGLE SIDE PANEL MENU ON MOBILE

$(function () {
	$('.menu-toggle').on('click', function(){
		$('.toggle-view-panel').addClass('mobile-show');
	});
	$('.close-filter').on('click', function(){
		$('.toggle-view-panel').removeClass('mobile-show');
	});
	
	// Close on Large
	var $window = $(window);
    var $pane = $('#pane1');

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 1023) {
            $('.toggle-view-panel').removeClass('mobile-show');
        }
    }
    checkWidth();
    $(window).resize(checkWidth);
});