import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import children from './child';


const rootReducer = combineReducers({
  children,
  form: formReducer
});

export default rootReducer;
