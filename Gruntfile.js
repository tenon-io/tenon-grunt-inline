/*
 * tenon-grunt-inline
 * https://github.com/tenon-io/tenon-grunt-inline
 *
 * Copyright (c) 2015 Tenon LLC
 * Created By: Morgan 'ARR\!' Allen http://github.com/morganrallen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    tenonInline: {
      basic: {
        options: {
          dest: "test/123_output.html",
          input: "test/fixtures/123.html"
        }
      },

      altAssets: {
        options: {
          basedir: "test/fixtures/alt",
          dest: "test/1234_output.html",
          input: "test/fixtures/1234.html"
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'tenonInline', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
};
