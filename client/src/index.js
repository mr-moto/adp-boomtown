import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import configStore from './configStore';
import { Provider } from 'react-redux';
import { 
    BrowserRouter as Router, 
    Route,
    Switch,
    Link,
    Redirect
  } from 'react-router-dom';

import './index.css';
import muiTheme from './config/theme';
import Routes from './routes/';
import Layout from './components/Layout';

const store = configStore();

const Boomtown = () => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </MuiThemeProvider>
    </Provider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
