"use strict";
// const gulp = require("gulp");
// const minify = require("gulp-minify");
// const ts = require("gulp-typescript");
// const tsProject = ts.createProject("tsconfig.json");
// const inject = require("gulp-inject-string");
// var sourcemaps = require("gulp-sourcemaps");
import gulp from "gulp";
import minify from "gulp-minify";
import ts from "gulp-typescript";
import inject from "gulp-inject-string";
import sourcemaps from "gulp-sourcemaps";
const tsProject = ts.createProject("tsconfig.json");
gulp.task("build", () => {
    return (
        tsProject
        .src()
        .pipe(tsProject())
        //.pipe(minify({ ext: { min: ".min.js" } }))
        .pipe(gulp.dest("./bin"))
    );
});



gulp.task(
    "build"
);

