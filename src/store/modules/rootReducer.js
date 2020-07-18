import { combineReducers } from 'redux';

import user from './user/reducer';
import phones from './phones/reducer';

export default combineReducers({
  user,
  phones,
});
