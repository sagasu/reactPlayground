"use strict"

var gulp = require('gulp')
var connect = require('gulp-connect') // run local dev server
var open = require('gulp-open') // open url in a web browser

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
}

//Start a local dev server
gulp.task('connect', () => {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true //anytime file change reload in browser
    })
})

// task open has dependency on task connect, it means it will run after
gulp.task('open', ['connect'], () => {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'})); // go get index file and open it in browser
})

gulp.task('html', () => {
    // go get all html files, put them in dest path and reload browser
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload())
})

gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html']);
})

gulp.task('default', ['html', 'open', 'watch']);