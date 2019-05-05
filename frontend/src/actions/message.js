import { CREATE_MESSAGE, GET_ERRORS } from './types';

// CREATE_MESSAGE
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

export const returnError = err => {
  const errors = {
    msg: err.response.data,
    status: err.response.status
  };
  return {
    type: GET_ERRORS,
    payload: errors
  };
};
