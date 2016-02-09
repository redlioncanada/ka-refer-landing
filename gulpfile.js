var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var rename		= require('gulp-rename');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var watchify = require('watchify');
var flatten = require('gulp-flatten');
var scss = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var uglifyCss = require('gulp-cssnano');
var packageJSON = require('./package.json');
var replace = require('gulp-replace');
var imagemin = require('gulp-imagemin');
var handlebars = require('handlebars');
var handlebarsHTML = require('gulp-handlebars-html')(handlebars);
var mergeStream = require('merge-stream');
var del = require('del');

var jsEntryPoint = './app/js/index.js';
var bundleName = 'redlion-' + packageJSON.name;

gulp.task('browserify', function() {
  var b = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true
  });
  b = watchify(b);
  b.on('update', function(){
    bundleShare(b);
  });
  
  b.add(jsEntryPoint);
  bundleShare(b);
});

gulp.task('html', function() {
	var tasks = [];
	var config = require('./app/config.json');
	for (var language in config.templateData) {
		var templateData = config.templateData[language];

		var task = gulp.src('./app/html/index.handlebars')
			.pipe(replace('{appname}', bundleName))
			.pipe(handlebarsHTML(config.templateData[language], {
				partialsDirectory: ['./app/html/partials']
			}))
			.pipe(rename('index.html'))
			.pipe(gulp.dest('./build/'+language));
		tasks.push(task);
	}
	delete require.cache[require.resolve('./app/config.json')];	//delete config from require cache so we can get updates to it when it changes
	return mergeStream(tasks);
});

gulp.task('scss', function() {
	gulp.src('./app/css/**/*')
		.pipe(scss())
		.pipe(concatCss('index.css'))
		.pipe(rename({basename:bundleName}))
		.pipe(gulp.dest('./build/css'))
		.pipe(uglifyCss())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./build/css'));
});

gulp.task('images', function() {
	gulp.src('./app/images/**/*')
		.pipe(imagemin({
			progressive: true
		}))
		.pipe(gulp.dest('./build/images/'+bundleName))
})

gulp.task('clean', function() {
	del('./build');
})

function bundleShare(b) {
  b.bundle()
    .pipe(source(jsEntryPoint))
    .pipe(flatten())
    .pipe(buffer())
    .pipe(rename({basename:bundleName}))
    .pipe(gulp.dest('./build/javascript'))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./build/javascript'));
}

gulp.task('build-dev', ['images', 'browserify', 'html', 'scss'], function() {
	gulp.watch('./app/css/**/*.scss', ['scss']);
	gulp.watch('./app/html/**/*.handlebars', ['html'])
	gulp.watch('./app/config.json', ['html'])
	gulp.watch('./app/js/**/*.js', ['browserify'])
	gulp.watch('./app/images/**/*', ['images'])
});

gulp.task('default', ['clean', 'build-dev'], function(){});