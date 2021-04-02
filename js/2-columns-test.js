// find the top of each section
    var section1 = $('#starrynight-section').offset().top;
    var section2 = $('#moomin-front-section').offset().top;
    // number of pixels before the section to change image
    var scrollOffset = 500;
    // run this function when the window scrolls
    $(window).scroll(function() {
      // get the window height on scroll
      var scroll = $(window).scrollTop() + scrollOffset;
      // if scroll hits the top of section 1  
      if (scroll < 2500) {
        $('.svg-title-desktop-starrynight').fadeIn(function() {
          $(this).addClass('inactive');
        });
        $('.svg-title-desktop-starrynight').fadeIn(function() {
          $(this).addClass('active');
        });
        $('.svg-title-desktop-moomin-front').fadeIn(function() {
          $(this).removeClass('active');
        });
      }
      // if scroll hits the top of section 2
      if (scroll > section2) {
        $('.svg-title-desktop-starrynight').fadeIn(function() {
          $(this).removeClass('active');
        });
        $('.svg-title-desktop-moomin-front').fadeIn(function() {
          $(this).addClass('active');
        });
      }
    });