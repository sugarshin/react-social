;(function (global, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(require('react'), require('jsonp'), require('object-assign'));
  } else if (typeof define === 'function' && define.amd) {
    define(['react', 'jsonp', 'object-assign'], factory);
  } else {
    global.ReactSocial = factory(global.React, global.jsonp, Object.assign);
  }
})(this, function (React, jsonp, assign) {
  "use strict";

  if (typeof document === 'undefined' || typeof window === 'undefined') {
    throw new Error('react-social uses jsonp and requires a browser environment');
  }

  var spread = function (obj, omit) {
    var clone = assign({}, obj);

    omit.forEach(function (key) {
      delete clone[key];
    });

    return clone;
  };



  class Count extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    componentWillMount() {
      this.updateCount();
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.url !== nextProps.url) {
        this.setState({
          count: 0
        }, function () {
          this.updateCount();
        }.bind(this));
      }
    }

    updateCount() {
      var url = this.constructUrl();

      jsonp(url, function (data) {
        this.setState({
          count: this.extractCount(data)
        });
      }.bind(this));
    }

    getCount() {
      return this.state.count;
    }

    render() {
      return React.createElement(
        this.props.element,
        spread(this.props, ["element", "url"]),
        this.state.count
      );
    }

  }

  Count.defaultProps = {
    url: window.location,
    element: "span"
  };

  class Button extends React.Component {
    constructor(props) {
      super(props);
    }

    click(e) {
      this.props.onClick(e);
      window.open(this.constructUrl(), "_blank");
    }

    render() {
      var other = spread(this.props, ["onClick", "element", "url"]);

      return React.createElement(
        this.props.element,
        assign({ "onClick": this.click.bind(this) }, other)
      );
    }
  }

  Button.defaultProps = {
    element: "button",
    url: window.location,
    onClick: function () { }
  };

  class FacebookCount extends Count {
    constructor(props) {
      super(props);
    }

    constructUrl() {
      var fql = encodeURIComponent("select like_count, share_count from link_stat where url = '" + this.props.url + "'")
        , url = "https://api.facebook.com/method/fql.query?format=json&callback=@&query=" + fql;

      return url;
    }

    extractCount(data) {
      if (!data[0]) { return 0; }

      return data[0].like_count + data[0].share_count;
    }
  }

  class TwitterCount extends Count {
    constructor(props) {
      super(props);
    }

    constructUrl() {
      return "https://cdn.api.twitter.com/1/urls/count.json?callback=@&url="
             + encodeURIComponent(this.props.url);
    }

    extractCount(data) {
      return data.count || 0;
    }
  }

  class PinterestCount extends Count {
    constructor(props) {
      super(props);
    }

    constructUrl() {
      return "https://api.pinterest.com/v1/urls/count.json?callback=@&url="
             + encodeURIComponent(this.props.url);
    }

    extractCount(data) {
      return data.count || 0;
    }
  }

  class FacebookButton extends Button {
    constructor(props) {
      super(props);
    }

    constructUrl() {
      return "https://www.facebook.com/sharer/sharer.php?u="
             + encodeURIComponent(this.props.url);
    }
  }

  class TwitterButton extends Button {
    constructor(props) {
      super(props);
    }

    constructUrl() {
      return "https://twitter.com/home?status="
             + encodeURIComponent(this.props.url);
    }
  }

  class PinterestButton extends Button {
    constructor(props) {
      super(props);
    }

    constructUrl() {
      var url = "https://pinterest.com/pin/create/button/?url="
                + encodeURIComponent(this.props.url) + "&media="
                + encodeURIComponent(this.props.media);
      return url;
    }
  }

  PinterestButton.propTypes = {
    media: React.PropTypes.string.isRequired
  };

  return {
    FacebookCount: FacebookCount,
    FacebookButton: FacebookButton,
    TwitterCount: TwitterCount,
    TwitterButton: TwitterButton,
    PinterestCount: PinterestCount,
    PinterestButton: PinterestButton
  };

});
