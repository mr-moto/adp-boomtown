import React, { Component } from 'react';
import {CircularLoader} from '../../components/CircularLoader';
import { Profile } from '../../components/Profile';
// import { connect } from 'react-redux';
// import { getItems } from '../../actions';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import './styles.css';


class ProfileContainer extends Component {

    // componentDidMount() {
    //     this.props.getItems();
    // }
    render() { 
        // const {items, users} = this.props
        const {user, loading} = this.props.data
        if (loading) return <CircularLoader />;
        return (
            <div className="profileContainer">
                <Profile user={user}/>
            </div>
        );
    }
}
// const mapStateToProps = (state, ownProps) => {
//     return {
//         items: state.items.allItems.filter(item => {
//             if(ownProps.match.params.userid === item.itemowner.id) {
//               return item
//             }
//         }),
//         users: state.items.users.find(user => {
//             if(ownProps.match.params.userid === user.id) {
//                 return user
//             }
//         }),
//     }
// }

// export default connect(mapStateToProps, { getItems })(ProfileContainer);

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
                borrower {
                    fullname
                }
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