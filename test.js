import test from 'ava';
import m from '.';

test(t => {
	t.true(m('fs'));
	t.true(m('console'));
	t.false(m('unicorn'));
});
