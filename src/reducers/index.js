import { combineReducers } from 'redux';

import commentReducer from 'reducers/comment';
import authReducer from "reducers/auth";

export default combineReducers({
  comment: commentReducer,
  auth: authReducer
});