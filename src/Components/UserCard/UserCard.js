import React, { useEffect, } from 'react';
import './UserCard.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FaAddressCard } from 'react-icons/fa'
import { BiLink } from 'react-icons/bi'

const UserCard = ({ setUser, user, username }) => {

    useEffect(() => {

        async function handleData() {
            const result = await fetch(`https://api.github.com/users/${username}`)
            const data = await result.json()
            setUser(data)
        }
        handleData()
    }, [username])


    return (
        <div className='usercard'>

            <div className='profile_head'>
                <div className="profile_img">
                    <img src={user.avatar_url} alt="" />
                </div>

                <div className="name">
                    <h4>{user.name}</h4>
                    <span>
                        @{user.login}
                    </span>
                </div>
                <button>Follow</button>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus</p>
           
           <div className="user_icon_container">
           <div className="location">
                <HiOutlineLocationMarker className='user_icon' />
                <span >{user.location} </span>
            </div>
            <div className="address">
                <FaAddressCard className='user_icon' />
                <span>{user.location}</span>
            </div>
            <div className="link">
                <BiLink className='user_icon' />
                <span>{user.blog}</span>
            </div>
           </div>
            
        </div>
    );
};

export default UserCard;

