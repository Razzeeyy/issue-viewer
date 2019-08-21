import { takeLatest, delay, select, call, put } from 'redux-saga/effects'
import { ACTION_INPUT_USER, ACTION_INPUT_REPO, ACTION_INPUT_SEARCH } from '../constants'
import { getInputUser, getInputRepo } from '../reducers'
import { actionFetchIssues, actionFetchIssuesOk, actionFetchIssuesFail } from '../actions'

export function* watchInputSearch(api) {
    yield takeLatest([ACTION_INPUT_USER, ACTION_INPUT_REPO, ACTION_INPUT_SEARCH], requestIssues, api)
}

function* requestIssues(api) {
    yield delay(300)
    const user = yield select(getInputUser)
    const repo = yield select(getInputRepo)
    if(user && repo) {
        try {
            yield put(actionFetchIssues())
            const response = yield call(api.requestIssues, user, repo)
            yield put(actionFetchIssuesOk(response))
        } catch(err) {
            yield put(actionFetchIssuesFail(err))
        }
    }
}

export function* watchInputUser(api) {
    yield takeLatest(ACTION_INPUT_USER, requestRepos, api)
}

function* requestRepos(api) {
    yield delay(300)
    const user = yield select(getInputUser)
    //TODO: write state + handle organization repo completion
    console.log('req repos')
    if(user) {
        try {
            const response = yield call(api.requestRepos, user)
            console.log(response)
        } catch(err) {
            console.error(err)
        }
    }
}