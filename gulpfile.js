var gulp = require('gulp');
var pump = require('pump');

var babel  = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var mocha = require('gulp-mocha-phantomjs');


var del = require('del');

var config = {
    
    outputNames: {
        regular: 'validus.js',
        minified: 'validus.min.js'
    },
    paths: {
        base: './',
        build: './dist/',
        source: './src/',
        plugin: './src/plugins/',
        test: './tests/'
    },
    fileList: {
        source: ['validus.core.js'],
        plugins: ['validus.explain.js'],
        polyfill: './node_modules/babel-polyfill/dist/polyfill.min.js',
        test: 'index.html'
    }
    
};

/**
    Generate list of files to include in the build. Takes the filelist and paths from config and returns an array of relatively linked paths
 **/
function genBuildList(){
        
    var lists = config.fileList;
    var paths = config.paths;
    
    var sources = lists.source.map((v)=>{return paths.source+v});
    var plugins = lists.plugins.map((v)=>{return paths.plugin+v});
        
    return sources.concat(plugins);
    
};

/**
    Clean distribution directory. Del.sync is used to execute a synchronous delete to ensure full directory clean before the build task starts
 **/
gulp.task('clean:dist', function(){
    return del.sync([`${config.paths.build}/**/*`]);
});

/**
    Build Sequence:
        1) Generate Build List 
        2) Combine the build list files
        3) Transpile down to ES2015
        4) Output file
        5) Minify
        6) Rename to minified file
        7) Output file
 **/
gulp.task('build',['clean:dist'], function() {
    
    pump([
        gulp.src(genBuildList()),
        concat(config.outputNames.regular),
        babel({presets: ['es2015']}),
        gulp.dest(config.paths.build),
        uglify(),
        rename(config.outputNames.minified),
        gulp.dest(config.paths.build)
    ], function(err){
		if (err)
			console.log(err);
	   }
	)
    
});

/**
    Executes the mocha test harness via the command line using Phantom JS
    Tests can be ran in the browser by manually opening the test harness HTML file
 **/
gulp.task('test',['build'],function(){
    var path = config.paths.test;
    var file = config.fileList.test;
    
    pump([
        gulp.src(path+file),
        mocha()
    ])
    
});