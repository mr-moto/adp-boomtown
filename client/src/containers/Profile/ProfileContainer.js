import React, { Component } from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

import { CircularLoader } from "../../components/CircularLoader";
import { Profile } from "../../components/Profile";
// import { connect } from 'react-redux';
// import { getItems } from '../../actions';

import "./styles.css";

class ProfileContainer extends Component {
    render() {
        const { user, loading } = this.props.data;
        if (loading) return <CircularLoader />;
        return (
            <div className="profileContainer">
                <Profile user={user} />
            </div>
        );
    }
}

ProfileContainer.PropTypes = {
    data: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.shape({
        owneditems: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                available: PropTypes.bool.isRequired,
                imageurl: PropTypes.string,
                itemowner: PropTypes.shape({
                    id: PropTypes.string,
                    fullname: PropTypes.string,
                    email: PropTypes.string
                }).isRequired,
                created: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                tags: PropTypes.array,
                description: PropTypes.string
            })
        ).isRequired,
        borroweditems: PropTypes.array,
        fullname: PropTypes.string.isRequired,
        bio: PropTypes.string,
        email: PropTypes.string.isRequired
    }).isRequired
};

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
                tags {
                    tagid
                    title
                }
                itemowner {
                    id
                    email
                    fullname
                }
                created
                available
            }
            borroweditems {
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
})(ProfileContainer);
