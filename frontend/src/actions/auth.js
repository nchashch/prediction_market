import axios from 'axios';
import { USER_LOADING,
         USER_LOADED,
         AUTH_ERROR,
         LOGIN_SUCCESS,
         LOGIN_FAIL,
         LOGOUT_SUCCESS,
         REGISTER_SUCCESS,
         REGISTER_FAIL
       } from './types';
import { returnError } from './message';

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  const config = tokenConfig(getState);
  axios
    .get('/api/auth/user/', config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: AUTH_ERROR });
      dispatch(returnError(err));
    });
};

// Login user
export const login = (username, password) => dispatch => {
  // Headers
  const config = {
    'headers': {
      'Content-Type': 'application/json'
    }
  };
  // Body
  const body = JSON.stringify({ username, password });

  axios
    .post('/api/auth/login/', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL });
      dispatch(returnError(err));
    });
};

// Logout user
export const logout = () => (dispatch, getState) => {
  const config = tokenConfig(getState);
  axios
    .post('/api/auth/logout/', null, config)
    .then(res => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch(err => {
      dispatch(returnError(err));
    });
};

// Register user
export const register = ({ username, password, email }) => dispatch => {
  // Headers
  const config = {
    'headers': {
      'Content-Type': 'application/json'
    }
  };
  // Body
  const body = JSON.stringify({ username, email, password });

  axios
    .post('/api/auth/register/', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAIL });
      dispatch(returnError(err));
    });
};

// Setup config with token - helper function
export const tokenConfig = getState => {
  const token = getState().auth.token;
  const config = {
    'headers': {
      'Content-Type': 'application/json'
    }
  };
  if(token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  return config;
};
