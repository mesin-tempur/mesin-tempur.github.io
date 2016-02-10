
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
	var wrap 	= $('.cat-list'),
		parent 	= wrap.find('.first-level-cat'),
		child 	= wrap.find('.second-level-cat'),
		goChild = wrap.find('.has-child'),
		goParent = wrap.find('.back');

	goChild.on('click tap', function() {
		parent.addClass('hidden');
		$($(this).attr('data-target')).removeClass('hidden');
	});
	goParent.on('click tap', function() {
		parent.removeClass('hidden');
		child.addClass('hidden');
	});
}
categoriMultilevel();

