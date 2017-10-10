import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
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

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            <Layout>
                <Routes />
            </Layout>
        </Router>
    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
