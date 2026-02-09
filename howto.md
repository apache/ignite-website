Working with the site is simple. The repository has already configured task-manager gulp.js (https://gulpjs.com/). If a new developer starts work, then he needs to do the following:
- install node.js, version 13.2 or higher (need supports for ES imports), and npm.
- Install gulp cli utility globally: `npm install --global gulp-cli` (need versions 2.3.0 or higher)
- open the root directory of the repository and install all dependencies with the `npm install` command
- start development with command `gulp`.

**When you start command `gulp`:**
- all files will be recompiled
- the local server will start on localhost: 3000 and a browser will open
- file changes tracking, automatic recompilation and live-reload is running (BrowserSync is used - https://browsersync.io/).

### Project structure and about files that need to be changed:

- the page code is located in the /src folder. Files with the `.pug` extension are written using the PUG preprocessor https://pugjs.org/. It allows you to nest some files inside others, allows you not to repeat the same code on different pages, and also eliminates the need to monitor the of HTML validations and formatting. When the site is under development and the pug files are modified, gulp will automatically compile these files to html, storing the name and path in the root folder, and a local server running live-reload in this folder.
- CSS and JS code is not compiled, and no preprocessors are used. The CSS code is displayed in the browser as is, located in the `/css` folder. The js code is located in the `/js` folder and does not compile either. The gulp build has live-reload configured for both CSS and JS, which refreshes the browser whenever the css or js changes in the `/css` or `/js` folder. Thus, you can edit styles directly in the public `/css` folder.
- New images are stored in the `/img` folder

### Site building. 

To build the site, run the command `gulp build`. It simple recompile all pug files in `/_src` folder into root directory with file replace.
In the root folder, the old code from the current branch is also transferred, namely the folder:
```
/docs
/_docs
/jcache
/releases
/assets
.asf.yaml
.htaccess
```
These folders and files are there as-is, they are ignored when building the site.

### Edit events pages:

2. Upcoming events are edited in the source code in the src `/events.pug` file. During development, the code will be compiled to `/events.html`
Past events are slightly more complex. Since your site had over 300 events, we parsed all the content from old site and decided to structure it as json arrays. The `/src /_components /events` folder contains several pug files whose name corresponds to the year. At the top of these files is the json array. Each element of the array - the object has properties title, link, loc, speaker, data. Each element of the array is converted into a separate card of the past event. By analogy, you can add new objects to these arrays. Then, when compiling the files, they will automatically appear in the necessary tabs.

### Sitemap

User `gulp sitemap` command for regenerate `./sitemap.xml` file if needed. Now, it transform `/docs/2.11.0/` files into `/docs/latest/` and removes .html file extention. If will need to change last versions of `/docs/` files, change it in function `sitemap()` in `./gulpfile.js`. 

### Other

4. On the `download.html` page, we have reworked the functionality of choosing a preferred server using the client-side JavaScript. All needed links href in the table are automatically replaced in the browser without reloading the page, when another source is selected in the drop-down list. This code is located in `/js/main.js` file (line 379 – function name: `downloadChangeHref()`).

5. As I wrote earlier, in the last commits I changed the structure of the project. The site is now in the root directory. The paths to the images in the pug files have also been changed.

Now, paths to image files can be specified both relative to the site root (for example, `src= "/img/pic.jpg"`) and relative to the `/_src` folder (`src=”../img/pic.jpg”`). When pug is compiled, all src files paths are converted to the first option. This will simplify the work with files thanks to the auto-completion function for file paths in IDE.

I described only briefly about how to work with the project. For a wiki article, you may need a technical writer to describe everything in more detail and in accordance with the rules. If you will have any questions in the future, I am ready to help.
