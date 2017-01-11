var gulp = require('gulp');
var sass = require('gulp-sass');

var SASS_PATHS = {
	'src': './scss/**/*.scss',
	'dst': './css'
};

gulp.task('build', function() {
	return gulp.src(SASS_PATHS['src'])
	.pipe(sass())
	.pipe(gulp.dest(SASS_PATHS['dst']))
});