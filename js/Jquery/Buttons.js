$(document).ready(function() {
    $(".buttonInner#circularButton").mouseenter(function(e) {
        var parentOffset = $(this).offset();
        var X = e.pageX - parentOffset.left;
        var Y = e.pageY - parentOffset.top;
        $(this).prev(".buttonCircle").css({ "left": X, "top": Y });
        $(this).prev(".buttonCircle").removeClass("desplode");
        $(this).prev(".buttonCircle").addClass("explode");
    });

    $(".buttonInner#circularButton").mouseleave(function(e) {
        var parentOffset = $(this).offset();
        var X = e.pageX - parentOffset.left;
        var Y = e.pageY - parentOffset.top;
        $(this).prev(".buttonCircle").css({ "left": X, "top": Y });
        $(this).prev(".buttonCircle").removeClass("explode");
        $(this).prev(".buttonCircle").addClass("desplode");
    });

    // Debug script : $('.sendButton').addClass('loading');

    $('.sendButton').click(function(e) {
        $('.sendButton').addClass('loading');

        setTimeout(() => {
            window.open("mailto:me@me.me");
        }, 1000);
        setTimeout(() => {
            $('.sendButton').removeClass('loading');
        }, 1000);
    });
})