module.exports = function (grunt) {
    grunt.initConfig({
      eslint: { target: ['src/**/*.ts'] },
      watch: { files: ['src/**/*'], tasks: ['eslint'] },
    });
  
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['eslint', 'watch']);
  };
  