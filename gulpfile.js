const { series, parallel, src, dest } = require('gulp');
const del = require('del');
const gulpConcat = require('gulp-concat');
const gulpJshint = require('gulp-jshint');
const minify = require('gulp-babel-minify');
const jshintStylish = require('jshint-stylish');

const sourceFolder = 'app';
const destFolder = 'dist';

function clean(cb) {
  del.bind(null, destFolder);

  cb();
}

function htmls(cb) {
  return src(`${sourceFolder}/*.html`).pipe(dest(destFolder));
}

function scripts(cb) {
  return src(`${sourceFolder}/{,*/}*.js`)
      .pipe(gulpJshint())
      .pipe(gulpJshint.reporter(jshintStylish))
      .pipe(minify())
      .pipe(gulpConcat('bookmarklet.js'))
      .pipe(dest(destFolder));
}

exports.default = series(clean, parallel(scripts, htmls));
