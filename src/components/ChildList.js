import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Child from './Child';

import { bindActionCreators } from 'redux';
import * as childAction from '../actions/child';

class ChildList extends Component {

  componentDidMount() {
    this.props.childAction.fetchProfiles(localStorage.getItem('token'));
  }


  getChildList() {
    return this.props.children.map(child =>
      <Child key={child.id} child={child} />
    );
  }

  render() {
    console.log("ChildList Props", this.props)
    return (
      <div className="container-fluid">

          <div className="row">
            <div className="col btn-add">
              <Link className="btn btn-outline-info" to={`/child/add`}>
                Add a New Child
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.getChildList()}
                </tbody>
              </table>
            </div>
          </div>

      </div>
    );
  }

}

//Connect with action.
function mapDispatchToProps(dispatch) {
  return {
    childAction: bindActionCreators(childAction, dispatch)
  }
}

//combine mapState and mapDispatch to a component
function mapStateToProps(state, props) {
  return {
    children: state.children,
    authenticated : state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildList)
