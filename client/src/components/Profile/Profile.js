import React from 'react'
import { ItemsList } from '../ItemsList'
import { ProfileCard } from './'
import './styles.css'

const Profile = ({user, userItems}) => {
    return (
        <div className="profile">
            <ProfileCard userData={user}/>
            <ItemsList itemsData={userItems} />
        </div>
    )
}

export default Profile;