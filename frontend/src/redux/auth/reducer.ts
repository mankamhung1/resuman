import { LOGIN_SUCCESS, LoginActions, LOGOUT } from './actions';

export interface AuthState {
  isAuthenticated: boolean,
  username: string,
  userId: string,
}

const initialState = {
  isAuthenticated: false,
  username: '',
  userId: ''
};

export function authReducer(state: AuthState = initialState, action: LoginActions) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.username,
        userId: action.userId
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}