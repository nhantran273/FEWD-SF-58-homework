$('.fa-toggle-on').on('click', function(){
 
 	$(".fixed-background i").addClass("fa-flip-horizontal");
 	$("header").removeClass("fixed-background");
 	$("header").addClass("change");
});
$('.fa-flip-horizontal').on('click', function(){
	$('.fixed-background i').removeClass('fa-flip-horizontal');
	$("header").removeClass("change");
 	$("header").addClass("fixed-background");
});