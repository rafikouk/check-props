import React from 'react'

const Profile = ({fullName,bio,profession,children,alert}) => {
  return (
    <div>
        <button onClick={() =>{alert(fullName)}}>who am i ?</button>
        <h1>fullName : {fullName} </h1>
        <h1>bio : {bio}</h1>
        <h1>profession : {profession}</h1>
        <div>
            {children}
        </div>

    </div>
  )
}

export default Profile