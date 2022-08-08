import { UserActionTypes } from "./userActionTypes";

const INITIAL_STATE = {
  details: null,
  projectDetails: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER_DETAILS:
      return { ...state, details: action.payload };
    case UserActionTypes.SET_PROJECT_DETAILS:
      return { ...state, projectDetails: action.payload };
    default:
      return state;
  }
};

export default userReducer;
