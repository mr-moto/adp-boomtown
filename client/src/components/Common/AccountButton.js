import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: "0 12px"
  };
const AccountButtons = () => (
    <div className="accountButtonContainer">
                <RaisedButton label="My Profile" primary={true} style={style} />
                <RaisedButton label="Logout" style={style} backgroundColor="#000" labelColor="#fff"/>
            </div>
  );
export default AccountButtons