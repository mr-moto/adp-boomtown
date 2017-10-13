import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux'
import {rootReducer} from './reducers'

const configStore = ( initialState ) => {
    const middleware = process.env.NOD_ENV !== 'production' ?
    [thunk, createLogger()] : [thunk]

    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

    const store = createStoreWithMiddleware(rootReducer, initialState)

    return store
}

export default configStore