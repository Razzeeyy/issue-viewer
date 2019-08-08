import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import rootSaga from './sagas'
import configureApi from './api'

export default function configureStore() {
    const isDev = process.env.NODE_ENV === 'development'

    const sagaMiddleware = createSagaMiddleware()

    const middleware = [
        isDev ? logger : null,
        sagaMiddleware
    ].filter(x => x !== null)

    const store = createStore(
        reducer,
        applyMiddleware(...middleware)
    )

    const api = configureApi()

    sagaMiddleware.run(rootSaga, api)

    return store
}