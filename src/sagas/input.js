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
            yield put(actions.actionFetchRepos())
            const response = yield call(api.requestRepos, user)
            yield put(actions.actionFetchReposOk(response))
        } catch(err) {
            yield put(actions.actionFetchReposFail(err))
        }
    }
}