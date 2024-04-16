import React from "react";
import './style.css';


const Users=({key,user})=>{
    return <div className="users-container" key={key} user={user}>
            <img className="profile-img" src={user.profilePictureUrl} alt="profile"/>

        <p>{user.name}</p>
    </div>
}

export default Users;