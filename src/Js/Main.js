$(document).ready(function(){
    // Global Variables accepting the click event


    // Handling btn click events
    $("a[href^='#']").click(function(e){
        e.preventDefault();
        var position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        }, 500, 'linear');
    });

    // Handling navbar scrolled change
    $(window).scroll(function(){
        $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 10);
    });

});