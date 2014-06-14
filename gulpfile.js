var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./app/client/templates/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./app/client/templates/css'));
});

gulp.task('watch', function() {
    gulp.watch('./app/client/templates/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
