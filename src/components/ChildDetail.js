import React from 'react';
import { Link } from 'react-router-dom';



const ChildDetail = (props) => {
  // console.log('in ChildDetail >>> props', props);
  let { firstname, lastname, age, gender, summary, characteristic1, characteristic2, characteristic3, need1, need2, need3, placement, placement_phone, placement_email, zone, assign_at } = props.location.state.child;
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-9">
          <div className="card">
            <div className="card-header"><strong>
              {`${firstname} ${lastname}`}
            </strong></div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong><u>First name</u></strong><br/> {firstname}</li>
              <li className="list-group-item"><strong><u>Last name</u></strong><br/> {lastname}</li>
              <li className="list-group-item"><strong><u>Age</u></strong><br/> {age}</li>
              <li className="list-group-item"><strong><u>Gender </u></strong><br/>{gender}</li>
              <li className="list-group-item"><strong><u>Summary </u></strong><br/>{summary}</li>
              <li className="list-group-item"><strong><u>Characteristic1 </u></strong><br/>{characteristic1}</li>
              <li className="list-group-item"><strong><u>Characteristic2 </u></strong><br/>{characteristic2}</li>
              <li className="list-group-item"><strong><u>Characteristic3 </u></strong><br/>{characteristic3}</li>
              <li className="list-group-item"><strong><u>Need1 </u></strong><br/>{need1}</li>
              <li className="list-group-item"><strong><u>Need2 </u></strong><br/>{need2}</li>
              <li className="list-group-item"><strong><u>Need3 </u></strong><br/>{need3}</li>
              <li className="list-group-item"><strong><u>Placement </u></strong><br/>{placement}</li>
              <li className="list-group-item"><strong><u>Placement phone </u></strong><br/>{placement_phone}</li>
              <li className="list-group-item"><strong><u>Placement Email </u></strong><br/>{placement_email}</li>
              <li className="list-group-item"><strong><u>Zone </u></strong><br/>{zone}</li>
              <li className="list-group-item"><strong><u>Mentor assigned date</u></strong><br/>{assign_at}</li>
            </ul>
          </div>
          <br />
          <Link to="/childList" className="btn btn-outline-info">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChildDetail;
