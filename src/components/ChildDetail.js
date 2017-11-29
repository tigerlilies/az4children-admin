import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Child from './Child';
import * as childAction from '../actions/child';


const ChildDetail = (props) => {
  console.log('in ChildDetail >>> props', props);
  let { firstname, lastname, age, gender, photoURL } = props.location.state.child;
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-3">
          <img src={photoURL} width="250px" />
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-header"><strong>
              {`${firstname} ${lastname}`}
            </strong></div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">First name: {firstname}</li>
              <li className="list-group-item">Last name: {lastname}</li>
              <li className="list-group-item">Age: {age}</li>
              <li className="list-group-item">Gender: {gender}</li>
            </ul>
          </div>
          <br />
          <Link to="/" className="btn btn-outline-info">
            Cancel
          </Link>
        </div>
      </div>

    </div>
  );
}

export default ChildDetail;
