$(document).ready(function () {

	/* Color Logo */
	$('.logo_litera').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace('e', '<span>e</span>'));
	});

	/* Open and Close type-search when click button search */
	$('.search').click(function() {
		$('.search_field').stop().slideToggle();
		$('.search_field input[type=text]').focus(); /* Cursor active in the type-search when click button search */
	});

	/* Press ESC and type-search close */
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$('.search_field').slideUp();
		}
	}).click(function() {
		$('.search_field').slideUp();
	});
	$('.search_wrap').click(function(e) {
		e.stopPropagation();
	});

	/* Mobile Menu */
	$('.top_line').after('<div class="mobile_menu d-lg-none">');
	$('.top_menu').clone().appendTo('.mobile_menu');
	$('.mobile_menu_button').click(function() {
		$('.mobile_menu').stop().slideToggle();
	});

	/* Section_reviews */
	$('.col_item').hover(function() {
		ths = $(this);
		lnk = ths.closest('.col_item').find('h4 a');
		lnk.addClass('hover');
	}, function() {
		lnk.removeClass('hover');
	});
}); 