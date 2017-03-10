// Vendor
global.jQuery = require('jquery');
global.$ = jQuery;


//frameworks



// Modules
var nav = require('./modules/nav')();
var social = require('./modules/social')();

// Bootstrapping
$(function() {

    "use strict";

    nav.init();

});