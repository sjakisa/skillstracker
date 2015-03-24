'use strict';

var gulp   = require('gulp');
var run = require('gulp-run');

/**
 * Running Bower
 */
gulp.task('bower', function() {
  run('bower install').exec();
})