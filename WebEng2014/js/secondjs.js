$(document).ready(function(){
	$('li').hover(function(){
		$(this).toggleClass('active');
	});
	$("li").on('click', function() {
	    $("li").removeClass('active').find(this).addClass("active");
	});
});
