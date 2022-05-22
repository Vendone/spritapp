import React, { useState } from 'react';
import { postUser } from '../../features/User/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const Register = () => {
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
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <div className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" name="first_name" className="login__input" placeholder="Vorname" value={firstName} onChange={handleFirstName} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" name="last_name" className="login__input" placeholder="Nachname" value={lastName} onChange={handleLastName} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-envelope"></i>
                            <input type="email" name="email" className="login__input" placeholder="Email" value={email} onChange={handleEmail} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" name="password" className="login__input" placeholder="Passwort" value={password} onChange={handlePassword} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" name="confirm_password" className="login__input" placeholder="Passwort wiederholen" value={confirmPassword} onChange={handleConfirmPassword} />
                        </div>
                        <button className="button login__submit" onClick={handleClick}>
                            <span className="button__text">Register Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </div>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <Link to='#'><i className='social-login__icon fab fa-instagram'></i></Link>
                            <Link to='#'><i className='social-login__icon fab fa-facebook'></i></Link>
                            <Link to='#'><i className='social-login__icon fab fa-twitter'></i></Link>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};