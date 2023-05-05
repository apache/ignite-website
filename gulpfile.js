import browserSync from 'browser-sync';
import gulp from 'gulp';
import gulpPlumber from 'gulp-plumber';
import pug from 'gulp-pug';
import replace from 'gulp-replace';
import prettier from 'gulp-prettier';
import gulpSitemap from 'gulp-sitemap';
import File from 'vinyl';
import collection from 'gulp-collection';
import matter from '@rojo2/gulp-gray-matter';
import sort from 'gulp-sort';
import fs from 'fs';
import rename from 'gulp-rename';
import through from'through2';
import engine from 'pug';

let pugPath = "";
let contextTags = [];

function loadTemplate(name) {
    return new File({
      path: name,
      contents: fs.readFileSync(name)
    });
}

function buffer() {
    var files = [];
    return through.obj(function(file, enc, next) {
      files.push(file);
      next(null);
    }, function(cb) {
      var stream = this;
      files.forEach(function(file) {
        stream.push(file);
      });
      cb();
    });
}

const build_blog = () => {
    var blogTemplate = loadTemplate('./_src/_components/templates/blog.pug');
    var postTemplate = loadTemplate('./_src/_components/templates/post.pug');

    return gulp.src('./_src/_blog/*.pug')
        .pipe(matter({
            excerpt: true, 
            excerpt_separator: '<!-- end -->'
        }))
        // sort by published date
        .pipe(sort({
            comparator: function(file1, file2) {
                return new Date(file2.data.date) - new Date(file1.data.date);
            }
        }))
        .pipe(collection(':tags/:tag/:pager.idx/index.html', {
            item: blogTemplate,
            paginate: {limit: 10},
            groupFn: function(group) {
                contextTags = Object.keys(group)
                // configure a new pager (for all blog posts) via using a virtual "blog" tag
                let blog = {}
                for (let tag in group) {
                    for (let key in group[tag]) {
                        blog[group[tag][key].path] = group[tag][key]
                    }
                }
                group.blog = Object.values(blog)
                group.blog.sort(function(file1, file2) {
                    return new Date(file2.data.date) - new Date(file1.data.date);
                })
            }
        }))
        // buffer files before rendering to ensure context has been created
        .pipe(buffer())
        .pipe(through.obj(function(file, enc, next) {
            // configure a blog post template
            if (file.data.items) {
                file.data.items.sort(function(file1, file2) {
                    return new Date(file2.data.date) - new Date(file1.data.date);
                })
            }
            else {
                file.data.post = engine.compile(file.contents.toString())()
                if (file.data.excerpt != undefined) {
                    file.data.more = true
                    file.data.excerpt = engine.compile(file.data.excerpt)()
                }
                else {
                    file.data.more = false
                    file.data.excerpt = file.data.post
                }
                file.contents = postTemplate.contents
                file.data.context = contextTags
                file.data.format_date = new Date(file.data.date).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})
            }
            next(null, file);
        }))
        .pipe(pug({
            pretty: false,
        }))
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
        .pipe(rename(function(path) {
            // configure blog folders' structure
            path.dirname = path.dirname.replace('tags/', '');
            path.dirname = path.dirname.replace('blog/0', '');
            path.dirname = path.dirname.replace('blog/', '');
            path.dirname = path.dirname.replace('/0', '');
        }))
        .pipe(gulp.dest('blog'));
}

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
            if(!pugPath || pugPath.includes("_blog") || pugPath.includes("_components")){
                build_blog()
            }
        });
}


//Filewatcher and live-reload
export const watchpug = () => {
    browserSync.init({
        server: './',
        ui: false,
        injectChanges: true,
        watch: false,
    });
    gulp.watch(['_src/**/*.pug', '_src/**/*.html'], {}).on('change', function(pathPug, stats){
        pugPath = null;
        console.log("Modified file: " + pathPug);
        if(!pathPug.includes("_components")){
            let pathArray = pathPug.split("\\");
            let filename = pathArray[pathArray.length - 1];
            pugPath = filename;
        }
        html();
    });
    gulp.watch([
        './css/**/*.css',
        './js/**/*.js',
        './*.html',
        './features/*.html',
        './arch/*.html',
        './use-cases/*.html',
    ], {}).on('change', function(path) {
        browserSync.reload(path);
    });
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
            siteUrl: 'https://ignite.apache.org',
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



export const blog = gulp.series(build_blog);
export const build = gulp.series(html);
export const watch = gulp.series(watchpug);
export default gulp.series(html, watchpug);