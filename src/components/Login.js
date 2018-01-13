import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


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
    <label>{label}</label>
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

class Login extends Component {

  handleFormSubmit(values) {
    console.log("Login HandleFormSubmit", values);
    // Need to do something to log user in
    
  }


  render() {
    const { handleSubmit, fields: { email, password }} = this.props;


    return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-5">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <label htmlFor="Email" className="col-lg-2 control-label">Email address:</label>
            <div className="col-lg-10">
              <Field
               name="email"
               component={renderField}
               type="text"
               className="form-control"
               placeholder="Enter the email address" autoComplete="off"
               validate={[required]}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Password" className="col-lg-2 control-label">Password:</label>
            <div className="col-lg-10">
              <Field
                name="password"
                component={renderField}
                type="text"
                className="form-control"
                placeholder="Enter the password" autoComplete="off"
                validate={[required]}
              />
            </div>
          </div>
            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Login);
