import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 

function AddFriend (props) {

    const navigate = useNavigate();
    const [newFriend, setNewFriend] = useState({})

    const handleChange = (event) => { 
        setNewFriend ( {
            ...newFriend,
            id: Date.now(),
            [event.target.id]: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(newFriend)
        const token = localStorage.getItem('token');
        axios.post(
            'http://localhost:9000/api/friends', 
            newFriend, 
            {headers: {authorization: token}}
        )
            .then (res => {
                console.log(res.data);
                navigate('/friendslist');
            })
            .catch (error => {
                console.log(error);
            })
    }
    return (
        <div>
            <h1>ADD FRIEND</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='friendName'>FRIEND NAME</label>
                    <input id='name' onChange={handleChange} ></input>
                </div>
                <div>
                    <label htmlFor='age'>FRIEND AGE</label>
                    <input id='age' onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='email'>FRIEND EMAIL</label>
                    <input id='email' onChange={handleChange}></input>
                </div>
                <button type='submit' >SUBMIT</button>
            </form>        
        </div>
    )
}

export default AddFriend;