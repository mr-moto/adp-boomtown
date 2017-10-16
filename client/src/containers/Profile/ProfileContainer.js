import React, { Component } from 'react';
import Loader from '../../components/CircularLoader';
import { Profile } from '../../components/Profile';
import { connect } from 'react-redux';
import { getItems } from '../../actions';

import './styles.css';


class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getItems();
    }
    render() { 
        const {items, users} = this.props
        return (
            <div className="profileContainer">
                {items && users ? <Profile userItems={items} user={users}/> : null}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        items: state.items.allItems.filter(item => {
            if(ownProps.match.params.userid === item.itemOwner.id) {
              return item
            }
        }),
        users: state.items.users.find(user => {
            if(ownProps.match.params.userid === user.id) {
                return user
            }
        }),
    }
}

export default connect(mapStateToProps, { getItems })(ProfileContainer);