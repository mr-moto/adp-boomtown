import React, { Component } from 'react'
import { MuiThemeProvider, AppBar } from 'material-ui'
import Logo from '../../components/Common/Logo'
import Filter from '../../components/Common/Filter'
import AccountButtons from '../../components/Common/AccountButton'
import './styles.css'

class Header extends Component {
    state = {
        filter: [
            { id: 1, name: "Electronics"},
            { id: 2, name: "Household Items"},
            { id: 3, name: "Musical Instruments"},
            { id: 4, name: "Physical Media"},
            { id: 5, name: "Recreational Equipment"},
            { id: 6, name: "Sporting Goods"},
            { id: 7, name: "Tools"}
        ]
      }
    

    render() {
        return(
            <AppBar 
                showMenuIconButton={false}
                title={<div className="left-container"><Logo /><Filter filter={this.state.filter} /></div>}
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