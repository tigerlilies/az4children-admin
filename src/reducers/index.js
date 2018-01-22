import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import children from './child';
import auth from './auth';


const rootReducer = combineReducers({
  children,
  form: formReducer,
  auth: auth
});

export default rootReducer;
