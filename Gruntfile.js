/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect:{
      options: {
        port: 3000,
        livereload: 4542,
        hostname: 'localhost'
      },
      lr: {
        options: {
          open: true,
          base: ['src'],
        //   middleware: function(connect) {
        //     var static = require('./node_modules/grunt-contrib-connect/node_modules/serve-static');
        //     return [static('src')];
        //   }
        }
      }
    },
    watch: {
        src:{
          files: 'src/*',
          options: {
            livereload: '<%= connect.options.livereload %>'
          }          
        }
      }
  });
      

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['connect', 'watch']);

};
