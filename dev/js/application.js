// Vendor
global.jQuery = require('jquery');
global.$ = jQuery;

// Modules
var nav = require('./modules/nav')();

// Bootstrapping
$(function() {

    "use strict";

    nav.init();

});