import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  SIGNIN_USER
} from '../actions/types';

export default (state={}, action) => {
console.log("authReducer", action)
switch (action.type) {
  case AUTH_USER:
    return { ...state, error: "", authenticated: true };
  case UNAUTH_USER:
    return { ...state, authenticated: false };
  case AUTH_ERROR:
    return { ...state, error: action.payload };
  // case SIGNIN_USER:
  //   return action.payload || false;

  default:
    return state;
  }
}
