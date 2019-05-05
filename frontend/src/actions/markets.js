import axios from 'axios';
import { GET_MARKETS, DELETE_MARKET, CREATE_MARKET, GET_ERRORS } from './types';
import { createMessage, returnError } from './message';

// GET_MARKETS
export const getMarkets = () => dispatch => {
  axios
    .get('/api/markets/')
    .then(res => {
      dispatch({
        type: GET_MARKETS,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnError(err)));
};

// DELETE_MARKET
export const deleteMarket = (id) => dispatch => {
  axios
    .delete(`/api/markets/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteMarket: `Deleted market ${id}`}));
      dispatch({
        type: DELETE_MARKET,
        payload: id
      });
    })
    .catch(err => dispatch(returnError(err)));
};

// CREATE_MARKET
export const createMarket = (market) => dispatch => {
  axios
    .post('/api/markets/', market)
    .then(res => {
      dispatch(createMessage({createMarket: `Created market ${res.data.name} #${res.data.id}`}));
      dispatch({
        type: CREATE_MARKET,
        payload: res.data
      });
    })
    .catch(err => dispatch(returnError(err)));
};
