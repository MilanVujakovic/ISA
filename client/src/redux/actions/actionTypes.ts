// User reducer types
export const SIGNUP_USER = 'SIGNUP_USER';
export interface SignupUserAction {
    type: typeof SIGNUP_USER
    userData: object
    history: any
}
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export interface SignupUserSuccessAction {
    type: typeof SIGNUP_USER_SUCCESS
}
export const LOGIN_USER = 'LOGIN_USER';
export interface LoginUserAction {
    type: typeof LOGIN_USER   
    userData: object
    history: any
}
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export interface LoginUserSuccessAction {
    type: typeof LOGIN_USER_SUCCESS
}
export const LOGOUT_USER = 'LOGOUT_USER';
export interface LogoutUserAction {
    type: typeof LOGOUT_USER
}
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export interface LogoutUserSuccessAction {
    type: typeof LOGOUT_USER_SUCCESS
}

export const REQUEST_USER_DATA = 'REQUEST_USER_DATA';
export interface RequestUserDataAction {
    type: typeof REQUEST_USER_DATA
}
export const SET_USER_DATA = 'SET_USER_DATA';
export interface SetUserDataAction {
    type: typeof SET_USER_DATA
    payload: object
}

export type UserActionTypes = SignupUserSuccessAction | LoginUserAction | LoginUserSuccessAction | LogoutUserAction | LogoutUserSuccessAction | RequestUserDataAction | SetUserDataAction;

// UI reducer types
export const SET_ERRORS = 'SET_ERRORS';
export interface SetErrorsAction {
    type: typeof SET_ERRORS
    payload: object
}
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export interface ClearErrorsAction {
    type: typeof CLEAR_ERRORS
}
export const LOADING_UI = 'LOADING_UI';
export interface LoadingUIAction {
    type: typeof LOADING_UI
}
export const STOP_LOADING_UI = 'STOP_LOADING_UI';
export interface StopLoadingUIAction {
    type: typeof STOP_LOADING_UI
}
export const CLEAR_UI = 'CLEAR_UI';
export interface ClearUIAction {
    type: typeof CLEAR_UI
}

export type UIActionTypes = SetErrorsAction | ClearErrorsAction | LoadingUIAction | StopLoadingUIAction | ClearUIAction;