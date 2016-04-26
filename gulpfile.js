var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var paths = {
  babel: './src/**/*.js',
  libs: './libs/**'
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

gulp.task('copy', function() {
  return gulp.src(paths.libs)
  .pipe(watch(paths.libs, function(vinyl) {
    console.log('Changed');
  }))
  .pipe(gulp.dest('dist'));
})

gulp.task('default', ['babel', 'copy'])
