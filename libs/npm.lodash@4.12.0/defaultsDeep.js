define(['./_apply', './_mergeDefaults', './mergeWith', './rest'], function(apply, mergeDefaults, mergeWith, rest) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * This method is like `_.defaults` except that it recursively assigns
   * default properties.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 3.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaults
   * @example
   *
   * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
   * // => { 'user': { 'name': 'barney', 'age': 36 } }
   *
   */
  var defaultsDeep = rest(function(args) {
    args.push(undefined, mergeDefaults);
    return apply(mergeWith, undefined, args);
  });

  return defaultsDeep;
});
