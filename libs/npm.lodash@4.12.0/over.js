define(['./_arrayMap', './_createOver'], function(arrayMap, createOver) {

  /**
   * Creates a function that invokes `iteratees` with the arguments it receives
   * and returns their results.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {...(Array|Array[]|Function|Function[]|Object|Object[]|string|string[])}
   *  [iteratees=[_.identity]] The iteratees to invoke.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var func = _.over(Math.max, Math.min);
   *
   * func(1, 2, 3, 4);
   * // => [4, 1]
   */
  var over = createOver(arrayMap);

  return over;
});
