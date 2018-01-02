$( document ).ready(function() {
    // Open mobile menu
    $(".top-nav-icon").click(function(){
        $( "#topnav" ).toggleClass( "visible" );
        $( "#openmenu" ).toggleClass( "hidden" );
        $( "#closemenu" ).toggleClass( "hidden" );
        event.preventDefault();
    });
});