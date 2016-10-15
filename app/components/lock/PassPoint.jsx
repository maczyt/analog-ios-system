import React from 'react';

class PassPoint extends React.Component {
  passClick = (e) => {
    e.preventDefault();
    var index = e.target.dataset.index;
    this.props.handleClick(index);
  }
  render() {
    return (
      <a className="ppoint">
        <div className="cover" onClick={this.passClick}  data-index={this.props['data-index']}></div>
        <span className="num">{this.props['data-index']}</span>
        <span className="letter">{this.props['data-letter']}</span>
      </a>
    )
  }
}

export default PassPoint;