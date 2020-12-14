import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, STOP_LOADING_UI, UIActionTypes, CLEAR_UI } from '../actions/actionTypes';

interface IInitialState  {
    isLoading: boolean
    errors: {
        email: string
        password: string
    }
}

const initialErrors = {
    email: "",
    password: ""
}

const initialState: IInitialState = {
    isLoading: false,
    errors: initialErrors
}

export default function uiReducer(state = initialState, action:UIActionTypes) {
    switch(action.type) {
        case SET_ERRORS:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            };
        case CLEAR_ERRORS: 
            return {
                ...state,
                isLoading: false,
                errors: initialErrors
            };
        case LOADING_UI:
            return {
                ...state,
                isLoading: true
            };
        case STOP_LOADING_UI:
            return {
                ...state,
                isLoading: false
            };
        case CLEAR_UI:
            return initialState;
        default: 
            return state;
    }
}