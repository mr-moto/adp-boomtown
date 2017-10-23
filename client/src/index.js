import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import configStore from './redux/store';
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
            <ApolloProvider client={client} store={store}>
                <Router>
                    <Layout>
                        <Routes />
                    </Layout>
                </Router>
            </ApolloProvider>
        </MuiThemeProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
