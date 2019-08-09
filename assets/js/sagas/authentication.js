import {call, put, select, takeLatest} from 'redux-saga/effects';
import * as authenticationActions from './../actions/authentication';

export default function* AuthenticationSaga() {
    yield takeLatest(authenticationActions.userLogin, login);
    yield takeLatest(authenticationActions.userLogout, logout);
}

function* login() {

    const authenticationState = yield select(state => state.authentication);

    const formData = new FormData();
    formData.append('username', authenticationState.username);
    formData.append('password', authenticationState.password);
    formData.append('_csrf_token', authenticationState.csrf);

    const user = yield call(() => fetch('/account/login', {
        method: 'POST',
        body: formData
    }).then(response => (response.ok) ? response.json() : null)
        .then(response => response).catch((e) => {
            console.log(e);
            return null;
        }));

    yield put({
        type: authenticationActions.userLoggedIn,
        payload: {
            user: user
        }
    })

}

function* logout() {

    const authenticationState = yield select(state => state.authentication);
    console.log(authenticationState);


    const response = yield call(() => fetch('/account/logout/' + authenticationState.csrf).then(response => (response.ok) ? response.json() : null)
        .then(response => response).catch((e) => {
            console.log(e);
            return null;
        }));


    yield put({
        type: authenticationActions.userLoggedOut,
        payload: {
            csrf: response.csrf
        }
    })

}