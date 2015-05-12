import React from 'react';
import jsonp from 'jsonp';
import spread from '../utils/spread';

export default class Count extends React.Component {

  static get defaultProps() {
    return {
      url: location.href,
      element: 'span'
    };
  }

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
      }, () => {
        this.updateCount();
      }.bind(this));
    }
  }

  updateCount() {
    let url = this.constructUrl();
    jsonp(url, (err, data) => {
      if (err) {
        throw new Error(err);
      }
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
      spread(this.props, ['element', 'url']),
      this.state.count
    );
  }

}
