var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    webpackConfig = require('./webpack.config.js');
syntax = 'sass', // Syntax: sass or scss;
    postcss = require('gulp-postcss');
webp = require('gulp-webp');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
        open: false,
        // online: false, // Work Offline Without Internet Connection
        // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
    })
});


gulp.task('styles', function() {
    return gulp.src('app/' + syntax + '/**/*.' + syntax + '')
        .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(gulp.dest('app/build'))
        .pipe(browserSync.stream())
});


gulp.task('styles-critical', function() {
    return gulp.src('app/' + syntax + '/critical.' + syntax + '')
        .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
        .pipe(autoprefixer(['last 4 versions']))
        .pipe(gulp.dest('app/build'))
        .pipe(browserSync.stream())
});


gulp.task('code', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});


gulp.task('js', function() {
    return gulp.src('./app/build/app.min.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({ stream: true }));
});





gulp.task('watch', function() {
    gulp.watch('app/css/*.css', gulp.parallel('styles'));
    gulp.watch('app/sass/*.sass', gulp.parallel('styles'));
    gulp.watch(['app/js/*.js'], gulp.parallel('js'));
    gulp.watch('app/*.html', gulp.parallel('code'))
});
gulp.task('default', gulp.parallel('browser-sync', 'styles', 'styles-critical', 'watch', 'js', ));


//конвертер картинок в формат webp запуск командой gulp webp



gulp.task('webp', function() {
    return gulp.src(['app/img/**/**/**/*.jpg', 'app/img/**/**/**/*.png', 'app/img/**/**/**/*.jpeg', 'app/img/**/**/**/*.JPG', 'app/img/**/**/**/*.PNG', 'app/img/**/**/**/*.JPEG', ])
        .pipe(webp())
        .pipe(gulp.dest('app/webp/img/'))
});