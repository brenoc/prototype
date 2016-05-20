define(['./_arraySome', './_createOver'], function(arraySome, createOver) {

  /**
   * Creates a function that checks if **any** of the `predicates` return
   * truthy when invoked with the arguments it receives.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {...(Array|Array[]|Function|Function[]|Object|Object[]|string|string[])}
   *  [predicates=[_.identity]] The predicates to check.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var func = _.overSome(Boolean, isFinite);
   *
   * func('1');
   * // => true
   *
   * func(null);
   * // => true
   *
   * func(NaN);
   * // => false
   */
  var overSome = createOver(arraySome);

  return overSome;
});
