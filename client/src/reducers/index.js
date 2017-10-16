import { combineReducers } from 'redux';
import itemReducer from './itemsReducer';
import userReducer from './usersReducer';

export const rootReducer = combineReducers({
    items: itemReducer,
    user: userReducer
})