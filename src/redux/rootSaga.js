import { all } from "@redux-saga/core/effects"
import { watcherAuthIsLoginSaga, watcherAuthLoginSaga, watcherAuthLogoutSaga } from "./sagas/authSaga"
import { watcherUserInfoSaga } from "./sagas/userSaga"

export default function* rootSaga() {
    yield all([
        watcherAuthLoginSaga(),
        watcherAuthIsLoginSaga(),
        watcherAuthLogoutSaga(),

        watcherUserInfoSaga()
    ])
}