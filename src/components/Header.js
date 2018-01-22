import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//To use type
import * as authAction from '../actions/auth';

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated === true) {
      // show a link to sign out
      return <li className="nav-item">
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>
    } else {
      // show a link to sign in
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/">Sign In</Link>
        </li>
      ];
    }
  }


  render() {
    console.log("HEADER PROPS", this.props)
    return (
      <nav className="navbar justify-content-end">
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

//Connect with reducer and use as props
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
