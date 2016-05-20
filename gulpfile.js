var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var paths = {
  babel: './src/**/*.js',
  libs: './libs/**',
  meta: './src/**/*.json'
}

//basic babel task
gulp.task('babel', function() {
  return gulp.src(paths.babel)
  .pipe(watch(paths.babel, function(vinyl) {
    console.log('Done');
  }))
  .pipe(plumber())
  .pipe(babel())
  .pipe(gulp.dest('dist'))
});

gulp.task('copyLibs', function() {
  return gulp.src(paths.libs)
  .pipe(watch(paths.libs, function(vinyl) {
    console.log('Changed');
  }))
  .pipe(gulp.dest('dist'));
})

gulp.task('copyMeta', function() {
  return gulp.src(paths.meta)
  .pipe(watch(paths.meta, function(vinyl) {
    console.log('Changed');
  }))
  .pipe(gulp.dest('dist'));
})

gulp.task('default', ['babel', 'copyLibs', 'copyMeta'])
