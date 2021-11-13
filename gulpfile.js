import browserSync from 'browser-sync';
import gulp from 'gulp';
import gulpPlumber from 'gulp-plumber';
import pug from 'gulp-pug';
import replace from 'gulp-replace';
import prettier from 'gulp-prettier';


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
        .pipe(replace('/public/', '/'))
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
        browserSync.reload();
    });

    gulp.watch(['./css/**/*.css', './js/**/*.js'], {}).on('change', function() {
        browserSync.reload();
    })
}




export let build = gulp.series(html);
export default gulp.series(html, watchpug);