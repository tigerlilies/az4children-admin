import axios from 'axios';
import { BrowserRouter, Link } from 'react-router-dom';
import config from '../config';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  SIGNIN_USER
} from './types';

const API_URL = config.API_URL;

// Header for jwt token
const head = {
                headers: {
                  authorization : localStorage.getItem('token')
                }
              }

// export const authUser = () => {
//   return ({
//     type: 'AUTH_USER',
//     isAuthenticated: true
//   })
// }

// export const unauthUser = () => {
//   return ({
//     type: 'UNAUTH_USER'
//   })
// }

export function authError(error) {
  return {
    type: "AUTH_ERROR",
    payload: error
  }
}

// When sign in user, send info( email/password) to server
export function signinUser(values,history, fetchProfiles) {
  return function(dispatch){
    //Submit email, password to the server
    axios.post(`${API_URL}/api/auth/signin`, values).then(response => {
      //Update state to indicate user is unthenticated
      dispatch({ type: AUTH_USER });
      //Save the JWT token
      localStorage.setItem('token',response.data.token);

      //redirect to the route '/childList'
      history.push("/childList")
      // BrowserRouter.push("/childList")
    })
    .catch(
      dispatch(authError('Bad Login Info'))
    )
  }
}

// export const signinUser =  (values) =>  async dispatch => {
//
//  const res = await axios.post(`${API_URL}/api/auth/signin`, values)
//
//  // If successed
//
//  dispatch({ type: SIGNIN_USER, payload: res.data.token })
// }


export function signoutUser(history) {
  return function(dispatch){
    localStorage.removeItem('token');
    //Update state to indicate user is unthenticated
    dispatch({ type: UNAUTH_USER });
    //redirect to the route '/'
    history.push("/")
  }
}
