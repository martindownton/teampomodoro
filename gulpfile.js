var gulp = require('gulp');
var sass = require('gulp-sass');
var apf = require('gulp-autoprefixer');

gulp.task('css', function() {
	gulp.src('./app/client/templates/sass/*.scss')
		.pipe(sass())
		.pipe(apf('last 2 version', 'ie 8', 'ie 9'))
		.pipe(gulp.dest('./app/client/templates/css'));
});

gulp.task('watch', function() {
    gulp.watch([
    	'./app/client/templates/sass/*.scss',
    	'./app/client/templates/sass/modules/*.scss',
    ], ['css']);
});

gulp.task('default', ['css']);