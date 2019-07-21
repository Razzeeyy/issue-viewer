import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'

const middleware = [
    process.env.NODE_ENV === 'development' ? logger : null,
    createSagaMiddleware()
].filter(x => x !== null)

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store