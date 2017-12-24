import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Files from './components/Files/Files';
import Nav from './components/Nav/Nav';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    if (this.props.authenticated) {
      return (
        <div>
          <Nav />
          <Files />
        </div>
      );
    }

    return (<Redirect to="/login" />);
  }
}

App = connect(state => state)(App);

export default App;
