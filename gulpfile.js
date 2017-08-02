const gulp = require('gulp');
const watch = require('gulp-watch');
const sma = require('gulp-sma');
const flatten = require('gulp-flatten');

const config = require('./config');

const smaParams = {
    compiler: config.compiler,
    dest: config.pluginsDir,
    includeDir: config.includeDir
};

gulp.task('plugins', () => {
    return gulp.src('./src/scripts/**/*.sma')
        .pipe(sma(smaParams))
        .pipe(flatten())
        .pipe(gulp.dest(config.scriptsDir));
});

gulp.task('assets', () => {
    return gulp.src('./assets/**/*')
        .pipe(gulp.dest(config.distDir));
});

gulp.task('plugins:watch', () => {
    return watch('./src/scripts/**/*.sma', {ignoreInitial: false})
        .pipe(sma(smaParams))
        .pipe(flatten())
        .pipe(gulp.dest(config.scriptsDir));
});

gulp.task('assets:watch', () => {
    return watch('./assets/**/*', {ignoreInitial: false})
        .pipe(gulp.dest(config.distDir));
});

gulp.task('default', ['plugins', 'assets']);
gulp.task('watch', ['plugins:watch', 'assets:watch']);