// alert("Does it work?");
$(document).ready(function(){

// MARCEL JS
var elWrap = $(".wrap");
var elMenu = $(".menu");
var osMenu = elMenu.offset().top;
var osFoot = $(".foot").offset().top - elMenu.height();

$(window).scroll($.throttle(10, function() {

    elMenu.css("top", 0);
    var edge = $(window).scrollTop();

    if (osMenu <= edge && osFoot > edge) {
        elWrap.addClass("dock").removeClass("stop");
    }
    else {
        elWrap.removeClass("dock stop");
    }
    if (osFoot <= edge) {
        elMenu.css("top", osFoot);
        elWrap.removeClass("dock").addClass("stop");
    }
}));

    $("a.scroll-buttona").on("click", function(){
    var sectionName = $(this).attr("href");
    var sectionPlacement = $(sectionName).offset().top;
    console.log(sectionPlacement);
    $("html, body").animate({scrollTop: sectionPlacement}, 1000);
      return false;   
});
    $("a.scroll-buttonb").on("click", function(){
        $('html,body').animate({scrollTop: 0},'slow');
        return false;
});

// Aim: get our lightbox to appear when an image is clicked on showing the correct image.

// STEP 1: Attach an event listener to all the images inside our sections (not the header logo or the footer photo)
    $("section img").on("click", function() {

    // STEP 2: Fade the light box in over 250ms.
    $("#lightbox").fadeIn(250);

    // STEP 3: Store the src attr of the image that has been clicked on - I want store one of its attributes - that is src;
    // var means variable - this is where you are storing the information.
    var imageSrc =$(this).attr("src");
    console.log(imageSrc);

    // STEP 4: Replace the lightbox img source with the one we've just stored.
    $("#lightbox img").attr("src", imageSrc);
});

// STEP 3: Attach an event listener to our light box
$("#lightbox").on("click", function() {

    // STEP 4: Fade light box out
    $("#lightbox").fadeOut(250);
});

});