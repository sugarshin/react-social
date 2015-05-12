import React from 'react';
import assign from 'object-assign';
import spread from '../utils/spread';

export default class Button extends React.Component {

  static get defaultProps() {
    return {
      element: 'button',
      url: location.href,
      text: '',
      onClick: () => {}
    };
  }

  constructor(props) {
    super(props);
  }

  click(e) {
    this.props.onClick(e);
    window.open(this.constructUrl(), '_blank');
  }

  render() {
    let other = spread(this.props, ['onClick', 'element', 'url']);

    return React.createElement(
      this.props.element,
      assign({onClick: this.click.bind(this)}, other)
    );
  }

}
