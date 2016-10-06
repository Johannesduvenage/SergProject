$(function() {

	// Custom JS

// owl-carousel
// var owl =$(".owl-carousel");
// owl.owlCarousel({
//     loop: true,
//     nav: false,
//     dots: true,
//     items:1,
//     navText: "",
//     autoplay:true,
//     auotoplayTimeout:1000,
//     autoplayHoverPause: false
//   });
// $(".next").click(function(){
// 	owl.trigger('next.owl.carousel');
// })
// $(".prev").click(function(){
// 	owl.trigger("prev.owl.carousel");
// });

// scroll to

$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top -85;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

// Header nav

jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $(".top-line").addClass("white");
    } else {
        $(".top-line").removeClass("white");
    }
});

    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 120) {
    //         $(".top-line").addClass("white");
    //     } else {
    //         $(".top-line").removeClass("white");
    //     }
    // });

// Toggle mnu
$(".toggle").click(function(){
    $(this).toggleClass("on");
    $('.nav').slideToggle();
});
    // autoclose
    $(".nav").on("click", "li", function () {
        //$("#nav").slideToggle();
        $(".toggle").click();
    });


//scrollup
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    }); 

});
