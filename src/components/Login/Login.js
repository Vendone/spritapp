import React, { useState } from 'react';
import { login } from '../../features/User/userSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = () => {
        const body = {
            "email": email,
            "password": password
        };
        dispatch(login(body));
    }
    const handleRegister = () => {
        navigate('/register');
    }
    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <div className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" name="email" className="login__input" placeholder="Email" onChange={handleEmail} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" name="password" className="login__input" placeholder="Password" onChange={handlePassword} />
                        </div>
                        <button className="button login__submit" onClick={handleSubmit} name="submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                        <button className="button login_register" onClick={handleRegister} name="register">
                            <span className="button__text">Register</span>
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