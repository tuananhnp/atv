var $j = jQuery.noConflict();
$j( document ).ready( function() {
    var owl = $j( ".owl-carousel" ).owlCarousel( {
        stagePadding: 90,
        loop: true,
        lazyLoad: true,
        dots: false,
        margin: 10,
        nav: false,
        onDragged: function() {
            $j( 'body' ).css( 'overflow', 'auto' );
        },
        onDrag: function() {
            $j( 'body' ).css( 'overflow', 'hidden' );
        },
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    } );

    // disable scroll
    owl.on( 'drag.owl.carousel', function( event ) {
        document.ontouchmove = function( e ) {
            e.preventDefault();
        }
    } );

    // enable scroll
    owl.on( 'dragged.owl.carousel', function( event ) {
        document.ontouchmove = function( e ) {
            return true;
        }
    } );

} );