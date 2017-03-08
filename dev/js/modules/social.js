module.exports = social;

function social() {
    'use strict';

    var method = {};

    social.init = function() {

        $(document).ready(function() {
                $('.social-feed-container').socialfeed({
                    // FACEBOOK
                    facebook: {
                        accounts: ['@jhole1989'], //Array: Specify a list of accounts from which to pull wall posts
                        limit: 2, //Integer: max number of posts to load
                        access_token: 'YOUR_FACEBOOK_ACCESS_TOKEN' //String: "APP_ID|APP_SECRET"
                    },
                     length:400
             });

        });


        };


        return social;
    }
