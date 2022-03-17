
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './userActionTypes';

export const fetchRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchRequestSuccess = (payload) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload,
  };
};

export const fetchRequestFailure = (payload) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload,
  };
};
