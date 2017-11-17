import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import * as childAction from '../actions/child';

class ChildForm extends Component {

  render() {
    return (
      <div className="container">
        <br />
        <div className="alert alert-secondary" role="alert">
          <b>Child Information</b>
        </div>
        <form className="form-horizontal">
          <fieldset>
            <div className="form-group">
              <label htmlFor="lname" className="col-lg-2 control-label">Last Name:</label>
              <div className="col-lg-10">
                <Field name="lname" component="input" type="text" className="form-control" placeholder="Enter the last name" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="fname" className="col-lg-2 control-label">First Name:</label>
              <div className="col-lg-10">
                <Field name="fname" component="input" type="text" className="form-control" placeholder="Enter the first name" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="photourl" className="col-lg-2 control-label">First Name:</label>
              <div className="col-lg-10">
                <Field name="photourl" component="input" type="text" className="form-control" placeholder="Enter the photo URL" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="age" className="col-lg-2 control-label">Age:</label>
              <div className="col-lg-10">
                <Field name="age" component="input" type="text" className="form-control" placeholder="Enter the age" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="col-lg-2 control-label">Gender:</label>
              <div className="col-lg-10">
                <Field name="gender" component="input" type="text" className="form-control" placeholder="Enter the gender" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="summary" className="col-lg-2 control-label">Summary:</label>
              <div className="col-lg-10">
                <Field name="summary" component="input" type="text" className="form-control" placeholder="Enter the summary" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="characteristic1" className="col-lg-2 control-label">Characteristic 1:</label>
              <div className="col-lg-10">
                <Field name="characteristic1" component="input" type="text" className="form-control" placeholder="Enter the characteristic" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="characteristic2" className="col-lg-2 control-label">Characteristic 2:</label>
              <div className="col-lg-10">
                <Field name="characteristic2" component="input" type="text" className="form-control" placeholder="Enter the characteristic" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="characteristic3" className="col-lg-2 control-label">Characteristic 3:</label>
              <div className="col-lg-10">
                <Field name="characteristic3" component="input" type="text" className="form-control" placeholder="Enter the characteristic" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="need1" className="col-lg-2 control-label">Need 1:</label>
              <div className="col-lg-10">
                <Field name="need1" component="input" type="text" className="form-control" placeholder="Enter the need" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="need2" className="col-lg-2 control-label">Need 2:</label>
              <div className="col-lg-10">
                <Field name="need2" component="input" type="text" className="form-control" placeholder="Enter the need" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="need3" className="col-lg-2 control-label">Need 3:</label>
              <div className="col-lg-10">
                <Field name="need3" component="input" type="text" className="form-control" placeholder="Enter the need" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="placement" className="col-lg-2 control-label">Placement:</label>
              <div className="col-lg-10">
                <Field name="placement" component="input" type="text" className="form-control" placeholder="Enter the placement" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="placementphone" className="col-lg-2 control-label">Placement Phone#:</label>
              <div className="col-lg-10">
                <Field name="placementphone" component="input" type="text" className="form-control" placeholder="Enter the placement phone#" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="placementemail" className="col-lg-2 control-label">Placement Email:</label>
              <div className="col-lg-10">
                <Field name="placementemail" component="input" type="text" className="form-control" placeholder="Enter the placement email" autoComplete="off" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="zone" className="col-lg-2 control-label">Zone:</label>
              <div className="col-lg-10">
                <Field name="zone" component="input" type="text" className="form-control" placeholder="Enter the zone" autoComplete="off" />
              </div>
            </div>






            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button type="submit" className="btn btn-outline-info">Submit</button> &nbsp;
                <Link to="/" className="btn btn-outline-info">Cancel</Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }

}

function mapStateToProps(state, props) {
  return {
    children: state.children,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    childAction: bindActionCreators(childAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'client' })(ChildForm));
