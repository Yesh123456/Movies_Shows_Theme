// <!-- Yesh Jadav    Ui design : Meckanzie-->
$(document).ready(function(){
	
	$('.menu').click(function(e){
		e.stopPropagation();
		$('#main_nav').toggleClass('active');
	});	
	
	$(document).click(function(){
		$('#main_nav').toggleClass('active');
	});
});
// <!-- Yesh Jadav    Ui design : Meckanzie-->