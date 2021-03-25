$(function() {
  var b = $("#hamburger");
  var w = $("#navbar4");
  var l = $("#navbar-nav");
  
  w.height(l.outerHeight(true));

  b.click(function() {
  
    if(w.hasClass('collapse, navbar-collapse')) {
      w.removeClass('collapse, navbar-collapse');
      w.height(0);
    } else {
      w.addClass('collapse, navbar-collapse');
      w.height(l.outerHeight(true));
    }
  
  });
});