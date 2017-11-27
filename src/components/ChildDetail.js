import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Child from './Child';

class ChildDetail extends Component {
  getChildList() {
    return this.props.children.map(child =>
      <Child key={child.id} child={child} />
    );
  }

  render() {
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
// const ChildDetail = (props) => {
//   console.log('in ChildDetail >>> props', props);
//   let { Firstname, Lastname, Age, Gender, PhotoURL } = props.location.state.child;
//   return (
//     <div className="container">
//       <br />
//       <div className="row">
//         <div className="col-md-3">
//           <img src={PhotoURL} width="250px" />
//         </div>
//         <div className="col-md-9">
//           <div className="card">
//             <div className="card-header"><strong>
//               {`${Firstname} ${Lastname}`}
//             </strong></div>
//             <ul className="list-group list-group-flush">
//               <li className="list-group-item">First name: {Firstname}</li>
//               <li className="list-group-item">Last name: {Lastname}</li>
//               <li className="list-group-item">Age: {Age}</li>
//               <li className="list-group-item">Gender: {Gender}</li>
//             </ul>
//           </div>
//           <br />
//           <Link to="/" className="btn btn-outline-info">
//             Cancel
//           </Link>
//         </div>
//       </div>
//
//     </div>
//   );
// }

function mapStateToProps(state, props) {
  return {
    children: state.children
  }
}

export default connect(mapStateToProps, null)(ChildDetail)
