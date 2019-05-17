/* 1° ESEMPIO
function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask
*/


/* 2° ESEMPIO 
const { series } = require('gulp');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
// body omitted
cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
// body omitted
cb();
}

exports.build = build;
exports.default = series(clean, build);
  */

/* 3° esempio 
const { series } = require('gulp');

function transpile(cb) {
// body omitted
cb();
}

function bundle(cb) {
// body omitted
cb();
}

exports.build = series(transpile, bundle);

const { parallel } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = parallel(javascript, css);
*/

/* 4° esempio 
const { series } = require('gulp');

function minify(cb) {
  // body omitted
  cb();
}


function transpile(cb) {
  // body omitted
  cb();
}

function livereload(cb) {
  // body omitted
  cb();
}

//process.env.NODE_ENV = 'production';

if (process.env.NODE_ENV === 'production') {
  exports.build = series(transpile, minify);
} else {
  exports.build = series(transpile, livereload);
}
*/

/* 5° esempio 
const { series, parallel } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  // body omitted
  cb();
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function publish(cb) {
  // body omitted
  cb();
}
*/
/*exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);*/
/*
exports.build = parallel(
    clean,
    cssTranspile,
    jsTranspile,
    jsBundle,
    cssMinify,
    jsMinify,
    publish
  );
*/


/* async completion */
/* return a stream */
/*
const { src, dest } = require('gulp');

function streamTask() {
  return src('*.js')
    .pipe(dest('output'));
}

exports.default = streamTask;
*/
/*return a promise */
/*
function promiseTask() {
return Promise.resolve('the value is ignored');
}

exports.default = promiseTask;
*/

/* Returning an event emitter */
/*
const { EventEmitter } = require('events');

function eventEmitterTask() {
  const emitter = new EventEmitter();
  // Emit has to happen async otherwise gulp isn't listening yet
  setTimeout(() => emitter.emit('finish'), 250);
  return emitter;
}

exports.default = eventEmitterTask;
*/

/*Returning a child process*/
/*
const { exec } = require('child_process');

function childProcessTask() {
  return exec('date');
}

exports.default = childProcessTask;
*/
