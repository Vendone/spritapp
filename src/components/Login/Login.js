import React, { useState } from 'react';
import { login } from '../../features/User/userSlice';
import { useDispatch } from 'react-redux';

export const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleClick = () => {
        const body = {
            "email": email,
            "password": password
        };
        dispatch(login(body));
    }
    return (
        <div className='logincard'>
            <h1>Login</h1>
            <div className='register'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" onChange={handleEmail} />
                <label htmlFor="password">Passwort</label>
                <input type="password" name="password" placeholder="Password" onChange={handlePassword} />
                <input type="submit" onClick={handleClick} name="submit" />
            </div>
        </div>
    );
};