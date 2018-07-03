// This file does not transpile , so must use ES5 and commonJS

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesnot understand
require.extensions['.css'] = function () {}
