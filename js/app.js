
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

//INCREMENT INPUT BUTTON
$('.with-inc').prepend('<div class="increment-btn up-num">+</div>');
$('.with-inc').append('<div class="increment-btn down-num">-</div>');

function updownVal() {
	var w 		= $('.with-inc'),
		input 	= w.find('input'),
		btn 	= w.find('.increment-btn'),
		up		= w.find('.up-num'),
		down	= w.find('.down-num');

		btn.on("click tap", function() {
		 	var elem = $(this);
		  	var newVal;
		  	var oldValue = elem.siblings(input).val();

		  	if (elem.text() === "+") {
			  newVal = parseFloat(oldValue) + 1;
			} else {
		   // Don't allow decrementing below zero
		    if (oldValue > 0) {
		      newVal = parseFloat(oldValue) - 1;
		    } else {
		      newVal = 0;
		    }
		  }
		  elem.siblings("input").val(newVal);
		});
}
updownVal();
