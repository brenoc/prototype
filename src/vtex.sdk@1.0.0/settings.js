import map from 'npm.lodash/index.js';

let settings = {};
let storefrontSettings = window.storefront.settings;

for (var i = 0; i < storefrontSettings.length; i++) {
  let currentSettings = storefrontSettings[i];
  settings[currentSettings.area] = currentSettings.data;
}

export default settings;
