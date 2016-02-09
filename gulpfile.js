var gulp        	= require('gulp');
var uglify      	= require('gulp-uglify');
var buffer 			= require('vinyl-buffer');
var rename			= require('gulp-rename');
var browserify 		= require('browserify');
var source 			= require("vinyl-source-stream");
var watchify 		= require('watchify');
var flatten 		= require('gulp-flatten');
var scss 			= require('gulp-sass');
var concatCss 		= require('gulp-concat-css');
var uglifyCss 		= require('gulp-cssnano');
var replace 		= require('gulp-replace');
var plumber 		= require('gulp-plumber');
var insert 			= require('gulp-insert');
var imagemin 		= require('gulp-imagemin');
var strip			= require('gulp-strip-comments');
var handlebars 		= require('handlebars');
var handlebarsHTML  = require('gulp-handlebars-html')(handlebars);
var mergeStream 	= require('merge-stream');
var del 			= require('del');

var packageJSON 	= require('./package.json');
var jsEntryPoint 	= './app/js/index.js';
var bundleName 		= 'redlion-' + packageJSON.name;
var compiledMessage = "This file must be compiled using gulp and checked in to the below url. Do not make modifications to this file directly.\r\n" + packageJSON.repository.url;

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
			.pipe(plumber())
			.pipe(replace('{appname}', bundleName))
			.pipe(handlebarsHTML(config.templateData[language], {
				partialsDirectory: ['./app/html/partials']
			}))
			.pipe(replace('{appname}', bundleName))
			.pipe(strip())
			.pipe(insert.prepend(constructComment(compiledMessage, 'html')))
			.pipe(rename('index.html'))
			.pipe(gulp.dest('./build/'+language))
			.pipe(replace('"/', '"../'))
			.pipe(rename('index.dev.html'))
			.pipe(gulp.dest('./build/'+language))
		tasks.push(task);
	}
	delete require.cache[require.resolve('./app/config.json')];	//delete config from require cache so we can get updates to it when it changes
	return mergeStream(tasks);
});

gulp.task('scss', function() {
	gulp.src('./app/css/**/*')
		.pipe(plumber())
		.pipe(replace('{appname}', bundleName))
		.pipe(scss())
		.pipe(concatCss('index.css'))
		.pipe(rename({basename:bundleName}))
		.pipe(insert.prepend(constructComment(compiledMessage, 'css')))
		.pipe(gulp.dest('./build/css'))
		.pipe(uglifyCss())
		.pipe(insert.prepend(constructComment(compiledMessage, 'css')))
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('./build/css'));
});

gulp.task('images', function() {
	gulp.src('./app/images/**/*')
		.pipe(plumber())
		.pipe(imagemin({
			progressive: true
		}))
		.pipe(gulp.dest('./build/images/'+bundleName))
})

gulp.task('clean', function() {
	del('./build');
})

function constructComment(msg,type) {
	var pre, post;
	switch (type) {
		case 'js':
		case 'css':
			pre = '/* ', post = ' */';
			break;
		case 'html':
			pre = '<!-- ', post = ' -->';
			break;
	}
	if (pre) return pre + msg + post + '\r\n';
	return '';
}

function bundleShare(b) {
  b.bundle()
  	.pipe(plumber())
    .pipe(source(jsEntryPoint))
    .pipe(flatten())
    .pipe(buffer())
    .pipe(insert.prepend(constructComment(compiledMessage, 'js')))
    .pipe(rename(bundleName+'.js'))
    .pipe(gulp.dest('./build/javascript'))
    .pipe(uglify({preserveComments:'license'}))
    .pipe(rename(bundleName+'.min.js'))
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