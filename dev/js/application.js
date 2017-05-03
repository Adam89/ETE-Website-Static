// Vendor
global.jQuery = require('jquery');
global.$ = jQuery;


//frameworks



// Modules
var social = require('./modules/social')();

// Bootstrapping
$(function() {

    "use strict";

    social.init();

});