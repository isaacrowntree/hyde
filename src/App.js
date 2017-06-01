import React, { Component } from 'react';
import Files from './components/Files/Files.js';

// Login to appear in modal window
// Need bootstrap JS in react setup 
// https://github.com/react-bootstrap/react-bootstrap
// Show the login over page like with seedr.cc
// Lock the page otherwise (by simply not loading state or data)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Files />
      </div>
    );
  }
}

export default App;
