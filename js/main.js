'use strict';

$(document).ready(function() {

    $("#fb-footer").click(function() {
        window.open("https://google.com.co");
    });

    $(".logo").click(function() {
        window.location.href = "index.html";
    });

    $("#inicio").click(function() {
        alert("Hola");
    });

    $('#subir').click(function(e) {
        e.preventDefault();
        $("body,html").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    if ($(window).scrollTop() == 0) { $("#subir").hide() }

    $(function() {
        $(window).scroll(function() {
            console.log($(window).scrollTop());
            if ($(window).scrollTop() > 100) {
                $("#subir").fadeIn('slow');

            } else {
                $("#subir").fadeOut('slow');
            }
        });
    })

});