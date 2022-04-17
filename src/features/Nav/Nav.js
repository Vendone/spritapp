import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user">User</NavLink>
            <NavLink to="/addRoute">Route hinzufügen</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
    );
};