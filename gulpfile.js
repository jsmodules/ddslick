/* eslint-env node */

var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var eslint = require("gulp-eslint");

gulp.task("uglify", ["lint:tdd"], function() {
    return gulp
        .src(__dirname + "/src/jquery.ddslick.js")
        .pipe(uglify())
        .pipe(rename("jquery.ddslick.min.js"))
        .pipe(gulp.dest(__dirname + "/dist"));
});

gulp.task("lint:tdd", function() {
    return gulp
        .src(__dirname + "/src/jquery.ddslick.js")
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task("lint", function() {
    return gulp
        .src(__dirname + "/src/jquery.ddslick.js")
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("watch", function() {
    gulp.watch(__dirname + "/src/**/*.js", ["uglify"]);
});

gulp.task("build", ["uglify"]);
gulp.task("test", ["lint"]);
gulp.task("default", ["watch"]);
