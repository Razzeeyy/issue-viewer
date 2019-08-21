import { takeLatest, delay, select, call, put } from 'redux-saga/effects'
import { ACTION_INPUT_USER, ACTION_INPUT_REPO, ACTION_INPUT_SEARCH } from '../constants'
import { getInputUser, getInputRepo } from '../reducers'
import * as actions from '../actions'

export function* watchInputSearch(api) {
    yield takeLatest([ACTION_INPUT_USER, ACTION_INPUT_REPO, ACTION_INPUT_SEARCH], requestIssues, api)
}

function* requestIssues(api) {
    yield delay(300)
    const user = yield select(getInputUser)
    const repo = yield select(getInputRepo)
    if(user && repo) {
        try {
            yield put(actions.actionFetchIssues())
            const response = yield call(api.requestIssues, user, repo)
            yield put(actions.actionFetchIssuesOk(response))
        } catch(err) {
            yield put(actions.actionFetchIssuesFail(err))
        }
    }
}

export function* watchInputUser(api) {
    yield takeLatest(ACTION_INPUT_USER, requestRepos, api)
}

function* requestRepos(api) {
    yield delay(300)
    const user = yield select(getInputUser)
    if(user) {
        try {
            yield put(actions.actionFetchRepos())
            const response = yield call(api.requestRepos, user)
            yield put(actions.actionFetchReposOk(response))
        } catch(err) {
            yield put(actions.actionFetchReposFail(err))
        }
    }
}