import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import Gravatar from 'react-gravatar'

const ProfileCard = ({userData}) => {
    const shareCount = userData.owneditems.length
    const borrowCount = userData.borroweditems.length
    return (
        <Paper style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="profileContent">
                <div className="nameBio">
                    <h2 className="name">{userData.fullname}</h2>
                    <p className="bio">{userData.bio}</p>
                </div>
                <div className="userMeta">
                    <div className="sharedBorrowed">
                        <p><span>{shareCount}</span> Items shared</p>
                        <p><span>{borrowCount}</span> Items borrowed</p>
                    </div>
                    <Gravatar email={userData.email} size={180} className="gravatarImage" />
                </div>
            </div>
        </Paper>
    );
}
export default ProfileCard;