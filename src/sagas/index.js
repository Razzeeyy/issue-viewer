import { all } from 'redux-saga/effects'
import { watchInputUser, watchInputSearch } from './input'

export default function* rootSaga(api) {
    yield all([
        watchInputUser(api),
        watchInputSearch(api)
    ])
}