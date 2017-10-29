import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import client from "../config/apolloClient";

export default createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, createLogger(), client.middleware())
    )
);
