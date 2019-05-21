import { GET_PORTFOLIO } from '../actions/types';

const initialState = {
  portfolio: null
};

export default function(state = initialState, action) {
  switch(action.type) {
  case GET_PORTFOLIO:
    return {
      ...state,
      portfolio: action.payload
    };
  default:
    return state;
  }
}
