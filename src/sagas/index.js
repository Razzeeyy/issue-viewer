import { all } from 'redux-saga/effects'
import { watchInputUser, watchInputSearch } from './input'
import { watchRequestIssue } from './requests'

export default function* rootSaga(api) {
    yield all([
        watchInputUser(api),
        watchInputSearch(api),
        watchRequestIssue(api)
    ])
}