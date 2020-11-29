import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware  from "redux-saga";

// Reducers
import dataReducer from './reducers/dataReducer';
import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';

const initialState = {};

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    UI: uiReducer
});

const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;