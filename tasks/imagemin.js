module.exports = function(grunt) {
    grunt.config('imagemin', {
dist: {
      options: {
        optimizationLevel: 5
      },
      files: [{
         expand: true,
         cwd: 'dev/images',
         src: ['**/*.{png,jpg,gif}'],
         dest: 'dist/images'
      }]
   }
 });
       grunt.loadNpmTasks('grunt-contrib-imagemin');
};
