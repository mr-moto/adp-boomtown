import React from "react";
import ReactDOM from "react-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import registerServiceWorker from "./registerServiceWorker";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./config/apolloClient";
import { login, logout } from "./redux/modules/auth";
import { firebaseAuth } from "./config/firebase";

import "./index.css";
import muiTheme from "./config/theme";
import Routes from "./routes/";
import Layout from "./components/Layout";

firebaseAuth.onAuthStateChanged(user => {
    if (user) {
        store.dispatch(login(user));
    } else {
        store.dispatch(logout());
    }
});

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <ApolloProvider client={client} store={store}>
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </ApolloProvider>
    </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById("root"));
registerServiceWorker();
