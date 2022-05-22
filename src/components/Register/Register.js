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
        <div class="container">
            <div class="screen">
                <div class="screen__content">
                    <div class="login">
                        <div class="login__field">
                            <i class="login__icon fas fa-user"></i>
                            <input type="text" name="first_name" class="login__input" placeholder="Vorname" value={firstName} onChange={handleFirstName} />
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-user"></i>
                            <input type="text" name="last_name" class="login__input" placeholder="Nachname" value={lastName} onChange={handleLastName} />
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-envelope"></i>
                            <input type="email" name="email" class="login__input" placeholder="Email" value={email} onChange={handleEmail} />
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-lock"></i>
                            <input type="password" name="password" class="login__input" placeholder="Passwort" value={password} onChange={handlePassword} />
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-lock"></i>
                            <input type="password" name="confirm_password" class="login__input" placeholder="Passwort wiederholen" value={confirmPassword} onChange={handleConfirmPassword} />
                        </div>
                        <button class="button login__submit" onClick={handleClick}>
                            <span class="button__text">Register Now</span>
                            <i class="button__icon fas fa-chevron-right"></i>
                        </button>
                    </div>
                    <div class="social-login">
                        <h3>log in via</h3>
                        <div class="social-icons">
                            <a href="#" class="social-login__icon fab fa-instagram"></a>
                            <a href="#" class="social-login__icon fab fa-facebook"></a>
                            <a href="#" class="social-login__icon fab fa-twitter"></a>
                        </div>
                    </div>
                </div>
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};