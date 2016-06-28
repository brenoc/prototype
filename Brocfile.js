var fs = require('fs');
var path = require('path');

// Babel transpiler
var Babel = require('broccoli-babel-plugin');

var myApp = path.join('src', 'brenoc.theme@3.5.0');

var manifestData = fs.readFileSync(path.join(myApp, 'manifest.json'), 'utf8');
var manifest = JSON.parse(manifestData);

// Transpile the source files
var compiledRender = new Babel(myApp, {
  manifest: manifest,
  persistentOutput: true
});

module.exports = compiledRender;
