import React, { Component, PropTypes } from 'react';
require('./Bottom.css');

class Bottom extends Component {
  render() {
    return (
      <div className="bottom">
        { this.props.children }
      </div>
    )
  }
}

export default Bottom;

