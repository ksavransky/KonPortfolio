import React, { Component } from 'react';
import _ from 'lodash'
import './app.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    emptyState: ''
    }
  }

  render() {
    return (
      <div id='app'>
        App
      </div>
    );
  }
}


export default App;
