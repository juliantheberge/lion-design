$( '.img-frame' ).hover(
  function() {
	  $( 'img', this ).addClass( 'blur' );
    $( '.img-text-over', this ).removeClass( 'none' );
  }, function() {
	  $( 'img', this ).removeClass( 'blur' );
    $( '.img-text-over', this ).addClass( 'none' );
  }
);

$( '.icon-container' ).hover(
  function() {
    $( '.icon-wrapper' ).addClass( 'view-menu' );
    $( '.page-wrapper' ).addClass( 'squeeze-menu' );
  }, function () {
    $( '.icon-wrapper' ).removeClass( 'view-menu' );
    $( '.page-wrapper' ).removeClass( 'squeeze-menu' );
  }
);


$( '.dropdown-trigger' ).click(function() {
  $( this ).next().slideToggle(200);
});


$(document).ready(function(){
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

                  $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){

                window.location.hash = hash;
      });
    }   });
});
