/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect:{
      options: {
        port: 3000,
        livereload: 4542,
        hostname: 'localhost',
        keepalive: true
      },
      lr: {
        options: {
          open: true,
          base: ['src'],
          middleware: function(connect) {
            var static = require('./node_modules/grunt-contrib-connect/node_modules/serve-static');
            return [static('src')];
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', ['connect']);

};
