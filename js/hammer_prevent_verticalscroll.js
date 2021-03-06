window.blockMenuHeaderScroll = false;
    var mc = new Hammer(document);
    var classname = document.getElementsByClassName("owl-carousel");

    mc.on("swipeleft swiperight panleft panright", function(ev) {
        window.blockMenuHeaderScroll = true;
    });

    mc.on("panend swipeend", function (ev){
        window.blockMenuHeaderScroll = false;
    });

    mc.on("swipeup swipedown panup pandown", function(ev) {
        window.blockMenuHeaderScroll = false;
    });

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('touchmove', function(evt) {
            if (blockMenuHeaderScroll) {
                evt.preventDefault();
            }

        }, {
            passive: false
        });
    }