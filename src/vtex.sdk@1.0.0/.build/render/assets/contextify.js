'use strict';

System.register(['react'], function (_export, _context) {
  var React, _extends, _createClass;

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

  function contextify() {
    return function (Component) {
      var ContextifiedComponent = function (_React$Component) {
        _inherits(ContextifiedComponent, _React$Component);

        function ContextifiedComponent() {
          var _Object$getPrototypeO;

          var _temp, _this, _ret;

          _classCallCheck(this, ContextifiedComponent);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ContextifiedComponent)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.getPlaceholderId = function (props, context) {
            var id = props.id;

            if (context.parentId) {
              id = context.parentId + '/' + id;
            }

            return id;
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(ContextifiedComponent, [{
          key: 'getChildContext',
          value: function getChildContext() {
            return { parentId: this.state.fullId };
          }
        }, {
          key: 'componentWillMount',
          value: function componentWillMount() {
            this.setState({
              fullId: this.getPlaceholderId(this.props, this.context)
            });
          }
        }, {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps, nextContext) {
            this.setState({
              fullId: this.getPlaceholderId(nextProps, nextContext)
            });
          }
        }, {
          key: 'render',
          value: function render() {
            return React.createElement(Component, _extends({}, this.props, { id: this.state.fullId }));
          }
        }]);

        return ContextifiedComponent;
      }(React.Component);

      ContextifiedComponent.contextTypes = {
        parentId: React.PropTypes.string
      };
      ContextifiedComponent.childContextTypes = {
        parentId: React.PropTypes.string
      };


      return ContextifiedComponent;
    };
  }

  _export('default', contextify);

  return {
    setters: [function (_react) {
      React = _react.default;
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
    }
  };
});