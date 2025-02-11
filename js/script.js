$(document).ready(function(){
	$('.slider').slick({
		autoplay:true,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		responsive:[
			{
				breakpoint:975,
				settings: {
					arrows: false,
				}
			},{
				breakpoint:672,
				settings: {
					arrows: false,
				}
			}
		]
	});
});
$(document).ready(function(){
	$('.swiper').slick({
		arrows:false,
		autoplay:true,
		adaptiveHeight:true,
		dots: true,
		infinite: true,
		autoplaySpeed:500,
		speed: 300,
		slidesToShow: 7,
		slidesToScroll: 4,
		responsive: [
		  {
			 breakpoint: 1024,
			 settings: {
				slidesToShow: 6,
				slidesToScroll: 3,
			 }
		  },
		  {
			 breakpoint: 600,
			 settings: {
				slidesToShow: 6,
				slidesToScroll: 3,
			 }
		  },
		  {
			 breakpoint: 480,
			 settings: {
				slidesToShow: 7,
				slidesToScroll: 1,
				centerMode:true,
			 }
		  }]
	})
});
