define(['./_getTag', './isObjectLike'], function(getTag, isObjectLike) {

  /** `Object#toString` result references. */
  var weakMapTag = '[object WeakMap]';

  /**
   * Checks if `value` is classified as a `WeakMap` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified,
   *  else `false`.
   * @example
   *
   * _.isWeakMap(new WeakMap);
   * // => true
   *
   * _.isWeakMap(new Map);
   * // => false
   */
  function isWeakMap(value) {
    return isObjectLike(value) && getTag(value) == weakMapTag;
  }

  return isWeakMap;
});
