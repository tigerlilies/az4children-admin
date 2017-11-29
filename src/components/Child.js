import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as childAction from '../actions/child';

const Child = (props) => {
  let { id, firstname, lastname, age, gender } = props.child;
  return(
    <tr>
      <td>
        <Link className="view-link"
          to={{
          pathname: `/childDetail/${id}`,
          state: { child: props.child }
        }}>{firstname}</Link>
      </td>
      <td>{lastname}</td>
      <td>{gender}</td>
      <td>{age}</td>
      <td>
        <Link className="btn btn-outline-info" to={{
        pathname: `/childDetail/${id}`,
        state: { child: props.child }
      }}><i className="fa fa-pencil" aria-hidden="true"></i>
        </Link> &nbsp;
        <a className="btn btn-outline-danger" onClick={() => props.childAction.deleteChild(props.child.id, props.child)} aria-label="Delete">
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </a>
      </td>
    </tr>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    childAction: bindActionCreators(childAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Child)
