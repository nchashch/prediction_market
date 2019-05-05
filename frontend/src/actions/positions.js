import axios from 'axios';
import { GET_POSITIONS, GET_ERRORS } from './types';
import { returnError } from './message';

// GET_POSITIONS
export const getPositions = () => dispatch => {
  axios
    .get('/api/positions/')
    .then(res => {
      dispatch({
        type: GET_POSITIONS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnError(err)));
};
