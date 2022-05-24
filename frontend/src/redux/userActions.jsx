import { UserActionTypes } from "./userActionTypes";

export const setUserDetails = (user) => ({
    type: UserActionTypes.SET_USER_DETAILS,
    payload: user
})