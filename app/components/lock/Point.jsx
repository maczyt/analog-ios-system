import React from 'react';

class Point extends React.Component {
  render() {
    return (
      <div className={this.props.isShow ? "point fill-point": "point"}></div>
    )
  }
}

export default Point;