define(['./_arrayPush', './_getPrototype', './_getSymbols'], function(arrayPush, getPrototype, getSymbols) {

  /** Built-in value references. */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbol properties
   * of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !getOwnPropertySymbols ? getSymbols : function(object) {
    var result = [];
    while (object) {
      arrayPush(result, getSymbols(object));
      object = getPrototype(object);
    }
    return result;
  };

  return getSymbolsIn;
});
