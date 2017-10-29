import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import client from './config/apolloClient';
import { login, logout } from './redux/modules/auth';
import { firebaseAuth } from './config/firebase';

import './index.css';
import muiTheme from './config/theme';
import Routes from './routes/';
import Layout from './components/Layout';

firebaseAuth.onAuthStateChanged(user => {
    if (user) {
        store.dispatch(login(user));
    } else {
        store.dispatch(logout());
    }
});

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <Layout>
                <Routes />
            </Layout>
        </Router>
    </MuiThemeProvider>
);

ReactDOM.render(
    <ApolloProvider client={client} store={store}>
        <Boomtown />
    </ApolloProvider>,
    document.getElementById('root')
);
registerServiceWorker();
