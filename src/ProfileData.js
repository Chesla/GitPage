import React from 'react';
import './App.css';
class ProfileData extends React.Component{
  constructor(props){
    super(props);
  }
  
  
  render(){
      const {user_details} = this.props;
    return (
      <div>
        <div >
            <img className={'profileImage'} src={user_details.avatar_url}/>
        </div>
        <div className={'profileName'}>{user_details.name}</div>
        <div className={'profileLink'}>{user_details.login}</div>
        <div className={'profileBio'}>{user_details.bio}</div>
        <div className={'profileDesc'}>{user_details.company}</div>
        <div className={'profileDesc'}>{user_details.location}</div>
        <div className={'profileDesc'}>Sign in to view email</div>
      </div>
    )
  }
}


export default ProfileData;
