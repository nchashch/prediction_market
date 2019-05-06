import axios from 'axios';
import { GET_PORTFOLIOS, GET_ERRORS } from './types';
import { returnError } from './message';
import { tokenConfig } from './auth';

// GET_PORTFOLIOS
export const getPortfolios = () => (dispatch, getState) => {
  const config = tokenConfig(getState);
  axios
    .get('/api/portfolios/', config)
    .then(res => {
      dispatch({
        type: GET_PORTFOLIOS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnError(err)));
};
