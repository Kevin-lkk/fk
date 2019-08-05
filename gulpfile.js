var gulp = require("gulp"); //复制
var concat = require("gulp-concat");//合并
var uglify = require("gulp-uglify");//压缩
var rename = require("gulp-rename");//重命名
var minifyCSS = require("gulp-minify-css");//压缩css
var imagemin = require("gulp-imagemin");//压缩图片
var babel = require("gulp-babel");//压缩js所需
var sass = require("gulp-sass");//sass转换css


gulp.task("watchall",async ()=>{
	//复制html
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\fk"));
});

//复制、合并、压缩、重命名js
	gulp.watch("js/*.js",async ()=>{
		gulp.src("js/*.js")
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(concat("common.js"))
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\fk\\js"))
		.pipe(uglify())
		.pipe(rename("common.min.js"))
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\fk\\js"));
});

//复制、合并、压缩、重命名css
	gulp.watch("css/*.css",async ()=>{
		gulp.src("css/*.css")
		.pipe(concat("common.css"))
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\fk\\css"))
		.pipe(minifyCSS())
		.pipe(rename("common.min.css"))
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\fk\\css"))
});


//复制图片
	gulp.watch("img/**/*",async ()=>{
		gulp.src("img/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\fk\\img"));
});



//sass
	gulp.watch("sass/**/*",async ()=>{
		gulp.src("sass/**/*")
		.pipe(sass())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\fk\\css"));
});


});