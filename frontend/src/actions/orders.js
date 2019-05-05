import axios from 'axios';
import { GET_ORDERS, GET_ERRORS } from './types';
import { returnError } from './message';

// GET_ORDERS
export const getOrders = () => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    'headers': {
      'Authorization': `Token ${token}`
    }
  };
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
