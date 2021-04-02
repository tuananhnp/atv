var scene1 = $('#starrynight-front-scene').offset().top;
var scene2 = $('#starrynight-back-scene').offset().top;
var scene3 = $('#moomin-front-scene').offset().top;

var scrollOffset = 300;

$(window).scroll(function() {
  var scroll = $(window).scrollTop() + scrollOffset;
  if (scroll < 2000) {
	$('.svg-title-desktop-starrynight-front').fadeIn(function() {
	  $(this).addClass('inactive');
	});
	$('.svg-title-desktop-starrynight-front').fadeIn(function() {
	  $(this).addClass('active');
	});
	$('.svg-title-desktop-starrynight-back').fadeIn(function() {
	  $(this).removeClass('active');
	});
  }
  if (scroll > scene2) {
	$('.svg-title-desktop-starrynight-front').fadeIn(function() {
	  $(this).addClass('inactive');
	});
	$('.svg-title-desktop-starrynight-front').fadeIn(function() {
	  $(this).removeClass('active');
	});
	$('.svg-title-desktop-starrynight-back').fadeIn(function() {
	  $(this).addClass('active');
	});
	$('.svg-title-desktop-moomin-front').fadeIn(function() {
	  $(this).removeClass('active');
	});
  }
  if (scroll > scene3) {
	$('.svg-title-desktop-starrynight-front').fadeIn(function() {
	  $(this).addClass('inactive');
	});
	$('.svg-title-desktop-starrynight-back').fadeIn(function() {
	  $(this).removeClass('active');
	});
	$('.svg-title-desktop-moomin-front').fadeIn(function() {
	  $(this).addClass('active');
	});
  }
});