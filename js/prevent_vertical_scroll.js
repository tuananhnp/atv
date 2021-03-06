// disable scroll
owl.on('drag.owl.carousel', function(event) {
    document.ontouchmove = function (e) {
        e.preventDefault()
    }
})

// enable scroll
owl.on('dragged.owl.carousel', function(event) {
    document.ontouchmove = function (e) {
        return true
    }
})