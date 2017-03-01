module.exports = function(grunt) {
    grunt.config('browserify', {
        dist: {
            src: ['dev/js/application.js'],
            dest: 'dist/js/application.js',
            browserifyOptions: {
                debug: true,
                compress: false,
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
};
