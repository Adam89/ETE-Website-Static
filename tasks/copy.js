module.exports = function(grunt) {
    grunt.config('copy', {
   main: {
                files: [{
                    expand: true,
                    cwd: 'dev',
                    src: [
                        '*.html',
                        'images/{,*/}*.{png,jpg,gif,svg}',
                        'fonts/*.{woff,woff2,eot,svg,ttf,otf}',
                        'libs/*',
                    ],
                    dest: 'dist'
                }]
            }
        });

            grunt.loadNpmTasks('grunt-contrib-copy');
        };