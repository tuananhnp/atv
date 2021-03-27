$(document).on('scroll', function() {
  if ($(document).scrollTop() > 80) {
    $('.navbar img').css('width', '150px');
  } else {
    $('.navbar img').css('width', '200px');
  }
});