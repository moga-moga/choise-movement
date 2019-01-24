var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

gulp.task('minify-js', function () {
    return gulp.src("src/bundle/choise-movement.js")
        .pipe(uglify({
            output: {
                comments: /^!/
            }
        }))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('minify-scss', function () {
    return gulp.src("src/sass/choise-movement.scss")
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(cleanCSS())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('dist/'));
});