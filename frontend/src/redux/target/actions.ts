// import { Dispatch } from 'redux';

export interface UpdateRefAction {
  type: UPDATE_REF
  resumes: object
}

export interface UpdateTargetAction {
  type: UPDATE_TARGET
  target_position: string
}

export const UPDATE_TARGET = 'LOGOUT';
export type UPDATE_TARGET = typeof UPDATE_TARGET;

export const UPDATE_REF = 'UPDATE_REF';
export type UPDATE_REF = typeof UPDATE_REF;

export type TargetActions = UpdateRefAction | UpdateTargetAction;

export function updateTargetAction(position: string) {
  return {
    type: UPDATE_TARGET,
    target_position: position
  } as UpdateTargetAction
}

export function updateRefAction(resumesArray: object) {
  return {
    type: UPDATE_REF,
    resumes: resumesArray
  } as UpdateRefAction
}

// export function updateTarget(position: string) {
//   return (dispatch: Dispatch<TargetActions>) => {
//     dispatch(updateTargetAction(position))
//   }
// }

// export function updateRef(resumesArray: object) {
//   return (dispatch: Dispatch) => {
//     dispatch(updateRefAction(resumesArray))
//   }
// }
