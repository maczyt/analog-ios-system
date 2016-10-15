import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home/Home.jsx';
import Bottom from './components/bottom/Bottom.jsx';
import App from './components/app/app.jsx';
import HomeBtn from './components/homebtn/HomeBtn.jsx';
import Lock from './components/lock/Lock.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    shake: false,
    showUn: false,
    // app 列表
    appList: [
      {
        imgSrc: "../image/bd.png",
        appName: "百度"
      }, {
        imgSrc: "../image/net.png",
        appName: "网易"
      }, {
        imgSrc: "../image/wx.png",
        appName: "微信"
      }
    ]
  }
  // 处理双击app的回调
  handleShake = (e) => {
    this.setState({
      shake: true
    })
  }
  // 处理点击home键的回调
  backHome = (e) => {
    this.setState({
      shake: false
    })
  }
  render() {
    var appList = [];
    this.state.appList.forEach((app, index) => {
      appList.push(
        <App data-shake={this.state.shake} key={"key"+index} onShake={this.handleShake} imgSrc={app.imgSrc} appName={app.appName} />
      )
    })
    return (
      <div>
        <Home>
          <div className="app-list">
            { appList }
          </div>
          <Bottom>
            <App data-shake={this.state.shake} data-un={this.state.showUn} onShake={this.handleShake} imgSrc="../image/mobile.png" appName="电话" />
            <App data-shake={this.state.shake} data-un={this.state.showUn} onShake={this.handleShake} imgSrc="../image/note.jpg" appName="印象笔记" />
          </Bottom>
          <Lock />
        </Home>
        <HomeBtn onClick={this.backHome}/>
      </div>
    )
  }
}


ReactDOM.render(
  <Main />,
  document.getElementById('iphone')
);
