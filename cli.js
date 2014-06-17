#!/usr/bin/env node
'use strict';

var sillystring = require('./index.js');
var pkg = require('./package.json');

require('taketalk')({
  init: function () {
    console.log(sillystring());
  },

  help: function () {
    console.log(pkg.description);
    console.log();
    console.log('Usage');
    console.log('  $ sillystring');
    console.log();
    console.log('Example');
    console.log('  $ sillystring');
    console.log('  > "' + sillystring() + '"');
  },

  version: pkg.version
});
