import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authAction from '../actions/auth';

class Logout extends Component {
  componentWillMount() {
    this.props.authAction.signoutUser(this.props.history);
  }

  render() {
    return(
      <div>You are logged out!</div>
    )
  }
}

//Connect with action.
function mapDispatchToProps(dispatch) {
  return {
    authAction: bindActionCreators(authAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Logout);
