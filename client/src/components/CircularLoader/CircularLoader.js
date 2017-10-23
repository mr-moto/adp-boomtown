import React, { Component } from 'react';
import theme from '../../config/theme';
import CircularProgress from 'material-ui/CircularProgress';
import './styles.css';

class CircularLoader extends Component {
    render() {
        return (
            <div className="progressWrapper">
                <CircularProgress color={theme.palette.alternateTextColor} />
            </div>
        );
    }
}

export default CircularLoader;