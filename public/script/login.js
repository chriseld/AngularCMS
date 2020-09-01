$(".registerBtn").click(function(event) {
    event.preventDefault();
    $.get( "register.html", function( data ) {
      $( ".modalBox" ).html( data );
    });
  });