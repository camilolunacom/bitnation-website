$( document ).ready(function() {
    // Add class to header on scroll
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop < 100){
            $(".main-header").removeClass("header-fixed");
        }else{
            $(".main-header").addClass("header-fixed");
        }
      });
    // Open mobile menu
    $(".top-nav-icon").click(function(){
        $( "#topnav" ).toggleClass( "visible" );
        $( ".main-header" ).toggleClass( "dark-bg" );
        $( "#openmenu" ).toggleClass( "hidden" );
        $( "#closemenu" ).toggleClass( "hidden" );
        // Hide dropdown when closing main menu
        if($("#available-languages").hasClass("visible")){
            $("#available-languages").removeClass("visible")
        }
        event.preventDefault();
    });
    // Open language dropdown on mobile
    $("#active-language").click(function(){
        if($(window).width() < 930){
            $( "#available-languages" ).toggleClass( "visible" );
        }
        event.preventDefault();
    });
    $(".show-more").click(function(){
        $( ".more" ).toggleClass( "visible" );
        $( ".show-more-container" ).toggleClass( "hidden" );
    });
});