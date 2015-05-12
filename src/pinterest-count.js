import React from 'react';
import Count from './base/count';

export default class PinterestCount extends Count {

  constructor(props) {
    super(props);
  }

  constructUrl() {
    return `https://api.pinterest.com/v1/urls/count.json?callback=@&url=${encodeURIComponent(this.props.url)}`;
  }

  extractCount(data) {
    return data.count || 0;
  }

}
