'use strict';

System.register(['npm.lodash/index.js'], function (_export, _context) {
  var map, settings, storefrontSettings, i, currentSettings;
  return {
    setters: [function (_npmLodashIndexJs) {
      map = _npmLodashIndexJs.default;
    }],
    execute: function () {
      settings = {};
      storefrontSettings = window.storefront.settings;


      for (i = 0; i < storefrontSettings.length; i++) {
        currentSettings = storefrontSettings[i];

        settings[currentSettings.area] = currentSettings.data;
      }

      _export('default', settings);
    }
  };
});