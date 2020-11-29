// User reducer types
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_USER_DATA = 'SET_USER_DATA';

interface LoginUserSuccessAction {
    type: typeof LOGIN_USER_SUCCESS
}

interface LogoutUserAction {
    type: typeof LOGOUT_USER
}

interface SetUserDataAction {
    type: typeof SET_USER_DATA
    payload: object
}

export type UserActionTypes = LoginUserSuccessAction | LogoutUserAction | SetUserDataAction;