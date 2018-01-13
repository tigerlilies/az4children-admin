let initialState = [];

export default (state=initialState, action) => {

switch (action.type) {

  case 'SIGN_IN_PENDING':
    return state;
  case 'SIGN_IN_FULFILLED':
    return [...action.payload.data];
  case 'SIGN_IN_REJECTED':
    return state;

  default:
    return state;
  }
}
