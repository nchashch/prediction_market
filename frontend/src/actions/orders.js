import axios from 'axios';
import { GET_ORDERS, GET_ERRORS } from './types';
import { returnError } from './message';

// GET_ORDERS
export const getOrders = () => dispatch => {
  axios
    .get('/api/orders/')
    .then(res => {
      dispatch({
        type: GET_ORDERS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnError(err)));
};
