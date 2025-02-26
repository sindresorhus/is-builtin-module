import test from 'ava';
import isBuiltinModule from './index.js';

test('main', t => {
	t.true(isBuiltinModule('fs'));
	t.true(isBuiltinModule('console'));
	// Deprecated
	t.false(isBuiltinModule('punycode'));

	t.true(isBuiltinModule('fs/promises'));
	t.true(isBuiltinModule('assert/strict'));

	t.false(isBuiltinModule('fs/unknown'));
	t.false(isBuiltinModule('fs/promises/unknown'));
	t.false(isBuiltinModule('fs/promises?query=1'));

	t.true(isBuiltinModule('node:fs'));
	t.true(isBuiltinModule('node:fs/promises'));

	t.true(isBuiltinModule('node:test'));
	// Only works with `node:` prefix
	t.false(isBuiltinModule('test'));

	t.false(isBuiltinModule('punycode/'));
	t.false(isBuiltinModule('fs/'));
	t.false(isBuiltinModule('unicorn'));
	t.false(isBuiltinModule('unknown'));
	t.false(isBuiltinModule('FS'));
	t.false(isBuiltinModule('nodE:fs'));
	t.false(isBuiltinModule('node:fS'));
	t.false(isBuiltinModule('fsnode:'));
	t.false(isBuiltinModule('node:unknown'));
	t.false(isBuiltinModule('node:node:fs'));
	t.false(isBuiltinModule('node:/fs'));
	t.false(isBuiltinModule('file:fs/promises'));
	t.false(isBuiltinModule('data:text/javascript;utf-8,export {default} from "fs";'));
});
