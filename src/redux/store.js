import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import authReducer from './reducers/authReducer';
import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
    auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const userTokenLocalStorage = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : [];

const INITIAL_STATE = {
    auth: {
        userToken: userTokenLocalStorage
    }
};

const store = createStore(rootReducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;

