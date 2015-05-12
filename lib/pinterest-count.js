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

var _baseCount = require('./base/count');

var _baseCount2 = _interopRequireDefault(_baseCount);

var PinterestCount = (function (_Count) {
  function PinterestCount(props) {
    _classCallCheck(this, PinterestCount);

    _get(Object.getPrototypeOf(PinterestCount.prototype), 'constructor', this).call(this, props);
  }

  _inherits(PinterestCount, _Count);

  _createClass(PinterestCount, [{
    key: 'constructUrl',
    value: function constructUrl() {
      return 'https://api.pinterest.com/v1/urls/count.json?callback=@&url=' + encodeURIComponent(this.props.url);
    }
  }, {
    key: 'extractCount',
    value: function extractCount(data) {
      return data.count || 0;
    }
  }]);

  return PinterestCount;
})(_baseCount2['default']);

exports['default'] = PinterestCount;
module.exports = exports['default'];