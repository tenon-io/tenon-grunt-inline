/*
 * grunt-tenon
 * https://github.com/morgan/tenon-grunt
 *
 * Copyright (c) 2015 Morgan 'ARR\!' Allen
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var htmlInline = require('html-inline');

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('tenonInline', 'Bundle assets for testing with Tenon.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({});

        if (!options.input) {
            grunt.log.error('options.input is required.');
            return false;
        }

        var done = this.async();
        var basedir = path.resolve(process.env.PWD, options.basedir || path.dirname(options.input));

        var inliner = htmlInline({
            basedir: basedir
        });

        fs.createReadStream(options.input).pipe(inliner).pipe(fs.createWriteStream(options.dest)).on('close', function () {
            console.log('(done.writing.)');

            done();
        });
    });

};
