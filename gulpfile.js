var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

//Scripts Task

gulp.task('scripts',function() {
    gulp.src (['node_modules/jquery/dist/jquery.min.js','source/js/*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

//Sass Task
gulp.task('sass', function () {
  return gulp.src([])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('sass:watch', function () {
  gulp.watch('source/scss/main.scss', ['sass']);
});


//Styles Task

gulp.task('styles',function() {
  console.log('Run Styles')
});

//default runs everthing
gulp.task ('default',['scripts','styles', 'sass']);