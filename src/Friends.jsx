import { useEffect, useState } from 'react'
import './assets/friends.css';
import Friend from './Friend';
 export default function Friends(){
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return(
        <div className='card'>
            <h3>Friends: {friends.length }</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
 }