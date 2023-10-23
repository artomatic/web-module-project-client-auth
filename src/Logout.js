import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Logout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect ( () => {
        axios.post('http://localhost:9000/api/logout', {}, {headers: {authorization: token}})
        .then (res => {
            console.log(res);
            localStorage.getItem('token', res.data.token)
            navigate('/login')
        })
        .catch (error => {
            console.log(error)
        })
    }, [])
    

    
}

export default Logout;