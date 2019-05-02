import { GET_MARKETS } from '../actions/types';

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
  default:
    return state;
  }
}
