import { call, put, takeLatest } from "@redux-saga/core/effects"
import { fetchUserInfo } from "../api/userFetch"
import { USER_INFO, USER_INFO_REQUESTED, USER_INFO_FAILED } from "../constants/userConstants"

export function* handlerUserInfo() {
    try {
        const user = yield call(fetchUserInfo)
        yield put({ type: USER_INFO, payload: { firstName: user.data.body.firstName, lastName: user.data.body.lastName }})
    } catch(err) {
        yield put({ type: USER_INFO_FAILED, payload: err.message })
    }
}

export function* watcherUserInfoSaga() {
    yield takeLatest(USER_INFO_REQUESTED, handlerUserInfo)
}

