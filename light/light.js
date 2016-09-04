$(document).ready(function(){
    $(".imageContainer").hide(0).delay(300).fadeIn(800)
});

$("#imgOne").click(function() {
    $('html, body').animate({
        scrollTop: $("#session-one").offset().top
    }, 900);
});

$("#imgTwo").click(function() {
    $('html, body').animate({
        scrollTop: $("#session-two").offset().top
    }, 900);
});

$("#imgThree").click(function() {
    $('html, body').animate({
        scrollTop: $("#session-three").offset().top
    }, 900);
});