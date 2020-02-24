  
const gulp = require('gulp');



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

function build(cb){

    cb();

    return gulp.src('./scss/ignite-redesign.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
    }

exports.build = build;
// gulp.task('compass', function() {
//   return gulp.src('./scss/*.scss')
//     .pipe(compass({
//       config_file: './config.rb',
//       css: 'css',
//       sass: 'scss'
//     }))
//     .pipe(gulp.dest('css'));
// });


function watch() {
    gulp.watch('scss/ignite-redesign.scss', build)
}

exports.watch = watch;