import React from 'react';
require('./App.css');

class App extends React.Component {
  static propTypes = {
    imgSrc: React.PropTypes.string.isRequired,
    appName: React.PropTypes.string.isRequired
  }
  state = {
    messageNum: 0
  }
  handleClick = (e) => {
    e.preventDefault();
    this.refs.logo.classList.add('logo-tada')
    setTimeout(() => {
      this.props.onShake()
    }, 1200);
  }
  render() {
    return (
      <figure ref="logo" className={ this.props['data-shake'] ? "app logo-shake un":"app"}>
        <div ref="uninstall" className="uninstall">&times;</div>
        <a className="logo" onDoubleClick={this.handleClick}>
          <img src={ "../"+this.props.imgSrc } />
        </a>
        <div className="msg">{this.state.messageNum}</div>
        <figcaption>{ this.props.appName }</figcaption>
      </figure>
    )
  }
}

export default App;