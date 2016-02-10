
$(document).foundation();

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
categoriMultilevel();

