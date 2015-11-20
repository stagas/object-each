/**
 * Iterates over the object `obj` entries and
 * calls `fn(value, key, obj)` for each entry.
 *
 * @param {Object} obj
 * @param {Function} fn
 */
export default function each(obj, fn) {
  for (let [key, value] of Object.entries(obj)) {
    fn(value, key, obj);
  }
}
