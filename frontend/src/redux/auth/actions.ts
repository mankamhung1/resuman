import axios from 'axios';
import { Dispatch } from 'redux';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;

export interface LoginSuccessAction {
  type: LOGIN_SUCCESS
  username: string
  userId: string
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export type LOGIN_FAILURE = typeof LOGIN_FAILURE;

export interface LoginFailureAction {
  type: LOGIN_FAILURE
  message: string
}

export const LOGOUT = 'LOGOUT';
export type LOGOUT = typeof LOGOUT;

export interface LogOutAction {
  type: LOGOUT
}

export type LoginActions = LoginSuccessAction | LoginFailureAction | LogOutAction;

function loginSuccess(userData: any) {
  return {
    type: LOGIN_SUCCESS,
    username: userData.username,
    userId: userData.userId
  } as LoginSuccessAction;
}

function loginFailure(message: string) {
  return {
    type: LOGIN_FAILURE,
    message
  } as LoginFailureAction;
}

function logOutAction() {
  return {
    type: LOGOUT
  } as LogOutAction;
}

export function loginUser(username: string, password: string) {
  return (dispatch: Dispatch<LoginActions>) => {
    return axios
      .post<{ token: string; message?: string }>(
        `${process.env.REACT_APP_API_SERVER}/api/login`,
        {
          username,
          password
        }
      )
      .then(response => {
        if (response.data == null) {
          dispatch(loginFailure('Unknown Error'));
        } else if (!response.data.token) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginFailure(response.data.message || ''));
        } else {
          // If login was successful, set the token in local storage
          localStorage.setItem('token', response.data.token);
          // Dispatch the success action
          dispatch(loginSuccess(response.data));
        }
      });
      // .catch(err => console.log('Error: ', err));
  };
}

export function loginFacebook(accessToken: string) {
  return (dispatch: Dispatch<LoginActions>) => {
    return axios
      .post<{ token: string; message?: string }>(
        `${process.env.REACT_APP_API_SERVER}/api/login/facebook`,
        {
          access_token: accessToken
        }
      )
      .then(response => {
        if (response.data == null) {
          dispatch(loginFailure('Unknown Error'));
        } else if (!response.data.token) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginFailure(response.data.message || ''));
        } else {
          // If login was successful, set the token in local storage
          localStorage.setItem('token', response.data.token);
          // Dispatch the success action
          dispatch(loginSuccess(response.data));
        }
      });
      // .catch(err => console.log('Error: ', err));
  };
}

declare global {
  interface Window {
    FB: {
      logout: (callback: () => void) => void;
    };
  }
}

export function logOut() {
  return (dispatch: Dispatch<LoginActions>) => {
    window.FB.logout(() => {
      localStorage.removeItem('token');
      // Dispatch the success action
      dispatch(logOutAction());
    });
  };
}