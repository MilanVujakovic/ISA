import * as userActions from '../actions/userActions';
import * as uiActions from '../actions/uiActions';
import * as actionTypes from '../actions/actionTypes';
import * as API from '../../utils/API';
import { RouteComponentProps } from 'react-router-dom';
import {
    put,
    call,
    takeLatest,
    takeEvery
} from 'redux-saga/effects';

// Validation
import { validateLoginForm } from '../../utils/FormValidation';


export function* loginUser({ userData, history }: actionTypes.LoginUserAction) {
    yield put(uiActions.loadingUI());

    const { isValid, errors } = validateLoginForm(userData);
    if(!isValid) {
        yield put(uiActions.setErrors({ ...errors }));
        return;
    }

    try{
        yield call(API.login, '/user/login', userData);
        yield put(userActions.loginUserSuccess());
        yield put(userActions.getUserData());
        history.push('/');
    } catch(error) {
        console.log(error);
        yield put(uiActions.setErrors(error.response.data));
    };
};

export function* getUserData() {
    try {
        const res = yield call(API.getData, '/user/me')
        yield put(userActions.setUserData(res.data));
    } catch (error) {
        console.log(error);
    }
};

export function* logoutUser() {
    try {
        yield call(API.logout, '/user/logout')
        yield put(userActions.logoutUserSuccess());
    } catch (error) {
        console.log(error);
    }
};

export function* signupUser({ userData, history }: actionTypes.SignupUserAction) {
    yield put(uiActions.loadingUI());
    try {
        yield call(API.signup, '/user/signup', userData);
        yield put(userActions.signupUserSuccess());
        yield put(userActions.getUserData())
        history.push('/');
    } catch (error) {
        console.log(error);
        yield put(uiActions.setErrors(error.response.data));
    }
}

export default function* userSaga() {
    yield takeLatest(actionTypes.SIGNUP_USER, signupUser);
    yield takeLatest(actionTypes.LOGIN_USER, loginUser);
    yield takeLatest(actionTypes.LOGOUT_USER, logoutUser);
    yield takeEvery(actionTypes.REQUEST_USER_DATA, getUserData);
}