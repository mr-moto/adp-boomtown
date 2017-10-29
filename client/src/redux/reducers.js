import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import client from "../config/apolloClient";
import itemReducer from "./modules/items";
import authReducer from "./modules/auth";

export default combineReducers({
    form: formReducer,
    apollo: client.reducer(),
    items: itemReducer,
    auth: authReducer
});
