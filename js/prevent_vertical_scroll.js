var $j = jQuery.noConflict();
$j( document ).ready( function() {
    var owl = $j( ".owl-carousel" ).owlCarousel( {
        onDragged: function() {
            $j( 'body' ).css( 'overflow', 'auto' );
        },
        onDrag: function() {
            $j( 'body' ).css( 'overflow', 'hidden' );
        },
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