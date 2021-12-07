import browserSync from 'browser-sync';
import gulp from 'gulp';
import gulpPlumber from 'gulp-plumber';
import pug from 'gulp-pug';
import replace from 'gulp-replace';
import prettier from 'gulp-prettier';
import gulpSitemap from 'gulp-sitemap';


let pugPath = "";


//Compiler PUG -> HTML
const html = () => {
    let pugTruePath = './_src/**/' + pugPath;
    if(!pugPath || pugPath.includes("_")){
        pugTruePath = ['./_src/**/*.pug', '!./_src/_*/**'];
    }
    return gulp.src(pugTruePath)
        .pipe(gulpPlumber())
        .pipe(pug({
            pretty: false,
        }))
        .pipe(replace('"../img', '"/img'))
        .pipe(prettier({
            singleQuote: true,
            parser:"html",
            tabWidth: 2,
            useTabs: false,
            htmlWhitespaceSensitivity:"css",
            printWidth:240,
        }))
        .on('data', function(file){
            console.log('▒ PUG→HTML: ' + file.path.replace(file.cwd, '') );
        })
        .pipe(gulp.dest('./')).on('end', (e) => {
        });
}


//Filewatcher and live-reload
export const watchpug = () => {
    browserSync.init({
        server: {
            baseDir: "./",
            open: true,
            cors: true,
            notify: false,
        },
        watch: false,
    });
    gulp.watch(['_src/**/*.pug', '_src/**/*.html'], {

    }).on('change', function(pathPug, stats){
        pugPath = null;
        console.log("Изм.: " + pathPug);
        if(!pathPug.includes("_components")){
            let pathArray = pathPug.split("\\");
            let filename = pathArray[pathArray.length - 1];
            pugPath = filename;
        }
        html();
    });

    gulp.watch(['./css/**/*.css', './js/**/*.js', './**/*.html', '!./_*/**/*.html'], {}).on('change', function() {
        browserSync.reload();
    })
}



/**
 * XML Sitemap Generate for site and /docs/latest folder
 */
export const sitemap = () => {
    let srcForSitemap = [
        './**/*.html',
        '!./_*/**',
        '!./jcache/**',
        '!./releases/**',
        '!./docs/2.9.0/**',
        '!./docs/2.9.1/**',
        '!./docs/2.10.0/**',
        '!./docs/3.0.0-alpha/**',
        '!./node_modules/**'
    ];
    return gulp.src(srcForSitemap, {
        read: false
    })
    .pipe(gulpSitemap({
            siteUrl: 'https://ignite.apache.com',
            changefreq: 'monthly',
            priority: function(siteUrl, loc, entry) {
                // Give pages inside root path (i.e. no slashes) a higher priority
                return loc.includes('docs') ? 0.7 : 1;
            },
            getLoc: function(siteUrl, loc, entry) {
                if(loc.includes('/docs/')){
                    //Remove .html for all docs files
                    let newloc = loc.replace(/.html$/, "")
                    //Change version folders into "latest"
                    newloc = newloc.replace("2.11.0", "latest");
                    //console.log(newloc);
                    return newloc;
                }
                return loc;
            }
        }))
    .pipe(gulp.dest('./'));
}




export let build = gulp.series(html);
export default gulp.series(html, watchpug);