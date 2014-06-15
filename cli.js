#!/usr/bin/env node
'use strict';

var argv = require('minimist')(process.argv.slice(2));
var pkg = require('./package.json');
var sillystring = require('./index');

function help() {
  console.log(pkg.description);
  console.log();
  console.log('Usage');
  console.log('  $ sillystring');
  console.log();
  console.log('Example');
  console.log('  $ sillystring');
  console.log('  > "' + sillystring() + '"');
}

function init() {
  console.log(sillystring());
}

if (argv.help) {
  help();
  return;
}

if (argv.version) {
  console.log(pkg.version);
  return;
}

init();
