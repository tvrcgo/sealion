
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var fs = require('fs');

gulp.task('js', function(){

	var dirs = fs.readdirSync('app');
	dirs.forEach(function(item){
		if (fs.statSync('app/'+item).isDirectory()) {
			gulp.src('app/'+item+'/src/*.js')
				.pipe(uglify())
				.pipe(concat('main.js'))
				.pipe(gulp.dest('app/'+item+'/main.js'));
		}
	});
});

gulp.task('default', ['js']);
