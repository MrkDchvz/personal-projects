import gulp from 'gulp';
const {src, dest, series, watch} = gulp;
import dartsass from 'sass';
import gulpsass from 'gulp-sass';
const sass = gulpsass(dartsass);
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
// import purgecss from '@fullhuman/postcss-purgecss';
import sourcemaps from 'gulp-sourcemaps';

const files = {'htmlpath': 'src/**/*.html', 'scsspath': 'sass/**/*.scss'};
const plugins = [autoprefixer(), cssnano()];

function buildCss() {
  return src(files.scsspath)
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(dest('css/'));
}

function watchTasks() {
  watch([files.htmlpath, files.scsspath], buildCss);
}

export default series (
  buildCss,
  watchTasks
)
