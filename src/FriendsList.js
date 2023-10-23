import React, {useState, useEffect} from 'react';
import axios from 'axios';

function FriendsList (props) {

    const [friends, setFriends] = useState([]);

    useEffect( () => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:9000/api/friends', {headers: {authorization: token}})
            .then (res => {
                setFriends(res.data)
            })
            .catch (error => {
                console.log(error.response.data)
            })
    }, [])

    return (
        <div>
            <h1>FRIENDS LIST</h1>

            {friends.map(friend => {
                return <div key={friend.id} >{friend.name} - {friend.age} - {friend.email}</div>
            })}  
        </div>
    )
}

export default FriendsList;