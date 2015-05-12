'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

exports['default'] = function (obj, omit) {
  var clone = _objectAssign2['default']({}, obj);
  omit.forEach(function (key) {
    delete clone[key];
  });
  return clone;
};

module.exports = exports['default'];