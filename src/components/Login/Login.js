import React, { useState, useEffect } from 'react';
import { login } from '../../features/User/userSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
    useEffect(() => {
        window.location.href = "http://localhost:4001/login";
    }, []);

    return (
        <div><h1>Login</h1></div>
    );
};