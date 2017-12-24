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

      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">Hyde Web Editor</a>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/login" onClick={this.logout}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
