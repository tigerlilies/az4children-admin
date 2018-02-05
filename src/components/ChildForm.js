import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import  moment  from 'moment';


//To use type
import * as childAction from '../actions/child';
import 'react-datepicker/dist/react-datepicker.css';


const required = value => (value ? undefined : "This field is required");

const renderField = (
{
  input,
  label,
  type,
  placeholder,
  className,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={className}
      />
      {touched &&
        ((error && <span className="errorMsg">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

/*
const renderSelectField = ({
  input,
  label,
  type,
  children,
  meta: { touched, error, warning }
}) => (
  <div>
    <label className="col-lg-10 control-label">{label}</label>
    <div className="col-lg-10">
      <select className="form-control" {...input}>
        {children}
      </select>
      {touched && error && <span className="errorMsg">{error}</span>}
    </div>
  </div>
);
*/

const renderDatePicker = (
{
  input,
  label,
  type,
  placeholder,
  className,
  meta: { touched, error, warning }
}) => (
  <div>
        <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
        {touched && error && <span>{error}</span>}
  </div>
);

class ChildForm extends Component {

  // buildChild = () => {
  //   return this.props.houses.map((child, i) => (
  //     <Child key={i} child={child} />
  //   ));
  // };

  processSubmit = (values) => {
    // console.log("ProcessSubmit",values)
    // console.log("Props",this.props)
    let child = {
      lastname: values.lastname,
      firstname: values.firstname,
      age: values.age,
      gender: values.gender,
      summary: values.summary,
      characteristic1: values.characteristic1,
      characteristic2: values.characteristic2,
      characteristic3: values.characteristic3,
      need1: values.need1,
      need2: values.need2,
      need3: values.need3,
      placement: values.placement,
      placement_phone: values.placement_phone,
      placement_email: values.placement_email,
      zone: values.zone,
      assign_at: values.assign_at
    };

    let token = localStorage.getItem('token')

    if (this.props.match.params.id === 'add') {
      this.props.childAction.addChild(child, token).then(() => {
       this.props.childAction.fetchProfiles();
       this.props.history.push("/childList")
      });
    } else {
      // console.log("update");
      this.props.childAction
        .updateChild(this.props.match.params.id, child, token)
        .then(() => {
          this.props.childAction.fetchProfiles();
          this.props.history.push("/childList");
        });
      }
    }


  render() {
    return (
      <div className="container">
        <br />
        <div className="alert alert-secondary" role="alert">
          <b>Child Information</b>
        </div>
        <form
          className="form-horizontal"
          onSubmit={this.props.handleSubmit(this.processSubmit)}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="lname" className="col-lg-2 control-label">Last Name:</label>
              <div className="col-lg-10">
                <Field
                  name="lastname"
                  component={renderField}
                  type="text"
                  className="form-control"
                  placeholder="Enter the last name"
                  autoComplete="off"
                  validate={[required]}
                  />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="fname" className="col-lg-2 control-label">First Name:</label>
              <div className="col-lg-10">
                <Field
                 name="firstname"
                 component={renderField}
                 type="text"
                 className="form-control"
                 placeholder="Enter the first name"
                 autoComplete="off"
                 validate={[required]}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="age" className="col-lg-2 control-label">Age:</label>
              <div className="col-lg-10">
                <Field name="age" component="select">
                  <option />
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                </Field>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="col-lg-2 control-label">Gender:</label>
              <div className="col-lg-10">
                <label>
                  <Field type="radio" name="gender" component="input" value="M" />
                  {' '}
                  Boy
                </label>
                <br />
                <label>
                  <Field name="gender" component="input" type="radio" value="F" />
                  {' '}
                  Girl
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="summary" className="col-lg-2 control-label">Summary:</label>
              <div className="col-lg-10">
                <Field name="summary"
                 component={renderField}
                 type="text"
                 className="form-control"
                 placeholder="Enter the summary" autoComplete="off"
                 validate={[required]}
                 />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="characteristic1" className="col-lg-2 control-label">Characteristic 1:</label>
              <div className="col-lg-10">
                <Field
                  name="characteristic1" component={renderField}
                  type="text"
                  className="form-control"
                  placeholder="Enter the characteristic" autoComplete="off"
                  validate={[required]}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="characteristic2" className="col-lg-2 control-label">Characteristic 2:</label>
              <div className="col-lg-10">
                <Field
                  name="characteristic2" component={renderField}
                  type="text"
                  className="form-control"
                  placeholder="Enter the characteristic" autoComplete="off"
                  validate={[required]}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="characteristic3" className="col-lg-2 control-label">Characteristic 3:</label>
              <div className="col-lg-10">
                <Field
                  name="characteristic3" component={renderField}
                  type="text"
                  className="form-control"
                  placeholder="Enter the characteristic" autoComplete="off"
                  validate={[required]}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="need1" className="col-lg-2 control-label">Need 1:</label>
              <div className="col-lg-10">
                <Field
                  name="need1"
                  component={renderField}
                  type="text"
                  className="form-control"
                  placeholder="Enter the need" autoComplete="off"
                  validate={[required]}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="need2" className="col-lg-2 control-label">Need 2:</label>
              <div className="col-lg-10">
                <Field
                  name="need2"
                  component={renderField}
                  type="text"
                  className="form-control"
                  placeholder="Enter the need" autoComplete="off"
                  validate={[required]}
               />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="need3" className="col-lg-2 control-label">Need 3:</label>
              <div className="col-lg-10">
                <Field
                  name="need3"
                  component={renderField}
                  type="text"
                  className="form-control"
                  placeholder="Enter the need" autoComplete="off"
                  validate={[required]}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="placement" className="col-lg-2 control-label">Placement:</label>
              <div className="col-lg-10">
                <Field
                  name="placement"
                  component={renderField}
                  type="text"
                  className="form-control"
                  placeholder="Enter the placement" autoComplete="off"
                  validate={[required]}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="placementphone" className="col-lg-2 control-label">Placement Phone#:</label>
              <div className="col-lg-10">
                <Field
                  name="placement_phone"   component={renderField}
                  type="text"
                  className="form-control"
                  placeholder="Enter the placement phone#" autoComplete="off"
                  validate={[required]}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="placementemail" className="col-lg-2 control-label">Placement Email:</label>
              <div className="col-lg-10">
                <Field
                  name="placement_email" component={renderField}
                  type="email"
                  className="form-control"
                  placeholder="Enter the placement email" autoComplete="off"
                  validate={[required]}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="zone" className="col-lg-2 control-label">Zone:</label>
              <div className="col-lg-10">
                <Field name="zone" component="select">
                  <option />
                  <option value="North">North</option>
                  <option value="West">West</option>
                  <option value="East">East</option>
                </Field>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="assign_at" className="col-lg-2 control-label">Mentor assigned date:</label>
              <div className="col-lg-10">
              <Field
                name="assign_at"
                inputValueFormat="YYYY-MM-DD"
                dateFormat="L"
                dateFormatCalendar="dddd"
                fixedHeight
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                normalize={value => (value ? moment(value).format('YYYY-MM-DD') : null)}
                component={renderDatePicker}
              />
              </div>
            </div>
            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button type="submit" className="btn btn-outline-info">Submit</button> &nbsp;
                <Link to="/childList" className="btn btn-outline-info">Cancel</Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }

}

//Connect with reducer and use as props
function mapStateToProps(state, props) {
  console.log("CHILDFORM MAPSTATE", props)
  return {
    children: state.children,
    initialValues: props.location.state ? props.location.state.child : null
  }
}

//Connect with action.
function mapDispatchToProps(dispatch) {
  return {
    childAction: bindActionCreators(childAction, dispatch)
  }
}

//combine mapState and mapDispatch to a component "ChildForm"
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'child' })(ChildForm));
