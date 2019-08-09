import { all } from 'redux-saga/effects'
import { watchInputSearch } from './input'

export default function* rootSaga(api) {
    yield all([
        watchInputSearch(api)
    ])
}