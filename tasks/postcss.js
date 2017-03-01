module.exports = function(grunt) {
    grunt.config('postcss', {
            options: {
                map: {
                    inline: false, // save all sourcemaps as separate files...
                },

                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({ browsers: 'last 2 version' }) // add vendor prefixes
                ]
            },
            dist: {
                src: 'dist/css/*.css'
            }
          });
        grunt.loadNpmTasks('grunt-postcss');
    };
