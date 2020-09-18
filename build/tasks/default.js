const gulp = require('gulp');
const {build} = require('./build');
const {clean} = require('./clean');
const {jsdoc} = require('./jsdoc');
const {lint} = require('./lint');

/**
 * Default task
 * Run using "gulp"
 * Runs clean, build, jsdoc, lint and test
 */
gulp.task('default', gulp.series(clean, build, jsdoc, lint));
