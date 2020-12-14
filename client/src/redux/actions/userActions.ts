import * as actionTypes from './actionTypes';

export function signupUser(userData: UserData, history: any): actionTypes.SignupUserAction {
    return {
        type: actionTypes.SIGNUP_USER,
        userData,
        history
    };
}

export function signupUserSuccess(): actionTypes.SignupUserSuccessAction {
    return {
        type: actionTypes.SIGNUP_USER_SUCCESS
    };
}

export function loginUser(userData: UserData, history: any): actionTypes.LoginUserAction {
    return {
        type: actionTypes.LOGIN_USER,
        userData,
        history
    };
}

export function loginUserSuccess(): actionTypes.LoginUserSuccessAction {
    return {
        type: actionTypes.LOGIN_USER_SUCCESS
    };
}

export function logoutUser(): actionTypes.LogoutUserAction {
    return {
        type: actionTypes.LOGOUT_USER
    };
}

export function logoutUserSuccess(): actionTypes.LogoutUserSuccessAction {
    return {
        type: actionTypes.LOGOUT_USER_SUCCESS
    };
}

export function getUserData(): actionTypes.RequestUserDataAction {
    return {
        type: actionTypes.REQUEST_USER_DATA
    };
}

export function setUserData(payload: object): actionTypes.SetUserDataAction {
    return {
        type: actionTypes.SET_USER_DATA,
        payload
    };
}
