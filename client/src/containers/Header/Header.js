import React, { Component } from 'react'
import { MuiThemeProvider, AppBar } from 'material-ui'
import Logo from '../../components/Common/Logo'
import Filter from '../../components/Common/Filter'
import AccountButtons from '../../components/Common/AccountButton'
import './styles.css'

class Header extends Component {
    state = {}
    

    render() {
        return(
            <AppBar 
                showMenuIconButton={false}
                title={<div className="leftContainer"><Logo /><Filter /></div>}
                iconElementRight={<AccountButtons/>}
                style={{
                    backgroundColor: "#fff",
                    height: '64px'
                }}
            />
        )
    }
}


export default Header