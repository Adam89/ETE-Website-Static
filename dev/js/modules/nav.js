module.exports = nav;

function nav() {
    'use strict';

    var method = {};

    nav.init = function() {

        var hamburger = document.querySelector('.wrapper__hamburger');
        var mobileNav = document.querySelector('.mobileNav');


        hamburger.addEventListener('click', function() {

            if (mobileNav.style.display == 'none') {
                event.preventDefault();
                mobileNav.style.display = 'block';
            } else {
                event.preventDefault();
                mobileNav.style.display = 'none';
            }
        });


    };


    return nav;
}
