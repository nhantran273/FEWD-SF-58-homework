$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

	// Step 2: Write Rest of JS here
	if (distanceScrolled > 340) {
		$('.main-nav').addClass('scrolled');
		$('.homepage').css('padding-top','88px');
		// $('.slideshow-container').css('z-index','1');
		
	} else {
		$('.main-nav').removeClass('scrolled');
		$('.homepage').css('padding-top','0px');


	}
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1} 
		if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none"; 
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace("active", "");
			}
			slides[slideIndex-1].style.display = "block"; 
			dots[slideIndex-1].className += "active";
	}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

	// if (distanceScrolled > 580) {
	// 	$('.label-1, .label-2, .label-3').addClass('faded-in');
	// } else {
	// 	$('.label-1, .label-2, .label-3').removeClass('faded-in');
	// }

	// if (distanceScrolled > 1400) {
	// 	$('.butterfly').addClass('animated');
	// } else {
	// 	$('.butterfly').removeClass('animated');
	// }


$('.dropdownButton').on('click', function () {
	
	$('.dropdownMenu').slideToggle(300);


});


$('.dropdownnavButton').on('click', function () {
	
	$('.mobilenavmenu').slideToggle(300);


});





// $('.hamburger').on('click', function () {
// 	$('body').addClass('active');
// });

// $('.close').on('click', function () {
// 	$('body').removeClass('active');
// });



