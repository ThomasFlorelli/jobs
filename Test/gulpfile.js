const gulp = require("gulp")
const browserify = require("browserify")
const source = require("vinyl-source-stream")
const babel = require('gulp-babel')
const less = require('gulp-less')

const src = "./app/public/"
const destination = "app/dist"

gulp.task("bundle", function () {
    return browserify({
        entries: src + "main.jsx",
        debug: true
    }).transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest(destination))
})

gulp.task("copy", ["bundle"], function () {
    return gulp.src([src + "index.html"])
        .pipe(gulp.dest(destination))
})

gulp.task("css", function () {
    return gulp.src([src + "style.less"])
        .pipe(less())
        .pipe(gulp.dest(destination))
})

gulp.task("default", ["copy"], function (){
   console.log("Gulp completed...")
})
