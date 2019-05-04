import axios from 'axios';
import { GET_MARKETS, DELETE_MARKET, CREATE_MARKET } from './types';

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
    .catch(err => console.log(err));
};

// DELETE_MARKET
export const deleteMarket = (id) => dispatch => {
  axios
    .delete(`/api/markets/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_MARKET,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// CREATE_MARKET
export const createMarket = (market) => dispatch => {
  axios
    .post('/api/markets/', market)
    .then(res => {
      dispatch({
        type: CREATE_MARKET,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
