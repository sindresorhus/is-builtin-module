import test from 'ava';
import isBuiltinModule from '.';

test('main', t => {
	t.true(isBuiltinModule('fs'));
	t.true(isBuiltinModule('console'));

	t.true(isBuiltinModule('fs/promises'));
	t.true(isBuiltinModule('assert/strict'));

	// These are actually not, but should not exist
	t.true(isBuiltinModule('fs/'));
	t.true(isBuiltinModule('fs/unknown'));
	t.true(isBuiltinModule('fs/promises/unknown'));
	t.true(isBuiltinModule('fs/promises?query=1'));

	t.true(isBuiltinModule('node:fs'));
	t.true(isBuiltinModule('node:fs/promises'));

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
