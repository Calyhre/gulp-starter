#!/usr/bin/env node

//this hook run gulp build before ionic build

var exec = require('child_process').exec;

exec("gulp build");
