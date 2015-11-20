# object-each

## install

```
npm install object-each
```

## usage

### each(obj, fn)

Example:

```js
import each from 'object-each';

each({ a: 'x', b: 'y', c: 'z' }, (value, key, obj) => {
  console.log(key, value);
});

// output:
// a x
// b y
// c z
```

## license MIT
