$(document).ready(function () {

    $(window).resize(function () {
        if ($(window).width() < 1000) {
            $("#info-box1").css("position-x", "");
            $("#info-box2").removeAttr("style");
            $("#info-box2").css("width", "100%");
            $("#info-box2").css("border-left", "0px");
            $(".clickable-box").css("width", "100%");
        }

        if ($(window).width() > 1000) {
            $(".clickable-box").css("width", "50%");
            $("#info-box2").css("width", "50%");
            $("#info-box2").css("float", "right");
            $("#info-box2").css("border-left", "2px white solid");
            
        }
    });
});


