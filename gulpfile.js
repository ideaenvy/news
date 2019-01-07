const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');
const csso = require('gulp-csso');

const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >=7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10' 
];

gulp.task('sass', function () {
    return gulp.src('assets/scss/main.scss')
    .pipe(sass())
    .pipe(autoprefix({ browsers: AUTOPREFIXER_BROWSERS }))
    .pipe(csso())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({stream:true}));
});


gulp.task('serve', gulp.series(['sass'], function(){
    browserSync.init({
        watch: true,
        server: "./",
        port: 4002
    });
    gulp.watch(["assets/scss/*.scss"], gulp.series(['sass'])).on('change', browserSync.reload);
}));
  
gulp.task('default', gulp.series('serve'));