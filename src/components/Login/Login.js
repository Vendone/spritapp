import React, { useEffect } from 'react';


export const Login = () => {
    useEffect(() => {
        window.location.href = "http://localhost:4001/auth/login";
    }, []);

    return (
        <div><h1>Login</h1></div>
    );
};