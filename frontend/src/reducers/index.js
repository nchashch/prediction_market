import { combineReducers } from 'redux';
import markets from './markets';
import outcomes from './outcomes';
import positions from './positions';
import orders from './orders';
import portfolios from './portfolios';
import errors from './errors';
import message from './message';
import auth from './auth';

export default combineReducers({
  markets,
  outcomes,
  positions,
  orders,
  portfolios,
  auth,
  errors,
  message
});
