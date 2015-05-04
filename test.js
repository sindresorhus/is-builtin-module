'use strict';
var test = require('ava');
var isBuiltinModule = require('./');

test(function (t) {
	t.assert(isBuiltinModule('fs'));
	t.assert(isBuiltinModule('console'));
	t.end();
});
