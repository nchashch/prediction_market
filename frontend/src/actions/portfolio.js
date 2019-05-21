import axios from 'axios';
import { GET_PORTFOLIO, GET_ERRORS } from './types';
import { returnError } from './message';
import { tokenConfig } from './auth';

// GET_PORTFOLIO
export const getPortfolio = () => (dispatch, getState) => {
  const config = tokenConfig(getState);
  axios
    .get('/api/portfolio/', config)
    .then(res => {
      dispatch({
        type: GET_PORTFOLIO,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnError(err)));
};
