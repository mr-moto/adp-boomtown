import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import configStore from './configStore';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './config/apolloClient';

import './index.css';
import muiTheme from './config/theme';
import Routes from './routes/';
import Layout from './components/Layout';

const store = configStore();

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
