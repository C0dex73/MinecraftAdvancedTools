$(document).ready(function() {
    var potions = $('.bubble#potions');
    var iframe = $('iframe#bubbleVideo');
    var old = "";
    var actual = "";
    var url = "";
    var autoplay = true;
    $('.bubbles').on({
        'scroll': function() {
            var position = potions.position();
            console.log(position.top);

            if (position.top > -390) {
                actual = "Potions";
                url = "https://www.youtube.com/embed/YoMZN9PlWPI?start=44";
                autoplay = true;
            } else if (position.top > -965) {
                actual = "Banners";
                url = "https://www.youtube.com/embed/NGdQWwD1Jwo?autoplay=1"
                autoplay = false;
            } else if (position.top > -1540) {
                actual = "Texture";
                url = "./Medias/Texture Editor.mp4";
                autoplay = false;
            } else if (position.top > -2100) {
                actual = "Firework";
                url = "https://www.youtube.com/embed/WZd7E0FnefU?start=90";
                autoplay = true;
            } else {
                url = "https://www.youtube.com/channel/UC38SRod5Ch653vPlCxWwyqQ";
                autoplay = false;
                actual = "channel";
            }

            if (actual != old) {

                iframe.addClass('bye');
                console.log("bye");

                setTimeout(() => {
                    old = actual;
                    console.log(old);
                    if (autoplay) {
                        iframe.attr('src', url + "&autoplay=1");
                    } else {
                        iframe.attr('src', url);
                    }
                }, 10);


                setTimeout(() => {
                    iframe.removeClass('bye');
                    iframe.addClass('hello');
                }, 250);

                setTimeout(() => {
                    iframe.removeClass('hello');
                }, 250);
            };
        },
    });
});