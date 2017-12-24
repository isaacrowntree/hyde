import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Store, AUTHENTICATE } from './Redux';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login(e) {
    Store.dispatch({type: AUTHENTICATE, payload: e.target.firstChild.firstChild.value});
    e.preventDefault();
  }

  get loginWarning() {
    if (!this.props.failed) return null;

    return (
      <div className="alert alert-warning" role="alert">
        Invalid password.
      </div>
    );
  }

  render() {
    if (this.props.authenticated) {
      return (<Redirect to="/" />);
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-6 col-md-4">
          <br />
            <div className="jumbotron">
              <h1>Login</h1>

              {this.loginWarning}

              <form onSubmit={this.login}>
                <div className="form-group">
                  <input type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary pull-right">Submit</button>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login = connect(state => state)(Login);

export default Login;
