$(document).ready(function() {

    $('#nav').onePageNav();

// navbar default should have below class
$(".navbar-fixed-top").addClass("navbar-big");



//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    var width = $(window).width()

    // if ( ($(".navbar").offset().top > 30) && (width < 767) ) {
    //     $(".navbar-fixed-top").addClass("top-nav-collapse");
    // } else {
    //     $(".navbar-fixed-top").removeClass("top-nav-collapse");
    // }

    // this will only add the additional padding if: window width is greater than 767, and
    if ( (width > 767) && ($(".navbar").offset().top > 50) ) {
       $(".navbar-fixed-top").removeClass("navbar-big");
    } else {
        $(".navbar-fixed-top").addClass("navbar-big");
    }
});

});


