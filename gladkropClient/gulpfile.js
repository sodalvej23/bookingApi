// gulp
var gulp = require('gulp');

// plugins
//var connect = require('gulp-connect');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clear = require('gulp-rimraf');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps')

// tasks
gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
    gulp.src('./app/js/bundled.js')
      .pipe(clean({force: true}));
});
gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
      .pipe(refresh(lrserver))
});
gulp.task('minify-js', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'))
      .pipe(refresh(lrserver))
});
gulp.task('copy-bower-components', function () {
  gulp.src('./app/bower_components/**')
    .pipe(gulp.dest('dist/bower_components'))
      .pipe(refresh(lrserver))
});
gulp.task('copy-html-files', function () {
  gulp.src('./app/**/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(refresh(lrserver))
});

gulp.task('images', function() {
    gulp.src('./app/images/**/*')
        .pipe(gulp.dest('dist/images/'))
        .pipe(refresh(lrserver)); // Tell the lrserver to refresh
});

gulp.task('browserify', function() {
  gulp.src(['app/js/main.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('bundled.js'))
  .pipe(gulp.dest('./app/js'))
      .pipe(refresh(lrserver))
});
gulp.task('browserifyDist', function() {
  gulp.src(['app/js/main.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('bundled.js'))
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('js', function () {
    gulp.src(['src/**/module.js', 'src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('bundel.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
})



var embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

// Set up an express server (but not starting it yet)
var server = express();
// Add live reload
server.use(livereload({port: livereloadport}));
// Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));
// Because I like HTML5 pushstate .. this redirects everything back to our index.html
server.all('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist' });
});

// Dev task
gulp.task('dev', function() {
    // Start webserver
    server.listen(serverport);
    // Start live reload
    lrserver.listen(livereloadport);
    // Run the watch task, to keep taps on changes
    //gulp.run('watch');
});


gulp.task('watch', ['lint'], function() {
    // Watch our scripts
    gulp.watch(['app/js/*.js', 'app/js/**/*.js'],[
        'lint',
        'browserify'
    ]);
    gulp.watch(['app/index.html', 'app/partials/**/*.html'], [
        'copy-html-files'
    ]);gulp.watch(['app/styles/**/*.scss'], [
        'styles'
    ]);
    gulp.watch(['app/css/**/*.css'], [
        'minify-css'
    ]);
});



// default task
gulp.task('default',
  ['lint', 'browserify', 'connect']
);
// build task
gulp.task('build',
  ['lint', 'minify-css', 'browserifyDist', 'copy-html-files', 'images', 'copy-bower-components', 'watch', 'dev']
);