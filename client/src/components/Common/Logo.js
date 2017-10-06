import React, { Component } from 'react'
import boomLogo from '../../images/boomtown-logo.svg'


const Logo = () => (
    <a href="/" className="logoContainer">
        <img className="logo" src={boomLogo} alt="" />
    </a>
);


export default Logo