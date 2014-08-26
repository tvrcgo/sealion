
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('js', function(){
	gulp.src('app/appname/src/*.js')
		.pipe(uglify())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('app/appname/main.js'));
});

gulp.task('default', ['js']);
