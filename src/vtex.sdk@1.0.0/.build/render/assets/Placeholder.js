'use strict';

System.register(['npm.react/react.js', './settings.js', './contextify.js'], function (_export, _context) {
  var React, Component, allSettings, contextify, _extends, _createClass, Placeholder;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_npmReactReactJs) {
      React = _npmReactReactJs.default;
      Component = _npmReactReactJs.Component;
    }, function (_settingsJs) {
      allSettings = _settingsJs.default;
    }, function (_contextifyJs) {
      contextify = _contextifyJs.default;
    }],
    execute: function () {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      Placeholder = function (_Component) {
        _inherits(Placeholder, _Component);

        function Placeholder(props) {
          _classCallCheck(this, Placeholder);

          var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Placeholder).call(this, props));

          _this.state = {};

          var settings = allSettings[_this.props.id];
          System.import(settings.component).then(function (component) {
            _this.setState({
              component: component.default,
              settings: settings.settings
            });
          });
          return _this;
        }

        _createClass(Placeholder, [{
          key: 'render',
          value: function render() {
            if (!this.state.component) {
              return React.createElement(
                'span',
                null,
                'Loading'
              );
            }
            var Component = this.state.component;

            return React.createElement(Component, _extends({}, this.props, { settings: this.state.settings }));
          }
        }]);

        return Placeholder;
      }(Component);

      _export('default', contextify()(Placeholder));
    }
  };
});