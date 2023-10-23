import React from 'react';

function FriendsList (props) {
    return (
        <div>
            <h1>FRIENDS LIST</h1>

            {[1, 2, 3].map(friend => {
                return <div key={friend} >name - age - email</div>
            })}  
        </div>
    )
}

export default FriendsList;