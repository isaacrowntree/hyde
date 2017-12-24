import React, { Component } from 'react';
import { LOGOUT, Store } from './../../Redux';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    Store.dispatch({type: LOGOUT});
    e.preventDefault();
  }

  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Hyde Web Editor</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={this.logout}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
