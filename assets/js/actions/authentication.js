import {createAction} from 'redux-actions';

export const userLogin = createAction(
    "APP/AUTHENTICATION/LOGIN",
    (username, password) => ({
        username,
        password
    })
);

export const userLoggedIn = createAction(
    "APP/AUTHENTICATION/LOGGED_IN",
    (user) => ({
        user
    })
);

export const userLogout = createAction("APP/AUTHENTICATION/LOGOUT");

export const userLoggedOut = createAction(
    "APP/AUTHENTICATION/LOGGED_OUT",
    (csrf) => ({
        csrf
    })
);