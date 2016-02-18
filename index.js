'use strict';

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	try {
		return require.resolve(str).indexOf(require('path').sep) === -1;
	} catch (e) {
		return false;
	}
};
