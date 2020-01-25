'use strict';

var gulp = require('gulp');
var arenaBuildUtils = require('../../../../arena-build-utils');
var sass = require('gulp-dart-sass');

gulp.task('scss', function () {
	return gulp.src('./assets/css/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('scss:watch', function () {
	gulp.watch('./assets/css/**/*.scss', ['sass']);
});

gulp.task('publish', function (cb) {
	arenaBuildUtils.publish();
	cb();
});
