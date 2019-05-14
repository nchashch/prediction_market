import axios from 'axios';
import { GET_ORDERS, CREATE_ORDER, GET_ERRORS } from './types';
import { returnError } from './message';
import { tokenConfig } from './auth';

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
export const createOrder = (order) => dispatch => {
  console.log(order);
  dispatch({
    type: CREATE_ORDER,
    payload: order
  });
};
