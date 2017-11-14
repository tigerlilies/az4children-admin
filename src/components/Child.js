import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as childAction from '../actions/child';

const Child = (props) => {
  return(
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>M</td>
      <td>10</td>
      <td>
        <Link className="btn btn-outline-info" to={`/child/1`}><i className="fa fa-pencil" aria-hidden="true"></i>
        </Link> &nbsp;
        <a className="btn btn-outline-danger" onClick={() => props.childAction.deleteChild('', '')} aria-label="Delete">
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
