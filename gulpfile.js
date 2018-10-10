var gulp = require('gulp'),
    uglify = require('gulp-uglify');
var sass = require('gulp-sass');

//Scripts Task
//Uglifies
gulp.task('scripts',function() {
    gulp.src ('source/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

//Sass Task
gulp.task('sass', function () {
  return gulp.src('source/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'));
});
gulp.task('sass:watch', function () {
  gulp.watch('source/scss/*.scss', ['sass']);
});

//Styles Task

gulp.task('styles',function() {
  console.log('Run Styles')
});

//default runs everthing
gulp.task ('default',['scripts','styles', 'sass']);