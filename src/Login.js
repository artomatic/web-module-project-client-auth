import React, {useState,} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login (props) {

    const [credentials, setCredentials] = useState({username: '', password: ''})
    const navigate = useNavigate();
    const handleChange = (event) => {
        setCredentials({...credentials, [event.target.id]: event.target.value})
    }
    const onSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:9000/api/login', credentials)
            .then (res => {
                console.log(res.data);
                const {token} = res.data;
                localStorage.setItem('token', token)
                navigate('/friendslist');
            })
            .catch (error => {
                console.log(error.response.data.error)
            })
    }
    return (
        <div className='loginWrapper' >
            <h1>LOGIN</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='username'>USERNAME</label>
                    <input className='blackbox' id='username' onChange={handleChange} ></input>
                </div>
                <div>
                    <label htmlFor='password'>PASSWORD</label>
                    <input className='blackbox' id='password' type='password' onChange={handleChange}></input>
                </div>
                <div>
                    <button type='submit' className='blackbox' >SUBMIT</button>
                </div>
                
            </form>        
        </div>
    )
}

export default Login;