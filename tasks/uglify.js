module.exports = function(grunt) {
    grunt.config('uglify', {
            options: {
            },
            dist: {
                files: {
                    'dist/js/application.min.js': 'dist/js/application.js'
                }
            }
        });
              grunt.loadNpmTasks('grunt-contrib-uglify');
        };