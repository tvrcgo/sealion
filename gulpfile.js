
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var fs = require('fs');

function walk(path, ondir, onfile) {
	var dirs = fs.readdirSync(path);
	dirs.forEach(function(item){
		if (fs.statSync(path+'/'+item).isDirectory()) {
			walk(path+'/'+item, ondir, onfile);
			if (typeof ondir === 'function') ondir(path+'/'+item, item);
		}
		else {
			if (typeof onfile === 'function') onfile(path+'/'+item, item);
		}
	});
}

gulp.task('js', function(){

	walk('app', function(path, dir){
		if (fs.existsSync(path+'/src') && dir!=='src') {
			console.log('concat:', path);
			gulp.src(path+'/src/*.js')
				.pipe(uglify())
				.pipe(concat('main.js'))
				.pipe(gulp.dest(path));
		}
	});

	gulp.src('module/src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('module'));

	console.log('done');

});

gulp.task('default', ['js']);
