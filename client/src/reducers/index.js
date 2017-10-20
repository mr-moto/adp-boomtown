import { combineReducers } from 'redux';
import client from '../config/apolloClient';
import itemReducer from './itemsReducer';


export const rootReducer = combineReducers({
    apollo: client.reducer(),
    items: itemReducer
})