import test from 'ava';
import isBuiltinModule from '.';

test('main', t => {
	t.true(isBuiltinModule('fs'));
	t.true(isBuiltinModule('console'));
	t.false(isBuiltinModule('unicorn'));
});
