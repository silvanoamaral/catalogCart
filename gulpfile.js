let gulp = require('gulp');
let nodemon = require('gulp-nodemon');

gulp.task('run',['server'],function() { 
    gulp.watch('./views/*/*.*');   
});

// start our server and listen for changes
gulp.task('server',function() {
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'server.js',
        // this listens to changes in any of these files/routes and restarts the application
        watch: ["server.js", "views/*/*.*","./js/app.js","./public/*/*.*"],
        ext: 'js'
    }).on('start', () => {
        gulp.src('server.js')
    });
});