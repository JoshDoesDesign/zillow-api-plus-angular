
/* FILE SETUP - DISTRIBUTION, TRANSPILATION, MINIFICATION */

var gulp 		= require('gulp');
var babel 		= require('gulp-babel');
var sass 		= require('gulp-sass');

gulp.task('js', function() {
	return gulp.src('./src/js/*.js')
		.pipe(babel()) //Turn your ES6 to ES5
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', function() {
	return gulp.src('./src/sass/*.scss', [])
        .pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
	gulp.watch('./src/sass/*.scss', ['sass']);
	gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('default', ['js', 'sass', 'watch']);