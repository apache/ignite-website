import browserSync from 'browser-sync';
import gulp from 'gulp';
import gulpPlumber from 'gulp-plumber';
import pug from 'gulp-pug';
import replace from 'gulp-replace';
import prettier from 'gulp-prettier';
import imagemin, {mozjpeg, gifsicle, svgo} from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant'
import clean from 'gulp-clean';
import vinylFtp from 'vinyl-ftp';

import {readFileSync} from 'fs';


let pugPath = "";



//Компилятор PUG -> HTML
const html = () => {
    let pugTruePath = 'src/**/' + pugPath;
    if(!pugPath || pugPath.includes("_")){
        pugTruePath = ['src/**/*.pug', '!src/_*/**'];
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
        .pipe(gulp.dest('./public')).on('end', (e) => {
        });
}



//Оптимизаци изображений
export function img(){
    return gulp.src('public/img/**/*')
    .pipe(imagemin([
        gifsicle({interlaced: true}),
        mozjpeg({quality: 90, progressive: true}),
        imageminPngquant(),
        svgo()
    ]))
    .pipe(gulp.dest('build/img'))
}


export function clearBuild() {
    let srcWithIgnores = [
        'build/*',
        '!build/docs',
        '!build/_docs',
        '!build/releases',
        '!build/assets',
        '!build/jcache',
        '!build/*.yaml',
        '!build/.htaccess',
    ]
    return gulp.src(srcWithIgnores).pipe(clean());
}


export function buildCode(){
    return gulp.src('public/**/*', "!public/img/**/*").pipe(gulp.dest('build')).on('end', (e) => {
        console.log("Код перемещен");
    });
}




//Слежка за файлами, обновление браузера
export const watchpug = () => {
    browserSync.init({
        server: {
            baseDir: "./public",
            open: true,
            cors: true,
            notify: false,
        },
        watch: true,
    });
    gulp.watch(['src/**/*.pug', 'src/**/*.html'], {

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
}




export const ftp = (cb) => {
    let ftpJson = JSON.parse(readFileSync('./.vscode/sftp.json'));

    //Отправка на FTP
    let connection = vinylFtp.create( {
        host:     ftpJson.host,
        user:     ftpJson.username,
        password: ftpJson.password,
        parallel: ftpJson.port,
        log: console.log,
        port: 21,
    } );
    let connFolder = ftpJson.remotePath;


    let globs = [
        './build/**',
        '!./build/docs',
        '!./build/_docs',
        '!./build/releases',
        '!./build/assets',
        '!./build/jcache',
        '!./build/*.yaml',
        './build/**/.htaccess',
    ];
    return gulp.src( globs, { buffer: false } )
        .pipe( connection.newerOrDifferentSize( connFolder ) )
        .pipe( connection.dest( connFolder ) );
}




export let build = gulp.series(html, clearBuild, buildCode, img);
export let fix = gulp.series(html, clearBuild, buildCode);
export default gulp.series(html, watchpug);