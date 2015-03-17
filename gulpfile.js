'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  return browserify({ debug: true })
    .transform(babelify)
    .require('./src/main.js', { entry: true })
    .bundle()
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(source('index.js'))
    .pipe(gulp.dest('lib'));
});
