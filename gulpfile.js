var gulp = require('gulp'),
    uglify = require('gulp-uglify');


//Scripts Task
//Uglifies
gulp.task('scripts',function() {
    gulp.src ('source/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
//Styles Task

gulp.task('styles',function() {
  console.log('Run Styles')
});

gulp.task ('default',['scripts','styles']);