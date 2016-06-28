var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var vtexRender = require('gulp-vtex-render');
var manifest = require('./src/vtex.sdk@1.0.0/manifest.json')

gulp.task('render', function() {
  return gulp.src('./src/vtex.sdk@1.0.0/render/assets/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./src/vtex.sdk@1.0.0/.build/render/assets'))
    .pipe(vtexRender({manifest: manifest}))
    .pipe(gulp.dest('./src/vtex.sdk@1.0.0/.build/render/components'))
})

gulp.task('default', ['render'])


//
// var paths = {
//   babel: './src/**/*.js',
//   libs: './libs/**',
//   meta: './src/**/*.json'
// }
//
// //basic babel task
// gulp.task('babel', function() {
//   return gulp.src(paths.babel)
//   .pipe(watch(paths.babel, function(vinyl) {
//     console.log('Done');
//   }))
//   .pipe(plumber())
//   .pipe(babel())
//   .pipe(gulp.dest('dist'))
// });
//
// gulp.task('copyLibs', function() {
//   return gulp.src(paths.libs)
//   .pipe(watch(paths.libs, function(vinyl) {
//     console.log('Changed');
//   }))
//   .pipe(gulp.dest('dist'));
// })
//
// gulp.task('copyMeta', function() {
//   return gulp.src(paths.meta)
//   .pipe(watch(paths.meta, function(vinyl) {
//     console.log('Changed');
//   }))
//   .pipe(gulp.dest('dist'));
// })
//
// gulp.task('default', ['babel', 'copyLibs', 'copyMeta'])
