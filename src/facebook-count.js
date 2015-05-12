import React from 'react';
import Count from './base/count';

export default class FacebookCount extends Count {

  constructor(props) {
    super(props);
  }

  constructUrl() {
    let fql = encodeURIComponent(`select like_count, share_count from link_stat where url = "${this.props.url}"`),
        url = `https://api.facebook.com/method/fql.query?format=json&callback=@&query=${fql}`;
    return url;
  }

  extractCount(data) {
    if (!data[0]) {
      return 0;
    }

    return data[0].like_count + data[0].share_count;
  }

}
