import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUser, selectUsers } from '../../features/User/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Register = () => {
    const store = useSelector(selectUsers);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleClick = () => {
        const body = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": password,
            "confirm_password": confirmPassword
        };
        dispatch(postUser(body));
    }

    return (
        <div className='logincard'>
            <h1>Sign-In</h1>
            <div className='register'>
                <label htmlFor="first_name">Vorname</label>
                <input type="text" name="first_name" placeholder="Vorname eingeben" value={firstName} onChange={handleFirstName} />
                <label htmlFor="last_name">Nachname</label>
                <input type="text" name="last_name" placeholder="Nachname eingeben" value={lastName} onChange={handleLastName} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email eingeben" value={email} onChange={handleEmail} />
                <label htmlFor="password">Passwort</label>
                <input type="password" name="password" placeholder="Passwort eingeben" value={password} onChange={handlePassword} />
                <label htmlFor="confirm_password">Passwort wiederholen</label>
                <input type="password" name="confirm_password" placeholder="Passwort wiederholen" value={confirmPassword} onChange={handleConfirmPassword} />
                <input type="submit" onClick={handleClick} name="submit" />
            </div>
        </div>
    );
};