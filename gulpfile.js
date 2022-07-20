var gulp = require('gulp')
var connect = require('gulp-connect')
var postcss = require('gulp-postcss')
var sass = require('gulp-sass')(require('sass'))
require('dotenv').config()

var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')

var mode = process.env.NODE__ENV || 'dev'
var outDir = (mode != 'dev') ? 'dist' : 'dev'

gulp.task('scss', function () {
    var processors = [
        autoprefixer,
        cssnano
    ];
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('src/scss'))
        .pipe(connect.reload())
})

gulp.task('connectDev', () => {
    connect.server({
        livereload: true
    })
})

gulp.task('watch', () => {
    gulp.watch('src/scss/*.scss', ['scss'])
})

gulp.task('default', ['scss', 'webserver', 'watch'])