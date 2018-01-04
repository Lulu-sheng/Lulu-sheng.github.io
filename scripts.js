
$(document).ready(function () {

    $(window).resize(function () {
        if ($(window).width() < 1000) {
            $("#info-box1").hide();
            $("#info-box2").css("width", "100%");
            $("#info-box2").css("border-left", "0px");
            $(".zoom-container").css("width", "100%");
        }

        if ($(window).width() > 1000) {
            $(".zoom-container").css("width", "50%");
            $("#info-box1").show();
            $("#info-box2").css("width", "50%");
            $("#info-box2").css("border-left", "2px white solid");
        }
    });

    $(window).scroll( function() {
        var scroll = $(window).scrollTop();
        if (scroll <= 105)
        {
            $("h1").fadeIn(400);
        } else {
            $("h1").fadeOut(600);
        }
    });
});


