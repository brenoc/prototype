define(['./_createWrapper'], function(createWrapper) {

  /** Used to compose bitmasks for wrapper metadata. */
  var FLIP_FLAG = 512;

  /**
   * Creates a function that invokes `func` with arguments reversed.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Function
   * @param {Function} func The function to flip arguments for.
   * @returns {Function} Returns the new flipped function.
   * @example
   *
   * var flipped = _.flip(function() {
   *   return _.toArray(arguments);
   * });
   *
   * flipped('a', 'b', 'c', 'd');
   * // => ['d', 'c', 'b', 'a']
   */
  function flip(func) {
    return createWrapper(func, FLIP_FLAG);
  }

  return flip;
});
