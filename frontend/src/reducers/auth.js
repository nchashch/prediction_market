import { USER_LOADING,
         USER_LOADED,
         AUTH_ERROR,
         LOGIN_SUCCESS,
         LOGIN_FAIL,
         LOGOUT_SUCCESS
       } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch(action.type) {
  case USER_LOADING:
    return {
      ...state,
      isLoading: true
    };
  case USER_LOADED:
    return {
      ...state,
      isAuthenticated: true,
      isLoading: false,
      user: action.payload
    };
  case LOGIN_SUCCESS:
    localStorage.setItem('token', action.payload.token);
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      isAuthenticated: true,
      isLoading: false
    };
  case LOGOUT_SUCCESS:
  case AUTH_ERROR:
  case LOGIN_FAIL:
    localStorage.removeItem('token');
    return {
      ...state,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      user: null
    };
  default:
    return state;
  }
}
