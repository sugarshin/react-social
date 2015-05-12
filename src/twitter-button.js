import React from 'react';
import Button from './base/button';

export default class TwitterButton extends Button {

  constructor(props) {
    super(props);
  }

  constructUrl() {
    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.props.url)}&text=${this.props.text}`;
  }

}
