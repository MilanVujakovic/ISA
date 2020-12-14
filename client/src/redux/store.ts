import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootSaga from './sagas/rootSaga';

// Reducers
import dataReducer from './reducers/dataReducer';
import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';

const initialState = {};

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer,
    UI: uiReducer
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(sagaMiddleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga)

export default store;