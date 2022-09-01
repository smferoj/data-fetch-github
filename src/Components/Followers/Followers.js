import React, { useEffect, useState } from 'react';
import './Followers.css'

const Followers = ({user}) => {

    const [followers, setFollowers] = useState([])
    useEffect(()=>{
        function getFollowers(){
            if(user.followers_url){
                fetch(user.followers_url)
                 .then(res => (res.json()))
                 .then(data => setFollowers(data))
   
            }
        
        }
        getFollowers()
    },[user])

    return (
        <div className='followers_container'>
            <h4> List of followers</h4>
            {followers.map((follower)=>(
                 <div className="element">
                     <p>{follower.login}</p>
                 </div>
                  
        
            ))}
        </div>
    );
};

export default Followers;