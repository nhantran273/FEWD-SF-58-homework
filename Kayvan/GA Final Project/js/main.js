// Make it rain!
$(window).on('scroll', function () {
	
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);


	if (distanceScrolled >= 400) {
		$("nav").addClass("scrolled");
	}
	if (distanceScrolled < 400) {
		$("nav").removeClass("scrolled");
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
