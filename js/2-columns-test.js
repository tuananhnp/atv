var scene1 = $('#starrynight-front-scene').offset().top;
var scene2 = $('#starrynight-back-scene').offset().top;
var scene3 = $('#moomin-back-scene').offset().top;
var scene4 = $('#moomin-front-scene').offset().top;

var scrollOffset = 200;

$(window).scroll(function() {
  var scroll = $(window).scrollTop() + scrollOffset;
  if (scroll < 1800) {
	$('.svg-title-desktop h2').html("Figure 01");
	$('.svg-title-desktop p').html("<i>Starry night: Stars</i> - Van Gogh");
  }
  if (scroll > scene2) {
	$('.svg-title-desktop h2').html("Figure 02");
	$('.svg-title-desktop p').html("<i>Starry night: Moon</i> - Van Gogh");
  }
  if (scroll > scene3) {
	$('.svg-title-desktop h2').html("Figure 03");
	$('.svg-title-desktop p').html("<i>Fillyjonk's wine bottle</i> - Tove Jansson");
  }
  if (scroll > scene4) {
	$('.svg-title-desktop h2').html("Figure 04");
	$('.svg-title-desktop p').html("<i>Mymble</i> - Tove Jansson");
  }
});