import React from 'react';
import Button from './base/button';

export default class PinterestButton extends Button {

  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired
    };
  }

  constructor(props) {
    super(props);
  }

  constructUrl() {
    let url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(this.props.url)}&media=${encodeURIComponent(this.props.media)}`;
    return url;
  }

}
