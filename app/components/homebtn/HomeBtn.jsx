import React from 'react';

require('./HomeBtn.css');

class HomeBtn extends React.Component {
  backHome = (e) => {
    this.props.onClick();
  }
  render() {
    return (
      <div className="home-btn" onClick={this.backHome}></div>
    )
  }
}

export default HomeBtn;