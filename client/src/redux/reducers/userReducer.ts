import { SET_USER_DATA, LOGOUT_USER, LOGIN_USER_SUCCESS, UserActionTypes } from '../actions/actionTypes';

interface IInitialState  {
    isAuthenticated: boolean
    data: object
}

const initialState: IInitialState = {
    isAuthenticated: false,
    data: {}
};

export default function userReducer(state = initialState, action: UserActionTypes) {
    switch(action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            };
        case LOGOUT_USER:
            return initialState;
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            };
        default: 
            return state;
    }
}