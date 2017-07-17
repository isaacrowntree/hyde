import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-6 col-md-4">
          <br />
            <div className="jumbotron">
              <h1>Login</h1>
              <form>
                <div className="form-group">
                  <label for="password">Password</label>
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
