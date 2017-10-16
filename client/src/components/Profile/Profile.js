import React, { Component } from 'react';
import { ItemsList } from '../ItemsList'
import './styles.css';

class Profile extends Component {
    render() {
        return (
            <div className="profileItemList">
                <ItemsList itemsData={this.props.userItems} />
            </div>
        );
    }
}

export default Profile;