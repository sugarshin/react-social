'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

/*!
 * @license @sugarshin/react-social
 * (c) sugarshin
 * Fork on olahol/react-social
 * License: MIT
 */

;(function (global, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(require('react'), require('jsonp'), require('object-assign'));
  } else if (typeof define === 'function' && define.amd) {
    define(['react', 'jsonp', 'object-assign'], factory);
  } else {
    global.ReactSocial = factory(global.React, global.jsonp, Object.assign);
  }
})(typeof window !== 'undefined' ? window : undefined, function (React, jsonp, assign) {

  if (typeof document === 'undefined' || typeof window === 'undefined') {
    throw new Error('react-social uses jsonp and requires a browser environment');
  }

  var spread = function spread(obj, omit) {
    var clone = assign({}, obj);
    omit.forEach(function (key) {
      delete clone[key];
    });
    return clone;
  };

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
        jsonp(url, (function (err, data) {
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
        return React.createElement(this.props.element, spread(this.props, ['element', 'url']), this.state.count);
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
  })(React.Component);

  var Button = (function (_React$Component2) {
    function Button(props) {
      _classCallCheck(this, Button);

      _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).call(this, props);
    }

    _inherits(Button, _React$Component2);

    _createClass(Button, [{
      key: 'click',
      value: function click(e) {
        this.props.onClick(e);
        window.open(this.constructUrl(), '_blank');
      }
    }, {
      key: 'render',
      value: function render() {
        var other = spread(this.props, ['onClick', 'element', 'url']);

        return React.createElement(this.props.element, assign({ onClick: this.click.bind(this) }, other));
      }
    }], [{
      key: 'defaultProps',
      get: function () {
        return {
          element: 'button',
          url: location.href,
          text: '',
          onClick: function onClick() {}
        };
      }
    }]);

    return Button;
  })(React.Component);

  var FacebookCount = (function (_Count) {
    function FacebookCount(props) {
      _classCallCheck(this, FacebookCount);

      _get(Object.getPrototypeOf(FacebookCount.prototype), 'constructor', this).call(this, props);
    }

    _inherits(FacebookCount, _Count);

    _createClass(FacebookCount, [{
      key: 'constructUrl',
      value: function constructUrl() {
        var fql = encodeURIComponent('select like_count, share_count from link_stat where url = "' + this.props.url + '"'),
            url = 'https://api.facebook.com/method/fql.query?format=json&callback=@&query=' + fql;
        return url;
      }
    }, {
      key: 'extractCount',
      value: function extractCount(data) {
        if (!data[0]) {
          return 0;
        }

        return data[0].like_count + data[0].share_count;
      }
    }]);

    return FacebookCount;
  })(Count);

  var TwitterCount = (function (_Count2) {
    function TwitterCount(props) {
      _classCallCheck(this, TwitterCount);

      _get(Object.getPrototypeOf(TwitterCount.prototype), 'constructor', this).call(this, props);
    }

    _inherits(TwitterCount, _Count2);

    _createClass(TwitterCount, [{
      key: 'constructUrl',
      value: function constructUrl() {
        return 'https://cdn.api.twitter.com/1/urls/count.json?callback=@&url=' + encodeURIComponent(this.props.url);
      }
    }, {
      key: 'extractCount',
      value: function extractCount(data) {
        return data.count || 0;
      }
    }]);

    return TwitterCount;
  })(Count);

  var PinterestCount = (function (_Count3) {
    function PinterestCount(props) {
      _classCallCheck(this, PinterestCount);

      _get(Object.getPrototypeOf(PinterestCount.prototype), 'constructor', this).call(this, props);
    }

    _inherits(PinterestCount, _Count3);

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
  })(Count);

  var FacebookButton = (function (_Button) {
    function FacebookButton(props) {
      _classCallCheck(this, FacebookButton);

      _get(Object.getPrototypeOf(FacebookButton.prototype), 'constructor', this).call(this, props);
    }

    _inherits(FacebookButton, _Button);

    _createClass(FacebookButton, [{
      key: 'constructUrl',
      value: function constructUrl() {
        return 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.props.url);
      }
    }]);

    return FacebookButton;
  })(Button);

  var TwitterButton = (function (_Button2) {
    function TwitterButton(props) {
      _classCallCheck(this, TwitterButton);

      _get(Object.getPrototypeOf(TwitterButton.prototype), 'constructor', this).call(this, props);
    }

    _inherits(TwitterButton, _Button2);

    _createClass(TwitterButton, [{
      key: 'constructUrl',
      value: function constructUrl() {
        return 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(this.props.url) + '&text=' + this.props.text;
      }
    }]);

    return TwitterButton;
  })(Button);

  var PinterestButton = (function (_Button3) {
    function PinterestButton(props) {
      _classCallCheck(this, PinterestButton);

      _get(Object.getPrototypeOf(PinterestButton.prototype), 'constructor', this).call(this, props);
    }

    _inherits(PinterestButton, _Button3);

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
          media: React.PropTypes.string.isRequired
        };
      }
    }]);

    return PinterestButton;
  })(Button);

  return {
    FacebookCount: FacebookCount,
    FacebookButton: FacebookButton,
    TwitterCount: TwitterCount,
    TwitterButton: TwitterButton,
    PinterestCount: PinterestCount,
    PinterestButton: PinterestButton
  };
});
