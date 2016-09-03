
$(document).foundation();

// SEARCH REVEAL MODAL
function searchInputReveal() {
	$(document).on(
	    'open.zf.reveal', function () {
	        $("#searchInput").add('#searchRoleInput').focus();
	    }
	);
	$(document).on(
	    'closed.zf.reveal', function () {
	        $("#searchInput").add('#searchRoleInput').val('');
	    }
	);
}
searchInputReveal();

// CATEGORY PUSH MENU
function categoriMultilevel() {
	var wrap 		= $('.cat-list'),
		parent 		= wrap.find('.first-level-cat'),
		child 		= wrap.find('.second-level-cat'),
		grandChild 	= wrap.find('.third-level-cat'),
		goChild 	= wrap.find('.has-child'),
		goParent 	= wrap.find('.back-to-first'),
		goSecond	= wrap.find('.back-to-second'),
		goChild3rd	= wrap.find('.second-level-cat-link');

	goChild.on('click tap', function() {
		parent.addClass('hidden');
		$($(this).attr('data-target')).removeClass('hidden');
	});
	goParent.on('click tap', function() {
		parent.removeClass('hidden');
		child.addClass('hidden');
	});
	// 3rd Level Category
	goChild3rd.on('click tap', function() {
		child.addClass('hidden');
	});
	goSecond.on('click tap', function() {
		grandChild.addClass('hidden');
		$($(this).attr('data-target')).removeClass('hidden');
	});
}

// FILTER OFF CANVAS 
function filterCanvas() {
	var offCanvas 		= $('#off-canvas-filter-cat'),
		canvasContent	= offCanvas.find('.off-canvas-filter-cat-content'),
		canvasBtn		= $('.canvas-filter-trigger');

	canvasBtn.on('click tap', function() {
		$($(this).attr('data-target')).removeClass('hidden');
	});
	offCanvas.on(
		'closed.zf.offcanvas', function() {
			canvasContent.addClass('hidden');
		}
	);
}

// FILTER PUSH NAV
function filterPush() {
	var pushWrap	= $('.off-canvas-filter-cat-content'),
		filterMenu	= pushWrap.find('.filter-menu'),
		trigger 	= pushWrap.find('.button-area'),
		backFilter	= pushWrap.find('.back-to-filter-menu'),
		filterAct 	= pushWrap.find('.filter-action'),
		optList		= filterAct.find('.push-opt'),
		closeBtn	= $('#off-canvas-filter-cat .close-button');

	trigger.on('click tap', function() {
		$($(this).attr('data-target')).removeClass('hidden');
		filterMenu.add(closeBtn).addClass('hidden');
	});
	backFilter.on('click tap', function() {
		filterMenu.add(closeBtn).removeClass('hidden');
		filterAct.addClass('hidden');
	});
	optList.on('click tap', function() {
		$(this).siblings().removeClass('selected');
		$(this).addClass('selected');
	});
}

// PDP DESCRIPTION SLIDE TOGGLE

function descToggle() {
	var desc 		= $('.product-description'),
		toggleBox	= desc.find('.display-toggle'),
		descHeight 	= desc.find('.height-wrap'),
		trigger 	= toggleBox.find('a');

	if(descHeight.height() > 200) {
		desc.addClass('teaser');
		toggleBox.css('display', 'block');
	}
	else {desc.css('padding-bottom', '10px');}
	trigger.html('lihat lebih banyak <span class="icon ic-arrow-down"></span>');
	trigger.on('click tap', function(){
		if(desc.hasClass('teaser'))
		{
			desc.removeClass('teaser');
			trigger.html('lihat lebih sedikit <span class="icon ic-arrow-up"></span>');
		}
		else {
			desc.addClass('teaser');
			trigger.html('lihat lebih banyak <span class="icon ic-arrow-down"></span>');
		}
	});
}
// SHOW HIDE PASSWORD
function passwordVisibility() {

	var passToggle = $('.password-toggle'),
	 	tgBtn 		= passToggle.find('.pass-btn'),
	 	inputPass	= passToggle.find('#password'),
		inputRePass	= passToggle.find('#repassword'),
		inputNuPass	= passToggle.find('#newpassword');
		// allInput	= passToggle.find('input'),
		// chk			= passToggle.find('.ic-checkmark');
	 	
	
	tgBtn.click(function(){
		var	hideBtn	= passToggle.find('.button-hide');
		tgBtn.toggle();
		if (hideBtn.is(':visible')) {
            inputPass.add(inputRePass).add(inputNuPass).attr('type', 'text');
        } else {
            inputPass.add(inputRePass).add(inputNuPass).attr('type', 'password');
        }
	});
	// allInput.change(function(){
	// 	if(inputNuPass.val() === inputRePass.val())
	// 	{
	// 		chk.css('display','block');
	// 	}
	// 	else {
	// 		chk.css('display','none');
	// 	}
	// });
}
// STORE URL
function urlStore() {
	var urlBlock	= $('.url-block'),
		urlInput	= urlBlock.find('.url-input'),
		urlPrev		= urlBlock.find('.toko-name-url');
	
	urlInput.keyup(function(){
		var value = urlInput.val();
			value = value.replace(/\s+/g, '-').toLowerCase();
		urlPrev.text(value);
	});
}
urlStore();

// SEARCH TOKOQU PRODUCT INPUT FOCUS
function fullonfocus() {
	$(".fullonfocus").focus(function(){
	    $(this).parent().addClass('forcefull');
	    $('.fullcancel').css('display','');
	}).blur(function(){
	    $(this).parent().removeClass('forcefull');
	    $('.fullcancel').css('display','none');
	    $(".fullonfocus").val('');
	});
}

// NEW SEARCH
$(function() {
	var inputSrcOvr	= $('.js-searchbar-overlay').find('input'),
		inputSrc 	= $('.js-searchbar').find('input');
	inputSrcOvr.on('focus click tap', function(){
		$('.off-canvas-content').css('display', 'none');
		$('.js-search-main').css('display', 'block');
		inputSrc.focus();
	});
	$(".js-dismiss-search").on('click tap', function(){
		$('.off-canvas-content').add('.js-search-main').add('.top-searchbar').css('display', '');
	});
	$('.js-toggle-searchbar').on('click tap', function(){
		if ($('.top-searchbar').is(':visible'))
		{
			$('.top-searchbar').css('display', 'none');
		}
		else {
			$('.off-canvas-content').css('display', 'none');
			$('.js-search-main').css('display', 'block');
			inputSrc.focus();
		}
	});

});


$(function() {

  	$('.with-inc').prepend('<div class="increment-btn up-num">+</div>');
	$('.with-inc').append('<div class="increment-btn down-num">-</div>');

  	$(".increment-btn").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
  	  var newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
	}

    $button.parent().find("input").val(newVal);

  });

});

// SHOW VOUCHER CODE

$('#kodeVoucher').change(function(){
	$('#voucherInput').slideToggle();
});

// CUSTOM SLIDE MENU
// $(function() {
// 	var wrp 	= $('.page-container'),
// 		btn 	= wrp.find('.menu-button'),
// 		menu 	= wrp.find('.slide-menu'),
// 		off 	= wrp.find('.js-slide-exit'),
// 		cont 	= wrp.find('.off-canvas-content');

// 	function toggleSlide() {
// 		btn.on('click tap', function() {
// 			off.addClass('is-visible');
// 			cont.addClass('slide-open');
// 			menu.addClass('is-open');
// 			if(btn.hasClass('left-slide')){
// 				cont.addClass('from-left');
// 			}
// 			if(btn.hasClass('right-slide')){
// 				cont.addClass('from-right');
// 			}
// 		});
// 		off.on('click tap', function() {
// 			off.removeClass('is-visible');
// 			cont.removeClass('slide-open from-left from-right');
// 		});
// 	}
// 	toggleSlide();
	// function closeSlide() {
	// 	off.on('click tap', function() {
	// 		menu.removeClass('is-open');
	// 	});
	// }
	// setTimeout(closeSlide, 2000);
// });

// FIXED BTN PDP CONTROL

function fxdBottom() {
	var elem			= $('.js-position-anchor'),
		vHeight			= $( window ).height(),
		eHeight			= elem.height();

	$(window).on('scroll', function(){
		var scrollTop     	= $(window).scrollTop(),
			space			= elem.offset().top,
			limit			= space - vHeight + 62;

		if(scrollTop >= limit){
            $('.js-fxdBtm').css('display', 'none');
        }
        else {$('.js-fxdBtm').css('display', '');}
	});
}


// PANEL MENU

var jPM = $.jPanelMenu({
    menu: '.menu-position-left',
    trigger: '.left-menu-btn',
    direction: 'left',
    after: function(){
    	$('.jPanelMenu-panel').toggleClass('left-menu-closed');
    }
});
var jPM2 = $.jPanelMenu({
    menu: '#right-main-menu',
    trigger: '.right-menu-btn',
    menuClass: 'jPanelMenu-menu2',
    direction: 'right',
    after: function(){

    }
});
jPM.on();
jPM2.on();

$(function() {
//INCREMENT INPUT BUTTON
	$('.with-inc').prepend('<div class="increment-btn up-num">+</div>');
	$('.with-inc').append('<div class="increment-btn down-num">-</div>');

	var w 		= $('.with-inc'),
		input 	= w.find('input'),
		btn 	= w.find('.increment-btn'),
		up		= w.find('.up-num'),
		down	= w.find('.down-num');

		btn.on("click tap", function() {
		 	var elem = $(this);
		  	// var newVal;
		  	var oldValue = elem.siblings(input).val();

		  	if (elem.text() === "+") {
			  var newVal = parseFloat(oldValue) + 1;
			} else {
		   		// Don't allow decrementing below zero
		    	if (oldValue > 0) {
			      var newVal = parseFloat(oldValue) - 1;
			    } else {
			      newVal = 0;
			    }
			  }
		  elem.siblings("input").val(newVal);
		});
});

