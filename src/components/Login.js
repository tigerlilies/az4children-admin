import React from 'react';
import { Field, reduxForm } from 'redux-form';


const Login = (props) => {
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-5">
        <form>
          <div className="form-group">
            <label htmlFor="Email" className="col-lg-2 control-label">Email address:</label>
            <div className="col-lg-10">
              <input name="email" component="input" type="text" className="form-control" placeholder="Enter the email address" autoComplete="off" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Password" className="col-lg-2 control-label">Password:</label>
            <div className="col-lg-10">
              <input name="password" component="input" type="text" className="form-control" placeholder="Enter the password" autoComplete="off" />
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

export default Login;
