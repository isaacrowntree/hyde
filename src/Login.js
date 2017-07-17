import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false
    };

    this.login = this.login.bind(this);
  }

  login(e) {
    this.setState({ redirectToReferrer: true });
    e.preventDefault();
  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to='/true' />);
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-6 col-md-4">
          <br />
            <div className="jumbotron">
              <h1>Login</h1>
              <form onSubmit={this.login}>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
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

export default Login;
