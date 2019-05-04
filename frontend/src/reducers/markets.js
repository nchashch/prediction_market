import { GET_MARKETS, DELETE_MARKET, CREATE_MARKET } from '../actions/types';

const initialState = {
  markets: []
};

export default function(state = initialState, action) {
  switch(action.type) {
  case GET_MARKETS:
    return {
      ...state,
      markets: action.payload
    };
  case DELETE_MARKET:
    return {
      ...state,
      markets: state.markets.filter(market => market.id !== action.payload)
    };
  case CREATE_MARKET:
    return {
      ...state,
      markets: [...state.markets, action.payload]
    };
  default:
    return state;
  }
}
