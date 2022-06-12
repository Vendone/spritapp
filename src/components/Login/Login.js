import React, { useEffect } from 'react';


export const Login = () => {
    useEffect(() => {
        window.location.href = "https://vendosprit.herokuapp.com/auth/login";
    }, []);

    return (
        <div><h1>Login</h1></div>
    );
};