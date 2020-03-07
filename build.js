const fs = require('fs');
const UglifyJS = require("uglify-js");
const CleanCSS = require('clean-css');

var debug = false;

var scriptJS = fs.readFileSync('./src/script.js', 'utf8');
var css = fs.readFileSync('./src/styles.css', 'utf8');

var cssMini = new CleanCSS().minify(css).styles;
var code = scriptJS.split('%css').join(cssMini);

var mini = UglifyJS.minify(code);
console.log(mini);

if (!fs.existsSync('./build')){
    fs.mkdirSync('./build');
}

if(debug) fs.writeFileSync('./build/spmp.js', code);
else fs.writeFileSync('./build/spmp.js', mini.code);