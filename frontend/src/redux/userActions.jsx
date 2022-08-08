import { UserActionTypes } from "./userActionTypes";

export const setUserDetails = (user) => ({
  type: UserActionTypes.SET_USER_DETAILS,
  payload: user,
});

export const setProjectDetails = (project) => ({
  type: UserActionTypes.SET_PROJECT_DETAILS,
  payload: project,
});
