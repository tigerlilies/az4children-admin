import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;

export const signinUser = (values) => {
  console.log("SignInActions", values)
  return ({
    type: 'SIGN_IN',
    payload: axios.post(`${API_URL}/api/auth/signin`,values)
  })
}





// export function signinUser({ email, password }) {
//   return function(dispatch){
//
//     console.log("AuthActions", "I am in auth Action")
//     //Submit email/password to the server
//     axios.post(`${API_URL}/api/auth/signin`, { email: email, password: password })
//     //If request is good ...
//     //Update state to indicate user is authenticated
//     //Save the JWT token
//     //redirect to the route '/'
//
//
//     //If request is bad ...
//     //-show an error to the user
//
//
//   }
// }
