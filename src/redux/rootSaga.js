import { all } from "@redux-saga/core/effects"
import { watcherAuthIsLoginSaga, watcherAuthLoginSaga, watcherAuthLogoutSaga } from "./sagas/authSaga"

export default function* rootSaga() {
    yield all([
        watcherAuthLoginSaga(),
        watcherAuthIsLoginSaga(),
        watcherAuthLogoutSaga()
    ])
}