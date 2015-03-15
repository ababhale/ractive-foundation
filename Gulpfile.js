var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('sass', function () {
    gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
    gulp.src('./node_modules/foundation/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css/foundation'));
});


gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./public/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(
        [
            './public/*.html',
            './src/**/*.js'
        ],
        [
            'sass',
            'copy-foundation',
            'html'
        ]
    );
});

gulp.task('default', ['connect', 'watch']);