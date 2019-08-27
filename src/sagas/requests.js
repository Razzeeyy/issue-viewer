import { takeLatest, call, put, delay } from 'redux-saga/effects'
import { ACTION_REQUEST_ISSUE } from '../constants'
import * as actions from '../actions'

export function* watchRequestIssue(api) {
    yield takeLatest([ACTION_REQUEST_ISSUE], requestIssue, api)
}

function* requestIssue(api, { payload: { user, repo, number } }) {
    yield delay(300)
    if(user && repo) {
        try {
            yield put(actions.actionFetchIssue())
            const response = yield call(api.requestIssue, user, repo, number)
            yield put(actions.actionFetchIssueOk(response))
        } catch(err) {
            yield put(actions.actionFetchIssueFail(err))
        }
    }
}