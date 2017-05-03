module.exports = social;

function social() {
    'use strict';

    var method = {};

    social.init = function() {


        $(document).ready(function() {
            $(".moreVideos a").click(function(e) {
                e.preventDefault();

                $("#someFrame").attr("src", $(this).attr("href"));
                $('html, body').animate({
                    scrollTop: $(".videoAndGigs").offset().top
                }, 800) -25;
            });
        });


    };


    return social;
}
