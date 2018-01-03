$( document ).ready(function() {
    // Open mobile menu
    $(".top-nav-icon").click(function(){
        $( "#topnav" ).toggleClass( "visible" );
        $( "#openmenu" ).toggleClass( "hidden" );
        $( "#closemenu" ).toggleClass( "hidden" );
        event.preventDefault();
    });
    // Open language dropdown
    $("#active-language").click(function(){
        if($(window).width() < 930){
            $( "#available-languages" ).toggleClass( "visible" );
        }
        event.preventDefault();
    });
});