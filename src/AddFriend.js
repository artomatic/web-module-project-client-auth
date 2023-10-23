import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function AddFriend (props) {

    const onSubmit = (event) => {
        event.preventDefault();
        
    }
    return (
        <div>
            <h1>ADD FRIEND</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='friendName'>FRIEND NAME</label>
                    <input id='friendName' ></input>
                </div>
                <div>
                    <label htmlFor='friendEmail'>FRIEND EMAIL</label>
                    <input id='friendEmail' ></input>
                </div>
                <button type='submit' >SUBMIT</button>
            </form>        
        </div>
    )
}

export default AddFriend;