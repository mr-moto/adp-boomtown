import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import Gravatar from 'react-gravatar'

// class ProfileCard extends Component {
//     render() {
//         const {userData} = this.props
//         return (
//             <Paper style={{ maxWidth: '800px', margin: '0 auto' }}>
//                 <div className="profileContent">
//                     <div className="nameBio">
//                         <h2>:(</h2>
//                         <p></p>
//                     </div>
//                     <div className="userMeta">
//                         <div className="sharedBorrowed">
//                             <p><span></span> items shared</p>
//                             <p><span></span> items borrowed</p>
//                         </div>
//                         {/* <Gravatar email={userData.email} size={180} className="gravatarImage" /> */}
//                     </div>
//                 </div>
//             </Paper>
//         );
//     }
// }
const ProfileCard = ({userData}) => {
    return (
        <Paper style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="profileContent">
                <div className="nameBio">
                    <h2>{userData.fullName}</h2>
                    <p>{userData.bio}</p>
                </div>
                <div className="userMeta">
                    <div className="sharedBorrowed">
                        <p><span>{userData.shareCount}</span> items shared</p>
                        <p><span>{userData.borrowCount}</span> items borrowed</p>
                    </div>
                    <Gravatar email={userData.email} size={180} className="gravatarImage" />
                </div>
            </div>
        </Paper>
    );
}
export default ProfileCard;