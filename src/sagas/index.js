import { all } from 'redux-saga/effects'
import { watchInputUserAndRepo, watchInputSearch } from './input'

export default function* rootSaga(api) {
    yield all([
        watchInputUserAndRepo(),
        watchInputSearch()
    ])
}