import { takeLatest, delay, select, call, put } from 'redux-saga/effects'
import { ACTION_INPUT_USER, ACTION_INPUT_REPO, ACTION_INPUT_SEARCH } from '../constants'
import { getInputUser, getInputRepo } from '../reducers'
import { actionFetchIssuesOk } from '../actions'

export function* watchInputSearch(api) {
    yield takeLatest([ACTION_INPUT_USER, ACTION_INPUT_REPO, ACTION_INPUT_SEARCH], requestIssues, api)
}

export function* requestIssues(api) {
    yield delay(300)
    const user = yield select(getInputUser)
    const repo = yield select(getInputRepo)
    if(user && repo) {
        const response = yield call(api.requestIssues, user, repo)
        yield put(actionFetchIssuesOk(response))
    }
}