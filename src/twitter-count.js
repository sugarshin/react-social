import React from 'react';
import Count from './base/count';

export default class TwitterCount extends Count {

  constructor(props) {
    super(props);
  }

  constructUrl() {
    return `https://cdn.api.twitter.com/1/urls/count.json?callback=@&url=${encodeURIComponent(this.props.url)}`;
  }

  extractCount(data) {
    return data.count || 0;
  }

}
