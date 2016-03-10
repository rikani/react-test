import React, { PropTypes } from 'react';

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <div className="container">
        {React.cloneElement(this.props.children || <div />, { key: pathname })}
      </div>
    );
  }
}
