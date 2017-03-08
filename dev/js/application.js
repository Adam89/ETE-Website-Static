// Vendor
global.jQuery = require('jquery');
global.$ = jQuery;


//frameworks

require('./modules/dot.min.js')();
require('./modules/jquery.socialfeed.js')();
require('./modules/moment.js')();

// Modules
var nav = require('./modules/nav')();
var nav = require('./modules/social')();

// Bootstrapping
$(function() {

    "use strict";

    nav.init();

});