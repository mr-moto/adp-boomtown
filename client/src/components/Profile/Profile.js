import React from 'react'
import { ItemsList } from '../ItemsList'
import { ProfileCard } from './'
import PropTypes from 'prop-types'
import './styles.css'

const Profile = ({user}) => {
    return (
        <div className="profile">
            <ProfileCard userData={user}/>
            <ItemsList itemsData={user.owneditems} />
        </div>
    )
}

Profile.PropTypes = {
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
    }).isRequired,
}

export default Profile;