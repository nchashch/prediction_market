import { GET_OUTCOMES } from '../actions/types';

const initialState = {
  outcomes: []
};

export default function(state = initialState, action) {
  switch(action.type) {
  case GET_OUTCOMES:
    return {
      ...state,
      outcomes: action.payload
    };
  default:
    return state;
  }
}
