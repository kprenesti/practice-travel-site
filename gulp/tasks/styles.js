var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    imports = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('css', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([imports, mixins, cssvars, autoprefixer, nested]))
  .on('error', function(error){
    console.log(error.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
