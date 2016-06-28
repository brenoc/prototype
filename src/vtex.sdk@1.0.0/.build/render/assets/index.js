'use strict';

System.register(['npm.react/react.js', 'npm.react/react-dom.js', './Placeholder.js', './settings.js'], function (_export, _context) {
  var React, ReactDOM, Placeholder, settings, route;
  return {
    setters: [function (_npmReactReactJs) {
      React = _npmReactReactJs.default;
    }, function (_npmReactReactDomJs) {
      ReactDOM = _npmReactReactDomJs.default;
    }, function (_PlaceholderJs) {
      Placeholder = _PlaceholderJs.default;
    }, function (_settingsJs) {
      settings = _settingsJs.default;
    }],
    execute: function () {
      route = window.storefront.route;


      ReactDOM.render(React.createElement(Placeholder, { id: route }), document.getElementById('root'));
    }
  };
});