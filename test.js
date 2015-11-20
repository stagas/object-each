import assert from 'assert';
import each from './index.js';

const source = {
  a: 'x',
  b: 'y',
  c: 'z'
};

const expected = {
  length: 3,
  values: ['x', 'y', 'z'],
  keys: ['a', 'b', 'c'],
  refs: [source, source, source]
};

const results = {
  length: 0,
  values: [],
  keys: [],
  refs: []
};

each(source, (value, key, obj) => {
  results.length++;
  results.values.push(value);
  results.keys.push(key);
  results.refs.push(obj);
});

assert.strictEqual(expected.length, results.length);
assert.deepEqual(expected.values, results.values);
assert.deepEqual(expected.keys, results.keys);
assert.deepEqual(expected.refs, results.refs);

console.log('ok');
