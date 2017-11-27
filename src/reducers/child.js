let initialState = [];

export default (state=initialState, action) => {

  switch (action.type) {

    case 'CHILD_PENDING':
      return state;
    case 'CHILD_FULFILLED':
      return [...action.payload.data];
    case 'CHILD_REJECTED':
      return state;

    case 'CHILD_ADD_PENDING':
      return state;
    case 'CHILD_ADD_FULFILLED':
      return [...action.payload.data];
    case 'CHILD_ADD_REJECTED':
      return state;

    case 'CHILD_DELETE_PENDING':
      return state;
    case 'CHILD_DELETE_FULFILLED':
      return [...action.payload.data];
    case 'CHILD_DELETE_REJECTED':
      return state;

    case 'CHILD_UPDATE_PENDING':
      return state;
    case 'CHILD_UPDATE_FULFILLED':
      return [...action.payload.data];
    case 'CHILD_UPDATE_REJECTED':
      return state;

    default:
      return state;

  }

}
