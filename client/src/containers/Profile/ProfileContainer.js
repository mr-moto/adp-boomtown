import React, { Component } from 'react';
import Loader from '../../components/CircularLoader';
import { Profile } from '../../components/Profile';
import { connect } from 'react-redux';
import { getSingleUser } from '../../actions';


class ProfileContainer extends Component {

    componentDidMount() {
        this.props.getSingleUser(this.props.match.params.userid)
    }
    render() { 
        return (
            <div>
                {console.log(this.props.singleUser)}
            </div>
        );
    }
}

export default connect((store) => store.user, {getSingleUser})(ProfileContainer)