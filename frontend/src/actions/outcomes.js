import axios from 'axios';
import { GET_OUTCOMES } from './types';

// GET_OUTCOMES
export const getOutcomes = (marketId) => dispatch => {
  axios
    .get(`/api/outcomes/?market=${marketId}`)
    .then(res => {
      dispatch({
        type: GET_OUTCOMES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
