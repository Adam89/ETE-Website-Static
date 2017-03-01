module.exports = function(grunt) {
        grunt.config('browserSync', {
           default_options: {
                bsFiles: {
                    src: [
                        "dist/css/*.css",
                        "dist/js/**/*.js",
                        "dist/*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./dist"
                    }
                }
            }
                            
           });

        grunt.loadNpmTasks('grunt-browser-sync');
 };

