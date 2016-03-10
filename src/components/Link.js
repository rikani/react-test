import React, { PropTypes } from 'react';

export default class Link extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const { children, active, className } = this.props;

    return (
      active === true ?
          <span>{children}</span>
          :
          <a className={`link ${className}`} href="#" onClick={this.onClick.bind(this)}>{children}</a>
    );
  }
}
