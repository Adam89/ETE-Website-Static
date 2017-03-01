module.exports = function(grunt) {
    grunt.config('watch', {
         sass: {
                files: 'dev/scss/**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },

            html: {
                files: ['dev/*.html'],
                tasks: ['copy'],
                options: {
                    livereload: true
                }
            },

             js: {
                files: ['dev/js/**/*.js'],
                tasks: ['browserify'],
                options: {
                    livereload: true
                }
            },

            images: {
                files: ['dev/images/{,*/}*.{png,jpg,gif,svg}'],
                tasks: ['copy'],
                options: {
                    livereload: true
                }
          }
  });

    grunt.loadNpmTasks('grunt-contrib-watch');

};