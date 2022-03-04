$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
		centerMode: true,
		prevArrow: '<button type="button" class="slick-prev">(:</button>',
		nextArrow: '<button type="button" class="slick-next">:)</button>',
		autoplay: true,
		autoplaySpeed: 3000,
	});
});

console.log(document.documentElement.clientHeight)