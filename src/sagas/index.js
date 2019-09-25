import { all } from 'redux-saga/effects'
import { watchInputUser } from './input'
import { watchRequestIssue, watchRequestIssues } from './requests'

//TODO way to propagate errors to the UI
export default function* rootSaga(api) {
    yield all([
        watchInputUser(api),
        watchRequestIssues(api),
        watchRequestIssue(api)
    ])
}