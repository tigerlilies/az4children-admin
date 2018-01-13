import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';



class Header extends Component {

  renderLinks() {
    return (
      <li className="nav-item">
        <a className="nav-link" href="/">Login</a>
      </li>
    )
  }

  render() {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="/childList">Home</a>
        </li>
        {this.renderLinks()}
      </ul>
    )
  }
}


export default Header;
