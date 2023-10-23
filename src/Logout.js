import React, { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";


const Logout = () => {
    if (!localStorage.getItem('token')) return <Navigate to={'/login'} />
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect ( () => {
        axios.post('http://localhost:9000/api/logout', {}, {headers: {authorization: token}})
        .then (res => {
            console.log(res);
            localStorage.removeItem('token');
            navigate('/login');
        })
        .catch (error => {
            console.log(error)
        })
    }, [])
    

    
}

export default Logout;