import axios from 'axios';
import { GET_ORDERS, CREATE_ORDER, GET_ERRORS } from './types';
import { returnError } from './message';
import { tokenConfig } from './auth';
import { getOutcomes } from './outcomes';
import { getPortfolio } from './portfolio';

// GET_ORDERS
export const getOrders = () => (dispatch, getState) => {
  const config = tokenConfig(getState);
  axios
    .get('/api/orders/', config)
    .then(res => {
      dispatch({
        type: GET_ORDERS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnError(err)));
};

// CREATE_ORDER
export const createOrder = (order, marketId) => (dispatch, getState) => {
  const config = tokenConfig(getState);
  axios
    .post('/api/orders/', order, config)
    .then(res => {
      dispatch({
        type: CREATE_ORDER,
        payload: res.data
      });
      dispatch(getOutcomes(marketId));
      dispatch(getPortfolio());
    })
    .catch(err => dispatch(returnError(err)));
};
