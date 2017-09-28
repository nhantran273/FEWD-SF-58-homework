// Make it rain!
$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

	// Step 2: Write Rest of JS here
	// when distance scrolled = 545 then add class .sticky to nav

	if (distanceScrolled >= 400) {
		$(".nav").addClass("scrolled");
	}
	if (distanceScrolled < 400) {
		$(".nav").removeClass("scrolled");
	}


});

$(function(){
    $('.row').hover(
        function(){
            $(this).next().show();
        },
        function(){
            $(this).next().hide();   
        }
    )   
})
