import React from 'react'
import { ItemsList } from '../ItemsList'
import { ProfileCard } from './'
import './styles.css'

const Profile = ({user}) => {
    return (
        <div className="profile">
            <ProfileCard userData={user}/>
            <ItemsList itemsData={user.owneditems} />
        </div>
    )
}

export default Profile;