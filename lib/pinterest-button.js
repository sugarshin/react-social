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

var _baseButton = require('./base/button');

var _baseButton2 = _interopRequireDefault(_baseButton);

var PinterestButton = (function (_Button) {
  function PinterestButton(props) {
    _classCallCheck(this, PinterestButton);

    _get(Object.getPrototypeOf(PinterestButton.prototype), 'constructor', this).call(this, props);
  }

  _inherits(PinterestButton, _Button);

  _createClass(PinterestButton, [{
    key: 'constructUrl',
    value: function constructUrl() {
      var url = 'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(this.props.url) + '&media=' + encodeURIComponent(this.props.media);
      return url;
    }
  }], [{
    key: 'propTypes',
    get: function () {
      return {
        media: _react2['default'].PropTypes.string.isRequired
      };
    }
  }]);

  return PinterestButton;
})(_baseButton2['default']);

exports['default'] = PinterestButton;
module.exports = exports['default'];