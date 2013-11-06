// Highlight the case study box
$(".blue-box").hover(function() {
	$(this).toggleClass("hlite");
});

// Flip the Request button
	var margin =$(".image1").width()/2;
	var width=$(".image1").width();
	var height=$(".image1").height();
	$(".image2").stop().css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});

	$(".request-info").hover(function(){
		$(this).find('img.image1').stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'}, 150);
		$(this).find('img.image2').stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'}, 150);
	},function(){
		$(this).find('img.image2').stop().animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'}, 150);
		$(this).find('img.image1').stop().animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'}, 150);
	});

// Jump a little down arrow
	$('.bouncy').hover(function() {
		$(this).find('img.bouncy-arrow').animate({"marginTop":"5px"}, 'fast');
	}, function() {
		$(this).find('img').animate({"marginTop":"0px"}, 'fast');
	});