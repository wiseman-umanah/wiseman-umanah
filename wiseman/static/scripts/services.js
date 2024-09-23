$(document).ready(() => {
	$('.learn').on('click', function() {
		window.location.href = `/services/${$(this).attr('data-name')}`
	});
});
