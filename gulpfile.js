var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    imports = require('postcss-import');

// ============ TASKS ============//
gulp.task('css', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([imports, cssvars, autoprefixer, nested]))
  .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch', function(){
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('css');
  });

  gulp.task('default', function(){
    console.log('You need to add stuff to the default task!');
  });
});
