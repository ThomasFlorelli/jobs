var gulp = require("gulp")
var browserify = require("browserify")
var source = require("vinyl-source-stream")
const babel = require('gulp-babel')

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/public/main.jsx",
        debug: true
    }).transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
})

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/public/index.html"])
        .pipe(gulp.dest("app/dist"))
})

gulp.task("default", ["copy"], function (){
   console.log("Gulp completed...")
})
