var gulp = require('gulp'),
    svgSprites = require('gulp-svg-sprite');

var config = {
  mode: {
    css: {
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}
gulp.task('sprites', function(){
  return gulp.src('./app/assets/images/icons/**/*.svg')
  .pipe(svgSprites(config))
  .pipe(gulp.dest('./app/temp/sprite'));
});
