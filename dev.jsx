let React = require('react');
let { FacebookButton, TwitterButton } = require('./lib/react-social');

class App extends React.Component {

  render() {
    return (
      <div>
        <TwitterButton text={document.title}>Tweet</TwitterButton>
        <FacebookButton>FB</FacebookButton>
      </div>
    );
  }

}

React.render(<App />, document.body);
