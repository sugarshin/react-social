'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jsonp = require('jsonp');

var _jsonp2 = _interopRequireDefault(_jsonp);

var _utilsSpread = require('../utils/spread');

var _utilsSpread2 = _interopRequireDefault(_utilsSpread);

var Count = (function (_React$Component) {
  function Count(props) {
    _classCallCheck(this, Count);

    _get(Object.getPrototypeOf(Count.prototype), 'constructor', this).call(this, props);

    this.state = {
      count: 0
    };
  }

  _inherits(Count, _React$Component);

  _createClass(Count, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateCount();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.url !== nextProps.url) {
        this.setState({
          count: 0
        }, (function () {
          _this2.updateCount();
        }).bind(this));
      }
    }
  }, {
    key: 'updateCount',
    value: function updateCount() {
      var _this3 = this;

      var url = this.constructUrl();
      _jsonp2['default'](url, (function (err, data) {
        if (err) {
          throw new Error(err);
        }
        _this3.setState({
          count: _this3.extractCount(data)
        });
      }).bind(this));
    }
  }, {
    key: 'getCount',
    value: function getCount() {
      return this.state.count;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(this.props.element, _utilsSpread2['default'](this.props, ['element', 'url']), this.state.count);
    }
  }], [{
    key: 'defaultProps',
    get: function () {
      return {
        url: location.href,
        element: 'span'
      };
    }
  }]);

  return Count;
})(_react2['default'].Component);

exports['default'] = Count;
module.exports = exports['default'];