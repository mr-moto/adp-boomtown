import { combineReducers } from 'redux';
import itemReducer from './itemsReducer';

export const rootReducer = combineReducers({
    users: itemReducer,
})