import React from 'react';
import Button from './base/button';

export default class FacebookButton extends Button {

  constructor(props) {
    super(props);
  }

  constructUrl() {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.props.url)}`;
  }

}
