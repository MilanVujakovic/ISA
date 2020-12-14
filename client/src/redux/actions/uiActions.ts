import * as actionTypes from './actionTypes';

export function setErrors(errors: object): actionTypes.SetErrorsAction {
   return {
        type: actionTypes.SET_ERRORS,
        payload: errors
    };
}

export function clearErrors(): actionTypes.ClearErrorsAction {
    return {
        type: actionTypes.CLEAR_ERRORS
    };
}

export function loadingUI(): actionTypes.LoadingUIAction {
    return {
        type: actionTypes.LOADING_UI
    };
}

export function stopLoadingUI(): actionTypes.StopLoadingUIAction {
    return {
        type: actionTypes.STOP_LOADING_UI
    };
}

export function clearUI(): actionTypes.ClearUIAction {
    return {
        type: actionTypes.CLEAR_UI
    };
}
   
