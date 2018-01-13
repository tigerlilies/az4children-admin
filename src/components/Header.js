import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
      </ul>
    )
  }
}


export default Header;
