import React from 'react';
require('./Home.css');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="home">
       {this.props.children}
      </div>
    )
  }
}

export default Home;