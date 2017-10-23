import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MuiThemeProvider, AppBar, SelectField, MenuItem, RaisedButton } from 'material-ui'
import { Filter } from '../../components/Filter'
import PropTypes from 'prop-types'
import boomLogo from '../../images/boomtown-logo.svg'
import './styles.css'

class Header extends Component {
    render() {
        let location = window.location.href;
        console.log(location)
        return(
            <AppBar 
                showMenuIconButton={false}
                title={
                    <div className="leftContainer">
                        <Link to="/" className="logoContainer">
                            <img className="logo" src={boomLogo} alt="" />
                        </Link>
                        {location === 'http://localhost:3000/' ? 
                            <Filter /> 
                            : null
                        }
                    </div>
                }
                iconElementRight={
                    <div className="accountButtonContainer">
                        <RaisedButton label="My Profile" primary={true} style={{marginRight: "1rem"}} />
                        <RaisedButton label="Logout" backgroundColor="#000" labelColor="#fff"/>
                    </div>
                }
                style={{
                    backgroundColor: "#fff",
                    height: '64px'
                }}
            />
        )
    }
}

Header.PropTypes = {
    location: PropTypes.string.isRequired
}

export default Header