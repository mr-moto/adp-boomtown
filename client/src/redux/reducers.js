import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import client from "../config/apolloClient";
import itemReducer from "./modules/items";

const reducers = {
    form: formReducer,
    apollo: client.reducer(),
    items: itemReducer
};

export const rootReducer = combineReducers(reducers);
