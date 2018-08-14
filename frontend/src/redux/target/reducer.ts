import { TargetActions, UPDATE_REF, UPDATE_TARGET } from "./actions";

export interface AuthState {
  target_position: string,
  resumes: object | null
}

const initialState = {
  target_position: '',
  resumes: []
};

export function targetReducer(state: AuthState = initialState, action: TargetActions) {
  switch (action.type) {
    case UPDATE_TARGET:
      return {
        ...state,
        target_position: action.target_position
      };
    case UPDATE_REF:
      return {
        ...state,
        resumes: action.resumes
      };
    default:
      return state;
  }
}