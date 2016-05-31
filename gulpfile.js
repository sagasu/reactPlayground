"use strict"

var gulp = require('gulp')
var connect = require('gulp-connect') // run local dev server
var open = require('gulp-open') // open url in a web browser
var browserify = require('browserify') // bundles js
var reactify = require('reactify') // transforms React JSX to JS
var source = require('vinyl-source-stream') // use conventional text streams with Gulp
var concat = require('gulp-concat')
var lint = require('gulp-eslint') // lint js files, including jsx

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        images: './src/images/*',
        mainJs: './src/main.js',
        css: [
          './node_modules/bootstrap/dist/css/bootstrap.min.css',
          './node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
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

gulp.task('js', () => {
    browserify(config.paths.mainJs)
        .transform(reactify) // using to transform JSX
        .bundle() // multiple js file to one
        .on('error', console.error.bind()) // error handling :)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload())
})

gulp.task('css', () =>{
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
})

gulp.task('images', () => {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload())

    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist))
})

gulp.task('lint', () => {
    // make sure to return - to see errors in console
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format())
})

gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
})

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);