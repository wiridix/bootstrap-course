var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cleanCss = require('gulp-clean-css'),
    dele = require('del'),
    //imagenmin = require('gulp-imagemin'),
    flatmap = require('gulp-flatmap');

function sass2(){
    return gulp.src('./css/*.scss')
        .pipe(sass().on('Error', sass.logError))
        .pipe(gulp.dest('./css'))
};

function clean(){
    return dele(['dist'])
};

/*no funciona, error spawn
function imagen(){
    return gulp.src('./img/*')
        .pipe(imagenmin())
        .pipe(gulp.dest('dist/img'))
};*/

function jsmin(){
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
};

function usein(){
    return gulp.src('./*.html')
        .pipe(flatmap(function(stream,file){
            return stream
                .pipe(usemin({
                    //css: [ rev() ],
                    //html: [ htmlmin({ collapseWhitespace: true }) ],
                    js: [ uglify() ],
                    inlinejs: [ uglify() ],
                    inlinecss: [ cleanCss(), 'concat' ]
                }))
        }))
        .pipe(gulp.dest('dist/'));
};

function imagen(){
    return gulp.src('img/**')
        .pipe(gulp.dest('dist/img'))
}

exports.default = gulp.series(clean,imagen, sass2, usein);