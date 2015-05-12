import React from 'react';
import {
  FacebookButton,
  TwitterButton,
  PinterestButton
} from './lib/react-social';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TwitterButton text={document.title}>Tweet</TwitterButton>
        <FacebookButton>FB</FacebookButton>
        <PinterestButton media={'photo'}>PinterestButton</PinterestButton>
      </div>
    );
  }

}

React.render(<App />, document.body);
