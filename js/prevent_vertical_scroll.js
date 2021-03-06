owl.on('drag.owl.carousel', function(event) {
    $('body').css('overflow', 'hidden');
});

owl.on('dragged.owl.carousel', function(event) {
    $('body').css('overflow', 'auto');
});