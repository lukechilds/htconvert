import test from 'ava';

import { readFileSync } from 'fs';
import htconvert from '../dist/htconvert';

const input = readFileSync('./fixtures/input', 'utf-8');
const output = readFileSync('./fixtures/output', 'utf-8');

test('htconvert should export a function', t => {
  t.is(typeof htconvert, 'function');
});

test('htconvert should match input with output', t => {
  t.is(htconvert(input), output);
});
