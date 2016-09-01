var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

    gulp.task('cssInject', ['css'], function(){
      return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
    });

    gulp.task('watch', function(){

      browserSync.init({
        server: {
          baseDir: "app"
        }
      });

      watch('./app/index.html', function(){
        browserSync.reload();
      })
      watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
      });

      gulp.task('default', function(){
        console.log('You need to add stuff to the default task!');
      });
    });
