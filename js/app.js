
$(document).foundation();

// SEARCH REVEAL MODAL
function searchInputReveal() {
	$(document).on(
	    'open.zf.reveal', function () {
	        $("#searchInput").first().focus();
	    }
	);
	$(document).on(
	    'closed.zf.reveal', function () {
	        $("#searchInput").val('');
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
