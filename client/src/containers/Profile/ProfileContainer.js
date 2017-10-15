import React, { Component } from 'react';
import Loader from '../../components/CircularLoader';
import { Profile } from '../../components/Profile';


class ProfileContainer extends Component {
    render() {
        return (
            <div>
                {console.log(this.props)}
            </div>
        );
    }
}

export default ProfileContainer;