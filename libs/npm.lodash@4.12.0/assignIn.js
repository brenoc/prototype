define(['./_assignValue', './_copyObject', './_createAssigner', './isArrayLike', './_isPrototype', './keysIn'], function(assignValue, copyObject, createAssigner, isArrayLike, isPrototype, keysIn) {

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;

  /** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
  var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

  /**
   * This method is like `_.assign` except that it iterates over own and
   * inherited source properties.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @alias extend
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.assign
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * function Bar() {
   *   this.d = 4;
   * }
   *
   * Foo.prototype.c = 3;
   * Bar.prototype.e = 5;
   *
   * _.assignIn({ 'a': 1 }, new Foo, new Bar);
   * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
   */
  var assignIn = createAssigner(function(object, source) {
    if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
      copyObject(source, keysIn(source), object);
      return;
    }
    for (var key in source) {
      assignValue(object, key, source[key]);
    }
  });

  return assignIn;
});
