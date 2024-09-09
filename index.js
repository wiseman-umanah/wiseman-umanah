$(document).ready(function() {
    $('.bx-menu').on('click', function() {
        $('.dropdown-menu').addClass('open');
        $('.bx-menu').hide();
        $('.bx-x').show();
    });

    $('.bx-x').on('click', function() {
        $('.dropdown-menu').removeClass('open');
        $('.bx-x').hide();
        $('.bx-menu').show();
    });

	function handleResize() {
        if ($(window).width() > 900) {
            $('.dropdown-menu').removeClass('open');
		} else {
			$('.dropdown-menu').addClass('open');
		}
    }
	handleResize();

    $(window).resize(handleResize);
});
