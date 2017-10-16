import { combineReducers } from 'redux'
import itemReducer from './itemsReducer'

export const rootReducer = combineReducers({
    items: itemReducer
})