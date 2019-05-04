import { combineReducers } from 'redux';
import markets from './markets';
import errors from './errors';
import message from './message';

export default combineReducers({
  markets,
  errors,
  message
});
