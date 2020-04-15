  
const  gulp  = require('gulp');
const {  series } = require('gulp');

const svgSprite = require('gulp-svg-sprite');

function svg(cb){


    cb();

    var svgConfig = {
        mode: {
            inline: true,
            symbol: true
        },
        // Some more settings to keep
        // the SVG's code clean:
        svg: {
            xmlDeclaration: false,
            doctypeDeclaration: false,
            
            namespaceIDs: false,
            namespaceClassnames: false,
            transform: [
                function(svg) {
                    // removes styles and class="" attributes
                    
                    const reStyles = /<\s*style[^>]*>(.*?)<\s*\/\s*style>/g;
                    // console.log(svg.replace(reStyles, ' '));
                    svg = svg.replace(reStyles, '');

                    const reClasses = /class="(.*?)"/g;
                    svg = svg.replace(reClasses, '');

                    return svg;
                },
            ]
        }
    };

    
    // Set the source folder.
    return gulp.src( 'images/svg/**/*.svg' )
    // Include our options.
    .pipe( svgSprite( svgConfig ) )
    .on('error', function(error){
        console.log(error);
    })
    // Set the destination folder.
    .pipe( gulp.dest( 'images/svg-sprites' ) );
}

exports.svg = svg;


  /**
   * build css
   */

const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function compileCss(cb){

    cb();

    let buildRet = gulp.src('./scss/ignite-redesign.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());

    
    return buildRet;
}



/**
 * minifies the css
 */
let cleanCSS = require('gulp-clean-css');
function minifyCss()
{
    return gulp.src('./css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'));
}
exports.minifyCss = minifyCss;

/**
 * observes for changes on the .scss file, and compiles 
 */
function watch() {
    gulp.watch('scss/ignite-redesign.scss', compileCss)
}

exports.watch = watch;



const critical = require('critical');
/**
 * use critical module to generate and embed css critical path
 */
function extractCritical(cb) {
    cb();
    return critical.generate({
        inline: false,
        base: './',
        src: 'http://127.0.0.1:8080/',
        dimensions: [{
            width: 1280,
            height: 960
        }],
        dest: 'css/critical.css',
        minify: true,
        extract: false,
        ignore: ['@font-face',/url\(/]

    });
}

const inject = require('gulp-inject-string');
const rename = require('gulp-rename');

function inlineCritical(cb)
{
    cb();
    return gulp.src('css/critical.css')
    .pipe(inject.wrap('<!-- remember to copy this content to downloads.html --><style>', '</style>'))
    .pipe(rename('styles.html'))
    .pipe(gulp.dest('includes'));
}

exports.inlineCritical = inlineCritical;

exports.critical = series(extractCritical, inlineCritical);

exports.build = series(compileCss, extractCritical, inlineCritical);