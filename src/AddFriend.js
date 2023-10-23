import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function AddFriend (props) {
    return (
        <div>
            <h1>ADD FRIEND</h1>

            <form>
                <div>
                    <label htmlFor='friendName'>FRIEND NAME</label>
                    <input></input>
                </div>
            
                <div>
                    <label htmlFor='friendEmail'>FRIEND EMAIL</label>
                    <input></input>
                </div>

                <button type='submit' >SUBMIT</button>
            </form>        
        </div>
    )
}

export default AddFriend;