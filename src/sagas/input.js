import { takeLatest } from 'redux-saga/effects'
import { ACTION_INPUT_USER, ACTION_INPUT_REPO, ACTION_INPUT_SEARCH } from '../constants'

export function* watchInputUserAndRepo() {
    yield takeLatest([ACTION_INPUT_USER, ACTION_INPUT_REPO], () => console.log("input"))
}

export function* watchInputSearch() {
    yield takeLatest(ACTION_INPUT_SEARCH, () => {console.log("search")})
}