import { call, put, takeLatest } from "@redux-saga/core/effects"
import { USER_IS_LOGIN_REQUESTED, USER_IS_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUESTED, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_LOGOUT_REQUESTED } from "../constants/authConstants"
import { fetchAuthLogin } from "../api/authFetch"
import { fetchUserInfo } from "../api/userFetch"

export function* handlerUserLogin({ payload }) {
    try {
        const user = yield call(fetchAuthLogin, payload)
        yield put({ type: USER_LOGIN_SUCCESS, payload: user.data.body.token })
    } catch(err) {
        yield put({ type: USER_LOGIN_FAILED, payload: "Incorrect password or username" })
    }
}

export function* handlerUserIsLogin() {
    try {
        yield call(fetchUserInfo)
        yield put({ type: USER_IS_LOGIN_SUCCESS })
    } catch(err) {
        yield put({ type: USER_LOGIN_FAILED })
    }
}

export function* handlerUserLogout() {
    yield put({ type: USER_LOGOUT })
}

export function* watcherAuthLoginSaga() {
    yield takeLatest(USER_LOGIN_REQUESTED, handlerUserLogin)
}

export function* watcherAuthIsLoginSaga() {
    yield takeLatest(USER_IS_LOGIN_REQUESTED, handlerUserIsLogin)
}

export function* watcherAuthLogoutSaga() {
    yield takeLatest(USER_LOGOUT_REQUESTED, handlerUserLogout)
}

