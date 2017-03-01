/*!
 * Adams Gruntfile
 * @author Adam
 */


module.exports = function(grunt) {

    var tasks = { scope: ['devDependencies', 'dependencies'] };


    // Gruntfile.js
    var options = {
        config: {
            src: "/grunt/*.js"
        }
    };

    var configs = require('load-grunt-configs')(grunt, options);


    require('load-grunt-tasks')(grunt, tasks);
    grunt.initConfig(configs);
    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['sass', 'postcss', 'browserify', 'uglify', 'copy', 'imagemin', 'browserSync', 'watch']);
};
