import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers/reducer'

function configureStore() {
    const isDev = process.env.NODE_ENV === 'development'

    const middleware = [
        isDev ? logger : null,
        createSagaMiddleware()
    ].filter(x => x !== null)

    const store = createStore(
        reducer,
        applyMiddleware(...middleware)
    )

    return store
}

export default configureStore