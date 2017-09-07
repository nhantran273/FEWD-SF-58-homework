$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

	// Step 2: Write Rest of JS here
	if (distanceScrolled > 480) {
		$('.main-nav').addClass('scrolled');
	} else {
		$('.main-nav').removeClass('scrolled');
	}

	if (distanceScrolled > 580) {
		$('.label-1, .label-2, .label-3').addClass('faded-in');
	} else {
		$('.label-1, .label-2, .label-3').removeClass('faded-in');
	}

	if (distanceScrolled > 1400) {
		$('.butterfly').addClass('animated');
	} else {
		$('.butterfly').removeClass('animated');
	}

});
