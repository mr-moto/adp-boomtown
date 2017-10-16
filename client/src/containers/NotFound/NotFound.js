import React, { Component } from 'react';
import notFound404 from '../../images/boomtown-logo.svg'
import './styles.css'

class NotFound extends Component {
    render() {
        return (
            <div className="notFoundContainer">
                <img className="notfound-image" src={notFound404} alt="not found"/>
                <h1>page not found</h1>
            </div>
        );
    }
}

export default NotFound;