import each from './index.js';

each({ a: 'x', b: 'y', c: 'z' }, (value, key, obj) => {
  console.log(key, value);
});

// output:
// a x
// b y
// c z
