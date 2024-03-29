import { takeLatest, delay, select, call, put } from 'redux-saga/effects'
import { ACTION_INPUT_USER } from '../constants'
import { getInputUser } from '../reducers'
import * as actions from '../actions'

export function* watchInputUser(api) {
    yield takeLatest(ACTION_INPUT_USER, requestRepos, api)
}

function* requestRepos(api) {
    yield delay(300)
    const user = yield select(getInputUser)
    if(user) {
        try {
            yield put(actions.actionFetchRepos(user))
            const response = yield call(api.requestRepos, user)
            yield put(actions.actionFetchReposOk(response, user))
        } catch(err) {
            yield put(actions.actionFetchReposFail(err, user))
            yield put(actions.actionPushError(err.message))
        }
    }
}