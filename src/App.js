import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Files from './components/Files/Files.js';

class App extends Component {

  render() {

    const mess = true;

    if (mess === true) {
      return (
        <Redirect to={{
          pathname: '/login'
        }} />
      );
    } else {
      return (
        <div className="App">
          <Files />
        </div>
      );
    }
  }
}

export default App;
