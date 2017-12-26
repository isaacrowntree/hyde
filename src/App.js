import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Files from './components/Files/Files';
import Nav from './components/Nav/Nav';
import Status from './components/Status/Status';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    if (this.props.authenticated) {
      return (
        <div>
          <Nav />
          <Status />
          <Files />
        </div>
      );
    }

    return (<Redirect to="/login" />);
  }
}

App = connect(state => state.auth)(App);

export default App;
