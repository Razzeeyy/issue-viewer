import { takeLatest, call, put, delay } from 'redux-saga/effects'
import { ACTION_REQUEST_ISSUE, ACTION_REQUEST_ISSUES } from '../constants'
import * as actions from '../actions'

export function* watchRequestIssue(api) {
    yield takeLatest([ACTION_REQUEST_ISSUE], requestIssue, api)
}

function* requestIssue(api, { payload: { user, repo, number } }) {
    yield delay(300)
    if(user && repo) {
        try {
            yield put(actions.actionFetchIssue(user, repo, number))
            const response = yield call(api.requestIssue, user, repo, number)
            yield put(actions.actionFetchIssueOk(response, user, repo, number))
        } catch(err) {
            yield put(actions.actionFetchIssueFail(err, user, repo, number))
        }
    }
}

export function* watchRequestIssues(api) {
    yield takeLatest([ACTION_REQUEST_ISSUES], requestIssues, api)
}

function* requestIssues(api, { payload: { user, repo, cursor } }) {
    yield delay(300)
    if(user && repo) {
        try {
            yield put(actions.actionFetchIssues(user, repo))
            const response = yield call(api.requestIssues, user, repo, cursor)
            yield put(actions.actionFetchIssuesOk(response, user, repo))
        } catch(err) {
            yield put(actions.actionFetchIssuesFail(err, user, repo))
        }
    }
}