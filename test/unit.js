import test from 'ava';

import htconvert from '../dist/htconvert';

test('htconvert should export a function', t => {
  t.is(typeof htconvert, 'function');
});
