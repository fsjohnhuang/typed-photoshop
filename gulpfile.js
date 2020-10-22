const gulp = require('gulp')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')
const watchify = require('watchify')
const fancy_log = require('fancy-log')


const watchedBrowserify = watchify(
    browserify({ 
        basedir: '.', 
        debug: false,
        cache: {},
        packageCache: {},
        entries: ['src/main.ts']
    }).plugin(tsify))

function bundle() {
    return watchedBrowserify
        .bundle()
        .on('error', fancy_log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'))
}

gulp.task('default', bundle)

watchedBrowserify.on('update', bundle)
watchedBrowserify.on('log', fancy_log)