$( document ).ready(function() {
    // Open mobile menu
    $(".top-nav-icon").click(function(){
        $( "#topnav" ).toggleClass( "visible" );
        $( "#openmenu" ).toggleClass( "hidden" );
        $( "#closemenu" ).toggleClass( "hidden" );
        // Hide dropdown when closing main menu
        if($("#available-languages").hasClass("visible")){
            $("#available-languages").removeClass("visible")
        }
        event.preventDefault();
    });
    // Open language dropdown
    $("#active-language").click(function(){
        if($(window).width() < 930){
            $( "#available-languages" ).toggleClass( "visible" );
        }
        event.preventDefault();
    });
    // Hide dropdown on resize
    $(window).resize(function(){
        $("#available-languages").removeClass("visible");
    });
});