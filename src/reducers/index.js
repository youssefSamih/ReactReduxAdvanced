import { combineReducers } from 'redux';

import commentReducer from 'reducers/comment';

export default combineReducers({
  comment: commentReducer
})