import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponent/ProfileUserDetails'
import ReqUserPostPart from '../../Components/ProfileComponent/ReqUserPostPart'

function Profile() {
  return (
    <div className='px-20'>
      <div>
        <ProfileUserDetails />
      </div>
      <div>
        <ReqUserPostPart />
      </div>
    </div>
  )
}

export default Profile
