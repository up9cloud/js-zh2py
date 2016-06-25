'use strict';

const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const rename = require('gulp-rename');

// convert
const browserify = require('browserify');
const babelify = require('babelify');
const uglify = require('gulp-uglify');

const vinylSource = require('vinyl-source-stream');
const vinylBuffer = require('vinyl-buffer');

const logger = gulpUtil.log;
const path = {
    DEST: './build'
};

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['browserify']);

gulp.task('browserify', () => {
    browserify({
            entries: ['./src/zh2py.js'], // Only need initial file, browserify finds the deps
            debug: false // Gives us sourcemapping
        })
        .require('./src/zh2py.js', {
            expose: 'zh2py'
        })
        .transform(babelify, {
            presets: ['es2015']
        })
        .on('error', logger)
        .bundle()
        .pipe(
            vinylSource('bundle.min.js')
            .on('error', logger)
        )
        .pipe(
            vinylBuffer()
            .on('error', logger)
        )
        // http://stackoverflow.com/questions/24992980/how-to-uglify-output-with-browserify-in-gulp
        .pipe(uglify())
        .pipe(gulp.dest(path.DEST))
});

// gulp.task('uglify', () => {
//     gulp.src(path.DEST + '/bundle.js')
//         .pipe(
//             uglify()
//             .on('error', logger)
//         )
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(gulp.dest(path.DEST));
// });

// Rerun the task when a file changes
gulp.task('watch', () => {
    gulp.watch('./src/**/*.js', ['browserify']);
});