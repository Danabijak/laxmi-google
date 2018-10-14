$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
		$('.navbar').css('opacity', '0');
	} else {
		$('.navbar').css('background', 'none');
		$('.navbar').css('opacity', '1');
	} if ($(this).scrollTop() > 550) {
		$('.navbar').css('opacity', '1');
		$('.navbar').css('background', 'rgba(59, 187, 180, .9)');
	} 
});