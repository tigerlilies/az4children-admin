import React from 'react';
import { Link } from 'react-router-dom';

const ChildDetail = (props) => {
  console.log('in ChildDetail >>> props', props);
  let { Firstname, Lastname, Age, Gender, PhotoURL } = props.location.state.child;
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-3">
          <img src={PhotoURL} width="250px" />
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-header"><strong>
              {`${Firstname} ${Lastname}`}
            </strong></div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">First name: {Firstname}</li>
              <li className="list-group-item">Last name: {Lastname}</li>
              <li className="list-group-item">Age: {Age}</li>
              <li className="list-group-item">Gender: {Gender}</li>
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
