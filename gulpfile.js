const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('minify', () => gulp.src('src/**/*.js').pipe(uglify()).pipe(gulp.dest('dist')));
gulp.task('default', gulp.series('minify'));
