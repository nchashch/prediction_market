import axios from 'axios';
import { GET_POSITIONS, GET_ERRORS } from './types';
import { returnError } from './message';
import { tokenConfig } from './auth';

// GET_POSITIONS
export const getPositions = () => (dispatch, getState) => {
  const config = tokenConfig(getState);
  axios
    .get('/api/positions/', config)
    .then(res => {
      dispatch({
        type: GET_POSITIONS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnError(err)));
};
