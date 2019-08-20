import { takeLatest, delay, select, call } from 'redux-saga/effects'
import { ACTION_INPUT_USER, ACTION_INPUT_REPO, ACTION_INPUT_SEARCH } from '../constants'
import { getInputUser, getInputRepo } from '../reducers'

export function* watchInputSearch(api) {
    yield takeLatest([ACTION_INPUT_USER, ACTION_INPUT_REPO, ACTION_INPUT_SEARCH], requestIssues, api)
}

export function* requestIssues(api) {
    yield delay(300)
    const user = yield select(getInputUser)
    const repo = yield select(getInputRepo)
    if(user && repo) {
        const data = yield call(api.requestIssues, user, repo)
        console.log(data)
    }
}