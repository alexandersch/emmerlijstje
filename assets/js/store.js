import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers from "./reducers";
import authenticationSaga from './sagas/authentication'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    {
        authentication: {
            user: app.user,
            csrf: csrf
        }
    },
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(authenticationSaga);

export default store;