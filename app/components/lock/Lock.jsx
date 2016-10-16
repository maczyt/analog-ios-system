import React from 'react';
require('./Lock.css');

import Point from './Point.jsx';
import PassPoint from './PassPoint.jsx';

class Lock extends React.Component {
  state = {
    pointStatus: [false, false, false, false]
  }
  static userData = {
    initPass: '1118', // 正确密码
    inputPass: [], // 输入密码使用数组来存储
    passLen: 0
  }
  componentDidUpdate() {
    setTimeout(() => {
      if (this.props.openPass) {
        this.refs['cover-t'].style.display = 'none';
      }
    }, 2000)
  }
  handleClick = (index) => {
    if (Lock.userData.passLen < 4) {
      Lock.userData.inputPass.push(index);
      Lock.userData.passLen ++;
    } else {
      return ;
    }
    var pl = Lock.userData.passLen;
    this.setState({
      pointStatus: (Array.from(new Array(pl), () => true)).concat(Array.from(new Array(4-pl), () => false))
    })
    if (Lock.userData.passLen === 4) {
      if (Lock.userData.initPass === Lock.userData.inputPass.join('')) {
        // 密码正确
        this.refs.lockMain.classList.add('zoomOut')
        setTimeout(() => {
          this.refs.lockMain.classList.remove('zoomOut')
          this.refs.lockMain.style.display = 'none';
        }, 800);
      } else {
        this.refs.plist.classList.add('plist-shakes')
        setTimeout( () => {
          this.refs.plist.classList.remove('plist-shakes')
        }, 1200); 
      }
      Lock.userData.passLen = 0;
      Lock.userData.inputPass.length = 0;
      this.setState({
        pointStatus: Array.from(new Array(4), () => false)
      })
    }
  }
  removeInput = (e) => {
    e.preventDefault();
    if (Lock.userData.passLen === 0) return ;
    Lock.userData.passLen --;
    var pl = Lock.userData.passLen;
    this.setState({
      pointStatus: (Array.from(new Array(pl), () => true)).concat(Array.from(new Array(4-pl), () => false))
    })
  }
  render() {
    var ppoint = [];
    var number = Array.from(new Array(10), (val, index) => index);
    var letters = ['  ', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ', ''];
    number.push(number.shift());
    number.map((d, index) => {
      ppoint.push(
        <PassPoint handleClick={this.handleClick} key={"key"+d} data-index={d} data-letter={letters[index]}/>
      )
    })
    return (
      <div className="lock-main" ref="lockMain">
        <div ref="cover-t" className={this.props.openPass ? "cover-black none" : "cover-black"}></div>
        <h2>Touch ID 或输入密码</h2>
        <div className="point-list" ref="plist">
          <Point isShow={this.state.pointStatus[0]} />
          <Point isShow={this.state.pointStatus[1]} />
          <Point isShow={this.state.pointStatus[2]} />
          <Point isShow={this.state.pointStatus[3]} />
        </div>
        <div className="ppoint-list">
          {ppoint}
        </div>
        <div className="not-pass">
          <a>紧急情况</a>
          <a onClick={this.removeInput}>取消</a>
        </div>
      </div>
    )
  }
}

export default Lock;