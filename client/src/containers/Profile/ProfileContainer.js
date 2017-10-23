import React, { Component } from 'react';
import {CircularLoader} from '../../components/CircularLoader';
import { Profile } from '../../components/Profile';
// import { connect } from 'react-redux';
// import { getItems } from '../../actions';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import './styles.css';


class ProfileContainer extends Component {
    render() { 
        const {user, loading} = this.props.data
        if (loading) return <CircularLoader />;
        return (
            <div className="profileContainer">
                <Profile user={user}/>
            </div>
        );
    }
}

ProfileContainer.PropTypes = {
    data: PropTypes.object.isRequired
}

export const usersQuery = gql`
    query getUsers($id: ID!) {
        user(id: $id) {
            fullname
            email
            bio
            owneditems {
                id
                title
                description
                imageurl
                tags
                itemowner {
                    id
                    email
                    fullname
                }
                created
                available
            }
            borroweditems{
                title
            }
        }
    }
`;

export default graphql(usersQuery, {
    options: ownProps => ({
        variables: {
            id: ownProps.match.params.id
        }
    })
})(ProfileContainer)