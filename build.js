const fs = require('fs');
const UglifyJS = require("uglify-js");
const CleanCSS = require('clean-css');

var debug = false;

var startOfFile = debug ? '' : '(function(){';
var varCssJS = '\nvar css = \'';
var varColoursJS = '\nvar colours = \'';
var endVarJS = '\';'
var endOfFile = debug ? '' : '})();';

var scriptJS = fs.readFileSync('./src/script.js', 'utf8');
var linkerJS = fs.readFileSync('./src/linker.js', 'utf8');
var css = fs.readFileSync('./src/styles.css', 'utf8');
var colours = fs.readFileSync('./src/colours.css', 'utf8');

var cssMini = new CleanCSS().minify(css).styles;
var coloursMini = new CleanCSS().minify(colours).styles;
var code = startOfFile + scriptJS + varColoursJS + coloursMini + endVarJS + varCssJS + cssMini + endVarJS + linkerJS + endOfFile;

var mini = UglifyJS.minify(code);

if (!fs.existsSync('./build')){
    fs.mkdirSync('./build');
}

if(debug) fs.writeFileSync('./build/spmp.js', code);
else fs.writeFileSync('./build/spmp.js', mini.code);