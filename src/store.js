import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';
import promises from 'redux-promise-middleware';
import reduxThunk from 'redux-thunk';

export default(initialState) => {
  return createStore(rootReducer, applyMiddleware(promises(), reduxThunk));
}
