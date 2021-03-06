define(['./_arrayReduce'], function(arrayReduce) {

  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} props The property identifiers to pick.
   * @returns {Object} Returns the new object.
   */
  function basePick(object, props) {
    object = Object(object);
    return arrayReduce(props, function(result, key) {
      if (key in object) {
        result[key] = object[key];
      }
      return result;
    }, {});
  }

  return basePick;
});
