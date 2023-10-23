import React from 'react';

function FriendsList (props) {
    return (
        <div>
            <h1>FRIENDS LIST</h1>

            {[1, 2, 3].map(friend => {
                return <div key={friend} >friend</div>
            })}  
        </div>
    )
}

export default FriendsList;