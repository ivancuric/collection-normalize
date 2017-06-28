'use strict';

(() => {
  const preferredMethodName = 'contains';
  const alias = (type, methodName) => {
    if (type.prototype.includes) {
      type.prototype[preferredMethodName] = type.prototype[methodName];
    }
  };

  // has
  [Set, WeakSet, Map, WeakMap].forEach(type => alias(type, 'has'));

  // includes
  [
    String,
    Array,
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
  ].forEach(type => alias(type, 'includes'));
})();
