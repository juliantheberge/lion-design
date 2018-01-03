$( '.img-frame' ).hover(
  function() {
	  $( 'img', this ).addClass( 'blur' );
    $( '.img-text-over', this ).removeClass( 'none' );
  }, function() {
	  $( 'img', this ).removeClass( 'blur' );
    $( '.img-text-over', this ).addClass( 'none' );
  }
);

$( '.icon-wrapper' ).hover(
  function() {
    $( this ).addClass( 'view-menu' );
  }, function () {
    $( this ).removeClass( 'view-menu' );
  }
);

$( '.nav-icon' ).hover(
  function() {
    $( this ).prev().removeClass( 'invisible' );
  }, function() {
    $( this ).prev().addClass( 'invisible' );
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
      }, 800, function(){

                window.location.hash = hash;
      });
    }   });
});
