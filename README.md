# react-social

[![GitHub version][github-ver-image]][github-ver-url]
[![License][license-image]][license-url]

React components for social share on ES6 class

Fork on [olahol/react-social](https://github.com/olahol/react-social)

## Getting started

```zsh
npm install @sugarshin/react-social
```

## Usage

```js
import React from 'react';
import {
  FacebookButton,
  FacebookCount
} from 'react-social';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FacebookButton url={this.props.url}>
        <FacebookCount url={this.props.url} />
        {`Share ${this.props.url}`}
      </FacebookButton>
    );
  }
}

React.render(<App url={'https://github.com/sugarshin/react-social'} />, document.body);
```

## Count (FacebookCount, TwitterCount, PinterestCount) API

### Props

##### element

Change the element the component renders into default is span.

##### url

The url you want to get the count of, default is `window.location`.

### Methods

##### getCount()

Return the social count.

## Button (FacebookButton, TwitterButton, PinterestButton) API

### Props

##### element

Change the element the component renders into default is button.

##### url

The url you want to share, default is `window.location`.

##### media (required for Pinterest)

Url of an image, required for PinterestButton.

## Styles

The components pass their props down to their element including `className` and
`style`.

## License

[MIT][license-url]

© sugarshin

[npm-image]: http://img.shields.io/npm/v/react-social.svg
[npm-url]: https://www.npmjs.org/package/react-social
[bower-image]: http://img.shields.io/bower/v/react-social.svg
[bower-url]: http://bower.io/search/?q=react-social
[travis-image]: http://img.shields.io/travis/sugarshin/react-social/master.svg?branch=master
[travis-url]: https://travis-ci.org/sugarshin/react-social
[gratipay-image]: http://img.shields.io/gratipay/sugarshin.svg
[gratipay-url]: https://gratipay.com/sugarshin/
[coveralls-image]: https://coveralls.io/repos/sugarshin/react-social/badge.svg
[coveralls-url]: https://coveralls.io/r/sugarshin/react-social
[github-ver-image]: https://badge.fury.io/gh/sugarshin%2Freact-social.svg
[github-ver-url]: http://badge.fury.io/gh/sugarshin%2Freact-social
[license-image]: http://img.shields.io/:license-mit-blue.svg
[license-url]: http://sugarshin.mit-license.org/
[downloads-image]: http://img.shields.io/npm/dm/react-social.svg
[dependencies-image]: http://img.shields.io/david/sugarshin/react-social.svg
