$(document).ready(function() {
	$('.hire-me').on('click', function() {
		window.location.href = '/contact';
	})
	
	if ($('.dropdown-menu').hasClass('open')) {
        $('.bx-menu').hide();
        $('.bx-x').show();
    } else {
        $('.bx-x').hide();
        $('.bx-menu').show();
    }

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

	$('#year').text(new Date().getFullYear());

});
