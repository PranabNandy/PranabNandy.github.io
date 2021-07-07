$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		
	});
	
	//slide-up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});
	
	//toggle menu/navbar script
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});
});
