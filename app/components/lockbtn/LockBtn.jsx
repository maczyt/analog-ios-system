import React from 'react';

require('./LockBtn.css');

class LockBtn extends React.Component {
  constructor(props) {
    super(props);
    this.down = false;
  }
  componentDidMount() {
    var home = document.querySelector('.home');
    var iphone = document.querySelector('#iphone');
    this.hWidth = home.offsetWidth;
    this.hHeight = home.offsetHeight;    
    this.left = home.offsetLeft + iphone.offsetLeft;
    this.top = home.offsetTop + iphone.offsetTop;
  }
  handleDown = (e) => {
    this.down = true;
    document.body.addEventListener('mousemove', this.handleMove, false);
    document.body.addEventListener('mouseup', this.handleUp, false);
  }
  dealMove = (e) => {
    var Btn = this.refs.lockBtn;
    var left = e.clientX - Math.floor(Btn.offsetWidth / 2 + this.left);
    var top = e.clientY - Math.floor(Btn.offsetHeight / 2 + this.top);
    if (left <= 0) {
      left = 0;
    } else if (left >= this.hWidth - Btn.offsetWidth) {
      left = this.hWidth - Btn.offsetWidth;
    } 
    if (top <= 0) {
      top = 0;
    } else if (top >= this.hHeight - Btn.offsetHeight) {
      top = this.hHeight - Btn.offsetHeight;
    }

    Btn.style.left = left + 'px';
    Btn.style.top = top + 'px';
  }
  handleMove = (e) => {
    if (!this.down) return;
    this.dealMove(e);
  }
  handleUp = (e) => {
    this.down = false;
  }
  handleClick = (e) => {
    this.props.closeScreen();
  }
  render() {
    return (
      <div className="lock-btn" ref="lockBtn">
        <div className="c-lock" onClick={this.handleClick} onMouseDown={this.handleDown}></div> 
        <div className="circle"></div>
      </div>
    )
  }
}

export default LockBtn;