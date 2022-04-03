import React from 'react'
import { useSelector } from 'react-redux' // use to grab/access values of state

function Profile() {
  const user = useSelector((state) => state.user.value); // hook has fun , which allows us to which state want to access
  const themeColor = useSelector((state)=> state.theme.value);

  return (
    <div style={{background: themeColor}} className='container'>
      <h3>Profile</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile;