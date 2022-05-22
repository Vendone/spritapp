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
                            <input type="password" name="password" className="login__input" placeholder="Password" />
                        </div>
                        <button className="button login__submit" onClick={handleClick} name="submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </div>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div clclassNameass="social-icons">
                            <a href="#" className="social-login__icon fab fa-instagram"></a>
                            <a href="#" className="social-login__icon fab fa-facebook"></a>
                            <a href="#" className="social-login__icon fab fa-twitter"></a>
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