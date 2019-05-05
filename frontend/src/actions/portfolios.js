import axios from 'axios';
import { GET_PORTFOLIOS, GET_ERRORS } from './types';
import { returnError } from './message';

// GET_PORTFOLIOS
export const getPortfolios = () => dispatch => {
  axios
    .get('/api/portfolios/')
    .then(res => {
      dispatch({
        type: GET_PORTFOLIOS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnError(err)));
};
