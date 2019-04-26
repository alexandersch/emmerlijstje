import {handleActions} from 'redux-actions';
import * as authenticationActions from "../actions/authentication";

export default handleActions({
        [authenticationActions.userLogin]: (state, {payload: {username, password}}) => ({
            ...state,
            username,
            password
        }),
        [authenticationActions.userLoggedIn]: (state, {payload: {user}}) => ({
            ...state,
            username: null,
            password: null,
            user: user
        }),
        [authenticationActions.userLogout]: (state) => ({
            ...state,
            user: null
        }),
        [authenticationActions.userLoggedOut]: (state, {payload: {csrf}}) => ({
            ...state,
        }),
    },
    {
        csrf: null,
        username: null,
        password: null,
        user: null
    }
)