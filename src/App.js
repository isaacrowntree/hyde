import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Files from './components/Files/Files.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.props.isAuthenticated
    };
  }

  render() {
    if (this.state.isAuthenticated) {
      return (
        <div className="App">
          <Files />
        </div>
      );
    } else {
      return (
        <Redirect to={{
          pathname: '/login'
        }} />
      );
    }
  }
}

export default App;
